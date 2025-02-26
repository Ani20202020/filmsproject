// import React, { useState } from "react";
// import { Table } from "../../components/table/table.js";  // Import ենք անում մեր Table-ը
// import { Pagination } from "../../components/pagination/pagination";  // Import ենք անում pagination-ը

// export const MoviesPage = ({ data }) => {
//   // Պահում ենք ընթացիկ էջը
//   const [currentPage, setCurrentPage] = useState(1);
//   const moviesPerPage = 5; // Ամեն էջում 5 ֆիլմ

//   // Հաշվում ենք, որ հատվածը ցույց տանք
//   const indexOfLastMovie = currentPage * moviesPerPage;
//   const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
//   const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);

//   return (
//     <div>
//       {/* Այստեղ ցուցադրում ենք մեր աղյուսակը (Table) */}
//       <Table data={currentMovies} onRowClick={(movie) => console.log(movie)} />

//       {/* Այստեղ ցուցադրում ենք pagination-ը */}
//       <Pagination
//         totalPages={Math.ceil(data.length / moviesPerPage)}
//         currentPage={currentPage}
//         onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// };
