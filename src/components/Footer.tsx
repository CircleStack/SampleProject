import { Box, Typography, Link, Grid, IconButton, Button, TextField, Stack, InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box component="footer" className="footer_footer__mqdak" sx={{ alignItems: "center",alignContent:"center",marginTop:"100px", borderTop: '0.2px solid #888'}}>
      <Grid container  className="footer_grid__yp2LW" marginLeft={"40px"} marginTop={"50px"}>
        <Grid item xs={6} sm={4} md={2}>
          <Box className="stack_stack__iZkUS" display="flex" flexDirection="column" alignItems="stretch">
            <Link
              href="https://vercel.com/home?utm_source=next-site&utm_medium=footer&utm_campaign=next-website"
              target="_blank"
              rel="noopener noreferrer"
              title="Go to the Vercel website"
              sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
            >
            <svg fill="none" height="20" viewBox="0 0 283 64">
    <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#FFF"></path>
</svg>

            </Link>
            <Box display="flex" gap={2}>
              <IconButton href="https://github.com/vercel/next.js" target="_blank" rel="noopener" aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://twitter.com/nextjs" target="_blank" rel="noopener" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} marginLeft={"-20px"}>
          <Typography variant="h6" fontSize={"14px"}>Resources</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="/docs" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Docs</Link>
            <Link href="/learn" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Learn</Link>
            <Link href="/showcase" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Showcase</Link>
            <Link href="/blog" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Blog</Link>
            <Link href="https://vercel.com/analytics?utm_source=next-site&utm_medium=footer&utm_campaign=home" target="_blank" rel="noopener" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Analytics</Link>
            <Link href="/conf" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Next.js Conf</Link>
            <Link href="https://vercel.com/products/previews?utm_source=next-site&utm_medium=footer&utm_campaign=home" target="_blank" rel="noopener" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Previews</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} marginLeft={"-20px"}>
          <Typography variant="h6" fontSize={"14px"}>More</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="https://vercel.com/templates/next.js/nextjs-commerce?utm_source=next-site&utm_medium=footer&utm_campaign=home" target="_blank" rel="noopener" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Next.js Commerce</Link>
            <Link href="https://vercel.com/contact/sales?utm_source=next-site&utm_medium=footer&utm_campaign=home" target="_blank" rel="noopener" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Contact Sales</Link>
            <Link href="https://github.com/vercel/next.js" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>GitHub</Link>
            <Link href="https://github.com/vercel/next.js/releases" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Releases</Link>
            <Link href="/telemetry" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Telemetry</Link>
            <Link href="/governance" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Governance</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} marginLeft={"-20px"}>
          <Typography variant="h6" fontSize={"14px"}>About Vercel</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="https://vercel.com/solutions/nextjs?utm_source=next-site&utm_medium=footer&utm_campaign=home" target="_blank" rel="noopener" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Next.js + Vercel</Link>
            <Link href="https://vercel.com/oss?utm_source=next-site&utm_medium=footer&utm_campaign=home" target="_blank" rel="noopener" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Open Source Software</Link>
            <Link href="https://github.com/vercel" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>GitHub</Link>
            <Link href="https://twitter.com/vercel" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Twitter</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} marginLeft={"-20px"}>
          <Typography variant="h6" fontSize={"14px"}>Legal</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" sx={{ color: '#888', fontSize: '14px', textDecoration: 'none', '&:hover': { color: 'white' } }}>Privacy Policy</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} marginLeft={"-20px"}>
          <Typography variant="h6" fontSize={"14px"}>Subscribe to our newsletter</Typography>
          <Typography fontSize={"14px"} color="#888">Stay updated on new releases and features, guides, and case studies.</Typography>
          <Box component="form" action="" method="POST" encType="multipart/form-data" sx={{ color: 'white' }}>
            <TextField 
              type="email" 
              name="email" 
              aria-label="Enter your email" 
              placeholder="you@domain.com" 
              required 
              fullWidth 
              margin="normal" 
              color="primary"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#333', '&:hover': { backgroundColor: '#555' } }}>
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
                sx: { backgroundColor: 'white', borderRadius: '4px' }
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Stack>
          <Typography>&copy; 2024 Vercel, Inc.</Typography>
          <Box display="flex" gap={2}>
            <IconButton
              href="https://github.com/vercel/next.js"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              sx={{ color: 'white' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/nextjs"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              sx={{ color: 'white' }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
