import React, { useContext, useReducer, useEffect, useRef, useState } from "react";
import { Table } from "../../components/table/table";
import { Modal } from "../../components/modal/modal";
import { omdbApi } from "../../api/omdb.js";
import { MovieDetails } from "./movie-details/movie-details";
import { MoviesContext } from "../../context/moves-context.js";
import { APP_TITLE } from "../../utils/constants.js";
import { getAppTitleByMovie } from "../../utils/helpers";
import { Pagination } from "../../components/pagination/pagination"; // Եթե ունեք պեգինեյշն կոմպոնենտը



import "./searchMovies.css"; 

const initialState = {
  data: [],
  open: false,
  selectedMovie: null,
};

const searchMovieReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_MODAL_OPEN":
      return { ...state, open: action.payload };
    case "SET_SELECTED_MOVIE":
      return {
        ...state,
        open: action.payload.open,
        selectedMovie: action.payload.selectedMovie,
      };
    default:
      return state;
  }
};

export const SearchMovies = () => {
  const { searchQuery } = useContext(MoviesContext);
  const [state, dispatch] = useReducer(searchMovieReducer, initialState);
  const timeoutIdRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (page = 1) => {
    const query = searchQuery && searchQuery.trim() !== "" ? searchQuery : "popular";
    const response = await omdbApi.fetchMoviesBySearch(query, page);
    if (response.success) {
      dispatch({ type: "SET_DATA", payload: response.data.Search || [] });
      setTotalPages(Math.ceil(response.data.totalResults / 10));
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      setCurrentPage(1);
      fetchMovies(1);
    }, 1000);
    return () => clearTimeout(timeoutIdRef.current);
  }, [searchQuery]);

  const handleRowClick = (row) => {
    dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: { open: true, selectedMovie: row },
    });
    document.title = getAppTitleByMovie(row.Title, row.Year);
    window.history.pushState(null, "", `?movieId=${row.imdbID}&title=${encodeURIComponent(row.Title)}&year=${row.Year}`);
  };

  const handleCloseModal = () => {
    dispatch({ type: "SET_MODAL_OPEN", payload: false });
    dispatch({ type: "SET_SELECTED_MOVIE", payload: { open: false, selectedMovie: null } });
    window.history.replaceState("", "", "/");
    document.title = APP_TITLE;
  };

  return (
    <div className="search-movies-container">
      <Table data={state.data} onRowClick={handleRowClick} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <Modal
        open={state.open}
        onClose={handleCloseModal}
        title={getAppTitleByMovie(state.selectedMovie?.Title, state.selectedMovie?.Year)}
      >
        <MovieDetails id={state.selectedMovie?.imdbID} />
      </Modal>
    </div>
  );
};
