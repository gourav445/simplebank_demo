import React from 'react';
import logo from '../img/logo.svg';
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export type HeadProps = {
    title?: string;
    user?: string;

}

const theme = createTheme({
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    height: '80px'
                }
            }
        }
    },
    typography: {
        h5: {
            color: "black",
            fontSize: "xx-large"
        },
        h6: {
            color: "black",
            fontSize: "small"
        }
    }
});

function Head({title, user}: HeadProps){
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex', padding: '1px 1px 60px 1px'}}>
                <CssBaseline/>
                <AppBar position="fixed" style={{padding: '15px'}} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#c3eef6', height: '75px'}}>
                    <Toolbar >
                        <img src={logo} width="250" style={{padding: '5px 10px 5px 5px'}} alt={"Bank Logo"}/>
                        <Typography style={{margin: '0% 32.5% 0% 32.5%'}} variant="h5" component="div" noWrap sx={{flexGrow: 1}}>{title}</Typography>
                        <Box display="flex" justifyContent="flex-end">
                            <Typography variant="h6" component="div" noWrap sx={{flexGrow: 1}}>{user != null && user !== "" ? "Welcome User: " + user : ""}</Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}


export default Head;
