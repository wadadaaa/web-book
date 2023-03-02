import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const BookItem = (book) => {
  const { volumeInfo } = book;
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <Card>
      <CardMedia
        component="img"
        image={
          volumeInfo?.imageLinks?.thumbnail || "https://via.placeholder.com/100"
        }
        alt={volumeInfo?.title || "Book Cover"}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h6" component="h3">
          {volumeInfo?.title || "Unknown Title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {volumeInfo?.authors?.join(", ") || "Unknown Author"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {volumeInfo?.publishedDate || "Unknown Publication Date"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            maxHeight: showMore ? "none" : 60,
            overflow: "hidden",
          }}
        >
          {volumeInfo?.description || "No description available."}
        </Typography>
        {volumeInfo?.description && (
          <Button
            onClick={toggleShowMore}
            sx={{ display: "block", mx: "auto" }}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default BookItem;
