import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = ({sendCurrentUser, sendToken}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    const login = () => {
        console.log('user');

        if (email === '' || password === '') {
            this.setState({error: 'Invalid data.'});
        } else {
            const url_api = 'http://localhost:8000/login';
            console.log(`Sending request: ${url_api}`);

            setLoading(true);
            fetch(url_api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            }).then(response => response.json())
                .then(data => {
                    console.log('data ------------------->> ', data);
                    const api_error = data.error;
                    if (typeof api_error == 'undefined') {
                        console.log("Password is correct.");
                        sendCurrentUser(email);
                        sendToken(data.access_token)
                    } else {
                        console.log(api_error);
                    }
                    setLoading(false);
                }).catch((err) => {
                console.log(`Error API call: ${err}`);
                setLoading(false);
            });
        }
    };

    return (
        <div style={{height: '100vh', width: "100vw", display: 'flex', alignItems: 'center', justifyContent: "center"}}>
            <Paper sx={{ padding: '32px'}}>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <TextField label="Email" name="username"
                                   onChange={(event) => setEmail(event.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" name="password" type={'password'}
                                   onChange={(event) => setPassword(event.target.value)}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth onClick={login} variant={'contained'}> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Login;
