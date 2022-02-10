import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import {register} from "../logic/UserFunctions"

const Register = () => {

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
        <div><h1>REGISTER PAGE</h1>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="firstname">First Name</label>
            <input name="firstname" type="text" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>

            </div>
            <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" placeholder="Enter your last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="emal">Email</label>
                <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                           
                </div>
                            
                 <div> <label htmlFor="password">Password</label>
            <input name="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
</div>           
       <Button type="submit" >Register</Button>     
        </form>
        
        
        
        </div>
    )
}

export default Register