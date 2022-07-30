import React from 'react';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {Box, Paper, styled} from "@mui/material";

const Title = styled(Paper)(({ theme }) => ({
    ...theme.typography.h2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: 30,
    lineHeight: '30px',
    margin: '30px'
}));
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 15,
    lineHeight: '15px',
    margin: '30px'
}));

function Landing(){
    const [cookies] = useCookies();
    let navigate = useNavigate();

    if(cookies.uid == null || cookies.uid === "null")
        navigate('/login')

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                m: 2,
            },
            margin: '15px'
        }}>
            <Title key="Title" elevation={0}>Simple Bank</Title>
            <Item key="login-status" elevation={1}>Welcome User: {cookies.uid}</Item>
        </Box>
    );
}

export default Landing;
