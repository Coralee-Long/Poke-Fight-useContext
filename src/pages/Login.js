import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { login } from "../logic/UserFunctions"
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';

//style for mui elements
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));


const Login = () => {
    //use mui style
    const classes = useStyles();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const testLogin = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        login(user).then(res => {
            if (res) {

                navigate('/welcome')
            }
        })
    }

    return (
        <div className="mainDivLanding mainBackground">
            <div className="mainDivRegisterTitle">
                <h1>SIGN IN</h1>
            </div>
            <div className="divFormRegister">

                <form onSubmit={testLogin} className={classes.root}>
                    <TextField fullWidth label="Email" variant="filled" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField fullWidth label="Password" variant="filled" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div>
                        <Button className="btnSignUp" type="submit" variant="contained" color="primary">Sign In</Button>
                        <Button className="btnSignUp" variant="contained" color="primary" onClick={() => navigate('/')}>Cancel</Button>
                    </div>
                </form>

            </div>
        </div>
        //                 <div >
        //                    <h1 className="">Please sign in</h1>

        //                     <form noValidate onSubmit={testLogin}>
        //                                                 <h1>LOG IN PAGE</h1>
        //                         <div> <label htmlFor="email">Email</label>
        //                 <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        //                 </div>

        //                         <div> <label htmlFor="password">Password</label>
        //             <input name="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        //                         </div>
        //                         <Button type="submit" >Login</Button>      
        // </form>
        //                   </div>

    )
}
export default Login