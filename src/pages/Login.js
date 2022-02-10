import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {login} from "../logic/UserFunctions"

const Login = () => {

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
                <div >
                   <h1 className="">Please sign in</h1>

                    <form noValidate onSubmit={testLogin}>
                                                <h1>LOG IN PAGE</h1>
                        <div> <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                        
                        <div> <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <Button type="submit" >Login</Button>      
</form>
                  </div>
                    
                    )
    }
export default Login