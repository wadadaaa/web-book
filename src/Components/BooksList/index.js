import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import { useState } from "react";

import { useGlobalContext } from "../../context";
import Loader from "../Loader";
import Header from "../Header";
import BookItem from "../BookItem";
import Pagination from "../Pagination";

const useStyles = makeStyles(() => ({
  title: {
    marginBottom: "1rem",
  },
}));

function BooksList() {
  const classes = useStyles();
  const { books, loading } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

  if (loading) return <Loader />;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        <Header />
      </Typography>
      <Grid container spacing={4}>
        {currentBooks.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <BookItem {...book} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

export default BooksList;
