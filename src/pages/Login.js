dimport React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

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
                navigate('/profile')
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">

                    <h1>LOG IN PAGE</h1></div>)
            </div>
        </div>
        </div >
}

export default Login