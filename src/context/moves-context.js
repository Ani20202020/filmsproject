import { createContext, useState } from "react";

export const MoviesContext = createContext();

export const tab = {
  search: "search",
  movies: "movies",
  quiz: "quiz",
  aiBot: "aiBot", 
};

export const MoviesProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(tab.search);

  return (
    <MoviesContext.Provider
      value={{
        searchQuery,
        onSearch: setSearchQuery,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
