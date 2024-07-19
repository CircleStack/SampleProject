import { ArrowForwardOutlined } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'

const SecondStage: React.FC = () => {
    return (
        <div style={{ flex: 1, marginTop: 150 }}>
            <div style={{ marginLeft: 220 }}>
                <Typography style={{ fontSize: 20 }}><span style={{ fontSize: 30, fontWeight: "bold", color: "#000", marginRight: 15 }}>What's in Next.js?</span>Everything you need to build great products on the web.</Typography>
            </div>

            <Stack direction="row" spacing={2} marginBottom="10px" marginTop="40px">
                <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                    <CardActionArea style={{ height: 400 }}>
                        <CardMedia
                            component="img"
                            image="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-light.png&w=640&q=100"
                            style={{ height: 250, width: 300, marginLeft: 55 }}
                        />
                        <CardContent style={{ marginTop: 10 }}>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                Built-in Optimizations
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Automatic Image, Font, and Script optimizations for improved UX and Core Web Vitals
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                    <CardActionArea style={{ height: 400 }}>
                        <CardMedia
                            component="img"
                            image="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-light.png&w=640&q=100"
                            style={{ height: 250, width: 300, marginLeft: 55 }}
                        />
                        <CardContent style={{ marginTop: 10 }}>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                Dynamic HTML Streaming
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Instantly stream UI from the server, integrated with the App Router and React Suspense.

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                    <CardActionArea style={{ height: 420 }}>
                        <CardMedia
                            component="img"
                            image="https://nextjs.org/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fnextjs%2Fspheres-light.png&w=640&q=100"
                            style={{ height: 250, width: 300, marginLeft: 55 }}
                        />
                        <CardContent style={{ marginTop: 10 }}>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                React Server Components
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Add components without sending additional client-side JavaScript. Built on the latest React features.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>


            <Stack direction="row" spacing={2} marginBottom="10px" marginTop="20px">
                <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                    <CardActionArea style={{ height: 150 }}>
                        <CardContent style={{ marginTop: 10 }}>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                Data Fetching

                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{ marginRight: 20 }}>
                                Make your React component async and await your data. Next.js supports both server and client data fetching.

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                    <CardActionArea style={{ height: 150 }}>

                        <CardContent style={{ marginTop: 10 }}>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                CSS Support

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                    <CardActionArea style={{ height: 150 }}>
                        <CardContent style={{ marginTop: 10 }}>
                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                Client and Server Rendering

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>

            <Stack direction="row" spacing={2} marginBottom="10px" marginTop="20px">

                <Stack direction="column" spacing={2}>

                    <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                        <CardActionArea style={{ height: 150 }}>

                            <CardContent style={{ marginTop: 10 }}>
                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                    Server Actions


                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                    <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                        <CardActionArea style={{ height: 150 }}>
                            <CardContent style={{ marginTop: 10 }}>
                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                    Advanced Routing & Nested Layouts

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Create routes using the file system, including support for more advanced routing patterns and UI layouts.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>

                <Stack direction="column" spacing={2}>

                    <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                        <CardActionArea style={{ height: 150 }}>

                            <CardContent style={{ marginTop: 10 }}>
                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                    Route Handlers


                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ marginRight: 25 }}>
                                    Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>


                    <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' } }}>
                        <CardActionArea style={{ height: 150 }}>
                            <CardContent style={{ marginTop: 10 }}>
                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold" }}>
                                    Middleware

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Take control of the incoming request. Use code to define routing and access rules for authentication, experimentation, and internationalization
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Stack>

                <div>
                    <Card sx={{ maxWidth: 405, borderRadius: 2, '&:hover': { border: '0.5px solid black' }, backgroundColor: "#000", opacity: 0.8 }}>
                        <CardActionArea style={{ height: 250 }}>
                            <CardContent style={{ marginTop: 90 }}>
                                <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", color: "#fff" }}>
                                    Next.js 14

                                </Typography>
                                <Stack direction="row">
                                    <Typography variant="body2" color="text.secondary" style={{ color: "#fff", paddingRight: 40, fontSize: 17 }}>
                                        The power of full-stack to the frontend. Read the release notes.
                                    </Typography>
                                    <ArrowForwardOutlined style={{ color: "#fff", marginTop: 20, marginRight: 15, padding: "5px 8px", borderRadius: 35, backgroundColor: "hsla(0,0%,100%,.1)" }} fontSize="small" />
                                </Stack>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

            </Stack>
        </div>
    )
}

export default SecondStage
