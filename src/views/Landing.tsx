import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {Box, Card, CardContent, Chip, CircularProgress, Paper} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Head from "../components/Head";
import { Account } from "../service/AccountDetails"
import AccountDetails from "../service/AccountDetails"
import Typography from "@mui/material/Typography";

function Landing(){
    const initAccountsList: Account[] = []
    const [cookies] = useCookies();
    const [accounts, setAccounts] = useState(initAccountsList);
    let navigate = useNavigate();

    if(cookies.uid == null || cookies.uid === "null")
        navigate('/login')

    if(accounts.length === 0)
        AccountDetails(cookies.uid, setAccounts);

    const accountCards: JSX.Element[] = []
    if(accounts.length > 0)
        accounts.forEach((acc) => {
            // @ts-ignore
            accountCards.push(
                <Card sx={{ maxWidth: '50%'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Account: {acc.account_id}</Typography>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 400 }} aria-label="account table">
                                <TableBody>
                                    <TableRow key={acc.account_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row"><Chip label={acc.type} /></TableCell>
                                        <TableCell component="th" scope="row">Last Login: {acc.last_login}</TableCell>
                                        <TableCell component="th" scope="row">Balance: {acc.starting_balance}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            );
        });

    // @ts-ignore
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                m: 1,
            }
        }}>
            <Head title="Dashboard" user={cookies.uid}/>
            <Box sx={{display: 'flex', margin: '20px 15% 0% 15%'}}>
                <Paper elevation={2} sx={{ width: '100%' }} >
                    <Typography style={{fontSize: "40px", padding: "15px 15px 15px 15px"}} component="div" variant='h3'>{
                        accounts.length > 0 ? (accounts[0].company_name): ("")}</Typography>
                    { accountCards.length === 0 ? (<CircularProgress color="secondary"/>) : (accountCards) }
                </Paper>
            </Box>
        </Box>
    );
}

export default Landing;
