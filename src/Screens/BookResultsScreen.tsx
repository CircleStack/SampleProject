import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookResults from '../components/BookResults';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

const BookResultsScreen: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      setBooks(response.data.docs);
      console.log("Books:",books)
    } catch (error) {
      console.error("Error fetching data from Open Library API:", error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <NavBar />
      <SideBar />
      <Container style={styles.container}>
        <Typography variant="h4" style={styles.title}>
          Book Search
        </Typography>
        <SearchBar onSearch={handleSearch} />
        <Box sx={{ mt: 3 }}>
          <BookResults books={books} />
        </Box>
      </Container>
    </Box>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '100px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',   
    marginTop: '50px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    width: '150%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#1565c0',
  },
};

export default BookResultsScreen;
