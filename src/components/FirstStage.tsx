import {ArrowDropUpOutlined, ChevronRightOutlined } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'



const FirstStage: React.FC = () => {
    return (
        <div style={{ marginTop: 180, flex: 1 ,marginLeft:100 }}>
            <Stack direction="row" spacing={1} marginLeft={35}>
                <Typography style={{ fontSize: 20, fontWeight: "bold", }}>Vercel Ship</Typography>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#000',
                    height: 12,
                    width: 15,
                    marginTop: 9,
                    borderRadius: 3
                }}
                >
                    <Typography style={{ fontSize: 10, fontWeight: "bold" }}>24</Typography>
                </div>
                <Typography style={{ fontSize: 15, marginTop: 3 }}>ran</Typography>
                <Typography style={{ fontSize: 20, fontWeight: "bold", }}>May 23.</Typography>
                <Typography style={{ fontSize: 17, marginTop: 3 }}>Check out the announcements.</Typography>

                <Button variant="contained" style={{ backgroundColor: "#000", borderColor: "lightgrey", marginLeft: 10, height: 33, flexDirection: "row", borderRadius: 16 }}>
                    <Typography
                        sx={{
                            fontSize: 15,
                            color: '#fff',
                            textDecoration: 'none',
                            marginLeft: 1,
                            textTransform: 'none',

                        }}
                    >
                        Watch the Keynote
                    </Typography>
                    <ChevronRightOutlined sx={{ fontSize: 18, marginLeft: 1 }} />
                </Button>
            </Stack>

            <div style={{ marginTop: 40 }}>
                <Typography style={{ fontSize: 75, color: "#000", fontWeight: "bold" }}>The React FrameWork for the Web</Typography>
            </div>

            <div style={{ width: 900, marginLeft: 260, marginTop: 60 }}>
                <Typography style={{ width: 790, fontSize: 20 }}>Used by some of the world's largest companies, Next.js enables you to create <span style={{ color: "#000", marginLeft: 50 }}>high-quality web applications </span> with the power of React components.</Typography>
            </div>

            <Stack direction="row" spacing={2} marginLeft={58} marginTop={10}>
                <Button variant="contained" style={{ backgroundColor: "#000", borderColor: "lightgrey", marginLeft: 10, height: 50 }}>
                    <Typography
                        noWrap
                        component="a"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 13,
                            color: '#fff',
                            textDecoration: 'none',
                            marginLeft: 1,
                            textTransform: "none",
                            fontWeight: "bold"
                        }}
                    >
                        Get Started
                    </Typography>
                </Button>

                <Button variant="contained" style={{ backgroundColor: "#fff", borderColor: "lightgrey", marginLeft: 10, height: 50 }}>
                    <Typography
                        noWrap
                        component="a"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 13,
                            color: '#000',
                            textDecoration: 'none',
                            marginLeft: 1,
                            textTransform: "none"
                        }}
                    >
                        Learn Next.js
                    </Typography>
                </Button>
            </Stack>

            <Stack  direction="row" marginLeft={61} marginTop={2}>
                <ArrowDropUpOutlined style={{marginTop:2}}/>
                <Typography> ~ npx create-next-app@latest</Typography>
            </Stack>
        </div>
    )
}

export default FirstStage
