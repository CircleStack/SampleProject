import Grid from '@mui/material/Unstable_Grid2';
import BookCard from './BookCard';

const BookResults = ({ books }) => {
  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid key={book.key} xs={12} sm={6} md={3}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookResults;
