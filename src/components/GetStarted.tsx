import { Typography, Grid, Button, Card, CardMedia, CardContent, Stack, Box, Chip, IconButton } from '@mui/material';

const GetStartedSection = () => {
  return (
    <>
      <Grid container spacing={2} alignItems="center" marginTop={"100px"} marginBottom="50px">
        <Grid item marginLeft={"190px"}>
          <Typography variant="h4" fontSize={"32px"}  lineHeight={"1.25"} fontWeight={"700"} >Get started in seconds</Typography>
        </Grid>
        <Grid item marginTop="10px">
          <Typography variant="body1"  fontSize={"20px"} color="#888" lineHeight={"1.5"} >Deploy Next.js to Vercel</Typography>
        </Grid>
      </Grid>
      

      <Stack direction="row" spacing={2} marginTop="20px" >        
        <Grid container spacing={2} alignItems="flex-start" xs={6} position="relative"  >
        <Grid item marginTop="10px" marginLeft={"220px"}>
        <Stack direction="row" spacing={1}>
  <Chip
    label="Starter"
    sx={{
      backgroundColor: 'transparent',
      color: '#9c27b0',
      boxShadow: 'inset 0 0 10px rgba(156, 39, 176, 0.5)',
    }}
  />
  <Chip
    label="Ecommerce"
    sx={{
      backgroundColor: 'transparent',
      color: '#4caf50',
      boxShadow: 'inset 0 0 10px rgba(76, 175, 80, 0.5)',
    }}
  />
  <Chip
    label="Blog"
    sx={{
      backgroundColor: 'transparent',
      color: '#ffc107',
      boxShadow: 'inset 0 0 10px rgba(255, 193, 7, 0.5)',
    }}
  />
  <Chip
    label="AI"
    sx={{
      backgroundColor: 'transparent',
      color: '#2196f3',
      boxShadow: 'inset 0 0 10px rgba(33, 150, 243, 0.5)',
    }}
  />
  <Chip
    label="Edge Functions"
    sx={{
      backgroundColor: 'transparent',
      color: '#9c27b0',
      boxShadow: 'inset 0 0 10px rgba(156, 39, 176, 0.5)',
    }}
  />
  <Chip
    label="Edge Config"
    sx={{
      backgroundColor: 'transparent',
      color: '#4caf50',
      boxShadow: 'inset 0 0 10px rgba(76, 175, 80, 0.5)',
    }}
  />
  <Chip
    label="Portfolio"
    sx={{
      backgroundColor: 'transparent',
      color: '#ffc107',
      boxShadow: 'inset 0 0 10px rgba(255, 193, 7, 0.5)',
    }}
  />
  <Chip
    label="SaaS"
    sx={{
      backgroundColor: 'transparent',
      color: '#2196f3',
      boxShadow: 'inset 0 0 10px rgba(33, 150, 243, 0.5)',
    }}
  />
  <Chip
    label="Multi-tenant Apps"
    sx={{
      backgroundColor: 'transparent',
      color: '#9c27b0',
      boxShadow: 'inset 0 0 10px rgba(156, 39, 176, 0.5)',
    }}
  />
  <Chip
    label="Realtime Apps"
    sx={{
      backgroundColor: 'transparent',
      color: '#4caf50',
      boxShadow: 'inset 0 0 10px rgba(76, 175, 80, 0.5)',
    }}
  />
  <Chip
    label="Documentation"
    sx={{
      backgroundColor: 'transparent',
      color: '#ffc107',
      boxShadow: 'inset 0 0 10px rgba(255, 193, 7, 0.5)',
    }}
  />
  <Chip
    label="Virtual Event"
    sx={{
      backgroundColor: 'transparent',
      color: '#2196f3',
      boxShadow: 'inset 0 0 10px rgba(33, 150, 243, 0.5)',
    }}
  />
  <Chip
    label="Web3"
    sx={{
      backgroundColor: 'transparent',
      color: '#9c27b0',
      boxShadow: 'inset 0 0 10px rgba(156, 39, 176, 0.5)',
    }}
  />
</Stack>
</Grid>
          <Grid item marginTop="10px" marginLeft={"220px"} >
            <Typography variant="body1" fontSize={"18px"} color="#888" lineHeight={"1.78"} margin={"16px"}>
              Vercel is a frontend cloud from the creators of Next.js, making it easy to get started with Next.js quickly.
            </Typography>
          </Grid>
          <Grid item marginTop="10px" marginLeft={"220px"}>
            <Typography variant="body1" fontSize={"18px"} color="#888" lineHeight={"1.78"} margin={"16px"}>
              Jumpstart your Next.js development with pre-built solutions from Vercel and our community.
            </Typography>
          </Grid>
          <Grid item  marginLeft={"240px"}>
            <Button variant="contained" style={{ backgroundColor: '#000', color: '#fff', marginTop: '10px', textOverflow: "ellipsis" }}
            endIcon={(
              <IconButton>
                <svg
                  className="with-icon_icon__MHUeb"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{ color: 'currentColor', width: '20px', height: '20px' }}
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </IconButton>
            )}
            >
              Deploy a template on Vercel
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={6}  position="relative" marginBottom="100px">
       
      <Box
        display="flex" 
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        position="relative"        
        marginBottom="120px" 
      >
        
        <Card className="rotating-card" sx={{ width: 300, height: 300, ml: 2 , position: 'absolute', top: 0, left: 0, transform: 'rotate(-5deg)'}}>
          <CardMedia
            component="img"
            height="200"
            image="https://assets.vercel.com/image/upload/v1677122003/nextjs/showcase/template-next-commerce.jpg"
            alt="Next.js Commerce"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Next.js Commerce
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An all-in-one starter kit for high-performance ecommerce sites.
            </Typography>
          </CardContent>
        </Card>
      

        <Card className="rotating-card" sx={{ width: 300, height: 300, mx: 2 , position: 'absolute', top: 70, left:70, transform: 'rotate(-5deg)'}}>
          <CardMedia
            component="img"
            height="200"
            image="https://assets.vercel.com/image/upload/v1677122387/nextjs/showcase/template-next-gallery.jpg"
            alt="Image Gallery Starter"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Image Gallery Starter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An image gallery built on Next.js and Cloudinary.
            </Typography>
          </CardContent>
        </Card>

        <Card className="rotating-card" sx={{ width: 300, height: 300, mr: 2 , position: 'absolute', top: 150, left: 150, transform: 'rotate(0deg)'}}>
          <CardMedia
            component="img"
            height="200"
            image="https://assets.vercel.com/image/upload/v1677122002/nextjs/showcase/template-next-boilerplate.jpg"
            alt="Next.js Boilerplate"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Next.js Boilerplate
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A Next.js app and a Serverless Function API.
            </Typography>
          </CardContent>
        </Card>
      </Box>
          </Grid>
      </Stack>
    </>
  );
};

export default GetStartedSection;
