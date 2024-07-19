
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  Grid } from '@mui/material';

const FoundationTitle = () => (
  <>
  <Box sx = {{borderTop: '0.2px solid #888', borderBottom: '0.2px solid #888', }}  >
    <Typography fontSize="32px" fontWeight="700" color="#000" textAlign="center" marginTop={"100px"}>
      Built on a foundation of fast, production-grade tooling
    </Typography>
    <Box
  
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    gap: 0,
    bgcolor: '#222',
    position: 'relative',
    marginX: 'auto',
    width: 'calc(100% - 1200px)',
    height: '80px',
    marginTop: '100px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
    border: '2px solid #888',
  }}
  aria-hidden="true"
>


  <Typography
    fontSize="32px"
    fontWeight="700"
    textAlign="center"
    data-text="true"
    color="#fff"
    style={{opacity:0.6}}
  >
    Powered By
  </Typography>

  
</Box>

    <Grid
    container
    spacing={4}
    alignContent="center"
    alignItems="center"
    marginBottom={"100px"}
    sx={{ marginTop: '170px', marginLeft: '100px' }}
  >

    <Grid item xs={12} md={3} marginRight={"40px"}>
      <Box
        sx={{
          width: '370px',
          height: '230px',
          bgcolor: '#fff',
          color: '#000',
          textDecoration: 'none',
          display: 'block',
          borderRadius: '10px',
          border: '0.5px solid #888',
          p: 1,
        }}
        component="a"
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          component="img"
          alt="react logo"
          src="https://nextjs.org/icons/react.svg"
          sx={{
            width: '45px',
            height: '40px',
            marginLeft: '20px',
            marginTop: '20px',
            objectFit: 'cover',
            borderRadius: '4px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box sx={{ marginTop: '20px', p: 2 }}>
          <Typography variant="h6" gutterBottom>
            React
          </Typography>
          <Typography variant="body2" color="gray" >
            The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions.
          </Typography>
        </Box>
      </Box>
    </Grid>

    <Grid item xs={12} md={3} marginRight={"40px"}>
      <Box
        sx={{
          width: '370px',
          height: '230px',
          bgcolor: '#fff',
          color: '#000',
          textDecoration: 'none',
          display: 'block',
          borderRadius: '10px',
          border: '0.5px solid #888',
          p: 1,
        }}
        component="a"
        href="https://turbo.build"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          component="img"
          alt="turbopack logo"
          src="https://nextjs.org/icons/turbopack.svg"
          sx={{
            width: '45px',
            height: '40px',
            marginLeft: '20px',
            marginTop: '20px',
            objectFit: 'cover',
            borderRadius: '4px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box sx={{ marginTop: '20px', p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Turbopack
          </Typography>
          <Typography variant="body2" color="gray" style={{marginRight:20}}>
            An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.
          </Typography>
        </Box>
      </Box>
    </Grid>

  
    <Grid item xs={12} md={3} marginRight={"40px"} >
      <Box
        sx={{
          width: '370px',
          height: '230px',
          bgcolor: '#fff',
          color: '#000',
          textDecoration: 'none',
          display: 'block',
          borderRadius: '10px',
          border: '0.5px solid #888',
          p: 1,
        }}
        component="a"
        href="https://swc.rs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          component="img"
          alt="swc logo"
          src="https://nextjs.org/icons/swc.svg"
          sx={{
            width: '45px',
            height: '40px',
            marginLeft: '20px',
            marginTop: '20px',
            objectFit: 'cover',
            borderRadius: '4px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <Box sx={{ marginTop: '20px', p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Speedy Web Compiler
          </Typography>
          <Typography variant="body2" color="gray" style={{marginRight:20}}>
            An extensible Rust based platform for fast developer tools, used for compilation and minification.
          </Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
  </Box>
  </>
);

export default FoundationTitle;
