import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import { Button, InputBase, styled } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "lightgrey",
    opacity: 0.5,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: 38,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 190
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
}));

const ResponsiveAppBar: React.FC = () => {


    return (
        <AppBar position="fixed" style={{ backgroundColor: "#fff" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ChangeHistoryIcon style={{ color: "#000", marginRight: 40 }} fontSize="medium" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#000',
                            textDecoration: 'none',

                        }}
                    >
                        NEXT.js
                    </Typography>

                    <Typography

                        noWrap
                        component="a"
                        href="#Showcase"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 13,
                            color: '#000',
                            textDecoration: 'none',
                            marginLeft: 5
                        }}
                    >
                        Showcase
                    </Typography>

                    <Typography

                        noWrap
                        component="a"
                        href="#Showcase"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 13,
                            color: '#000',
                            textDecoration: 'none',
                            marginLeft: 2
                        }}
                    >
                        Docs
                    </Typography>

                    <Typography

                        noWrap
                        component="a"
                        href="#Showcase"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 13,
                            color: '#000',
                            textDecoration: 'none',
                            marginLeft: 2
                        }}
                    >
                        Blog
                    </Typography>

                    <Typography

                        noWrap
                        component="a"
                        href="#Showcase"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 13,
                            color: '#000',
                            textDecoration: 'none',
                            marginLeft: 2
                        }}
                    >
                        Templates
                    </Typography>

                    <Typography

                        noWrap
                        component="a"
                        href="#Showcase"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontSize: 13,
                            color: '#000',
                            textDecoration: 'none',
                            marginLeft: 2
                        }}
                    >
                        Enterprise
                    </Typography>

                    <Search style={{ marginLeft: 400, height: 38, width: 250 }}>
                        <SearchIconWrapper>
                            <Typography style={{ width: 30, height: 20, letterSpacing: 1, borderWidth: 2, backgroundColor: "#fff", color: "#000", borderRadius: 5, fontSize: 13 }}>
                                ctrlk
                            </Typography>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search documentation"
                            inputProps={{ 'aria-label': 'search' }}
                            style={{ right: 30 }}
                        />
                    </Search>

                    <Button variant="outlined" style={{color:"#000" ,borderColor:"lightgrey", marginLeft:10, height:35}}>
                        <ChangeHistoryIcon style={{ color: "#000" , paddingBottom:2}} />
                        <Typography
                            noWrap
                            component="a"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontSize: 13,
                                color: '#000',
                                textDecoration: 'none',
                                marginLeft:1
                            }}
                        >
                            Deploy
                        </Typography>
                    </Button>

                    <Button variant="contained" style={{backgroundColor:"#000" ,borderColor:"lightgrey", marginLeft:10, height:35}}>
                        <Typography
                            noWrap
                            component="a"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontSize: 13,
                                color: '#fff',
                                textDecoration: 'none',
                                marginLeft:1
                            }}
                        >
                            Learn
                        </Typography>
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
