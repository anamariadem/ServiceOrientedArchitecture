import React, {useEffect, useState} from "react";
import regeneratorRuntime from "regenerator-runtime";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {io} from "socket.io-client";

export const App = ({user, token}) => {
    const [players, setPlayers] = useState([]);

    console.log('players ------------------->> ', players, token);

    const fetchBooks = async () => {
        try {
            const fetchUrl = 'http://localhost:8000/tennis-players';
            console.log(`sending request: ${fetchUrl}`);
            let response = await fetch(fetchUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }).catch(error => {
                console.log('error ------------------->> ', error);
            });
            let json = await response.json();

            if(json.statusCode === 401) {
                return {success: false};
            }

            return {success: true, data: json};
        } catch (error) {
            console.log('error', error);
            return {success: false};
        }
    };

    useEffect(() => {
        const socket = io('http://127.0.0.1:3002', {
            autoConnect: true,
            transports: ['websocket', 'polling'],
        });
        console.log('HERE ---- >')
        socket.on('connect', () => {
            console.log('Socket connected');
        });

        socket.on('connect_error', () => {
            console.log('HERE ---- >')
            console.log('Socket not connected');
        });

        // socket.on('welcome', message => {
        //     console.log('message ------------------->> ', message);
        // })

        (async () => {
            let res = await fetchBooks();
            if (res.success) {
                setPlayers(res.data);
                console.log(players);
            }
        })();
    }, [user]);

    return <div>
        <Typography variant="h3" component="h3">
            The players
        </Typography>
        <TableContainer>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                          <TableCell>First Name</TableCell>
                          <TableCell>Last Name</TableCell>
                          <TableCell>Country</TableCell>
                          <TableCell>Date of birth</TableCell>
                          <TableCell>Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ position: 'relative' }}>
                    {
                        players.map(player =>
                          <TableRow>
                            <TableCell>{player.firstName}</TableCell>
                            <TableCell>{player.lastName}</TableCell>
                            <TableCell>{player.country}</TableCell>
                            <TableCell>{new Date(player.dob).toDateString()}</TableCell>
                            <TableCell>{player.points}</TableCell>
                          </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
};
export default App;
