import { Button, Box } from "@mui/material";

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <Button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        sx={{ margin: "0.5rem" }}
      >
        Previous
      </Button>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          sx={{ margin: "0.5rem" }}
          variant={currentPage === number ? "contained" : "outlined"}
        >
          {number}
        </Button>
      ))}
      <Button
        onClick={goToNextPage}
        disabled={currentPage === pageNumbers.length}
        sx={{ margin: "0.5rem" }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
