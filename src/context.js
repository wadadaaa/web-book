import React, { useState, useEffect, createContext, useCallback, useContext } from 'react';

const AppContext = createContext();

function AppProvider({children}) {
  const [searchTerm, setSearchTerm] = useState("react");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.log(error);
      setBooks([]);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{ books, setSearchTerm, loading }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider};
