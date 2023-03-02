import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useGlobalContext } from "../../context";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { setSearchTerm } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
      <TextField
        label="Search books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ mr: 1 }}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
export default SearchBar;
