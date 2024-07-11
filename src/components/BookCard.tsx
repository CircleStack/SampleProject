import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface BookProps {
  title: string;
  cover_i: number;
  author_name?: string[];
  first_publish_year?: number;
}

interface BookCardProps {
  book: BookProps;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const renderImg = (
    <Box
      component="img"
      alt={book.title}
      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
      sx={{
        top: 0,
        width: 1,
        height: '300px', 
        objectFit: 'cover',
        position: 'absolute',
        '&:hover': {
          backgroundColor: 'primary.dark',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );

  return (
    <Card sx={{ width: 220, height: 450, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'sticky', height: 300 }}>
        {renderImg}
      </Box>
      <Box sx={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
        <Stack spacing={2} sx={{ p: 2, height: '100%', overflowY: 'auto' }}>
          <Link color="inherit" underline="hover" variant="h6" noWrap>
            {book.title}
          </Link>
          {book.author_name && (
            <Typography variant="body2" color="textSecondary" noWrap>
              Author: {book.author_name.join(', ')}
            </Typography>
          )}
          {book.first_publish_year && (
            <Typography variant="body2" color="textSecondary" noWrap>
              First Published: {book.first_publish_year}
            </Typography>
          )}
        </Stack>
      </Box>
    </Card>
  );
};


export default BookCard;
