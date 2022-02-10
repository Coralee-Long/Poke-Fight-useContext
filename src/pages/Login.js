import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const testLogin = (e) => {
        e.preventDefault()

        const user = {
            email : email,
            password : password
        }

        login(user).then(res => {
            if(res) {
                navigate('/profile')
            }
        })
    }

    return (<div><h1>LOG IN PAGE</h1></div>)
}

export default Login