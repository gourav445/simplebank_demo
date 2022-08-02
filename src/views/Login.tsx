import React from 'react';
import {Box, Button, ButtonGroup, Paper, styled} from "@mui/material";
import {Cookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
import Head from "../components/Head";

const Users = ["9812478", "1873414"];

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.h2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    height: 30,
    lineHeight: '30px',
    margin: '30px'
}));

function Login(){
    let navigate = useNavigate();
    const handleUserButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        const cookies = new Cookies();
        cookies.set('uid', e.currentTarget.textContent, {path: '/'});
        console.log("User: " + cookies.get('uid') + " welcome!!");
        navigate("/")
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                m: 1,
            },
        }}>
            <Head title="User Login" />
            <Item key="Title" elevation={0}>Select a User!</Item>
            <ButtonGroup size="large" aria-label="large user selection group" color="info">
                {
                    Users.map((user) => (<Button onClick={(e) => handleUserButtonClick(e)} key={user}>{user}</Button>))
                }
            </ButtonGroup>
        </Box>
    );
}

export default Login;
