import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import { register } from "../logic/UserFunctions"
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import "../styles/battle.css";
import "../styles/home.css";
import "../styles/mui_styles.css";

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
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
}));


const Register = () => {
    //use mui style
    const classes = useStyles();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const createUser = (e) => {
        e.preventDefault()

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        register(newUser).then(res => {
            navigate('/welcome')
        })
    }

    return (
        <div className="mainDivLanding mainBackground">
            <div className="mainDivRegisterTitle">
                <h1>REGISTER USER</h1>
            </div>
            <div className="divFormRegister">

                <form onSubmit={createUser} className={classes.root}>
                    <TextField fullWidth label="Outlined secondary" color="secondary" label="First Name" variant="filled" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <TextField fullWidth label="Last Name" variant="filled" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <TextField fullWidth label="Email" variant="filled" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField fullWidth label="Password" variant="filled" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div>
                        <Button className="btnSignUp" type="submit" variant="contained" color="primary">Sign Up</Button>
                        <Button className="btnSignUp" variant="contained" color="primary" onClick={() => navigate('/')}>Cancel</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register