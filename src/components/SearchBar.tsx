import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <TextField
        variant="outlined"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
        sx={{ mr: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
