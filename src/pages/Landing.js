import React from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <>
            <div>
                <h1>Welcome to Pokemon fight !!!! </h1>
                <h3>Please login if you are already user and register if you are new to this site.</h3>
                <div>
                    <Link to="/login" >
                        <Button variant="contained">LOG IN</Button>
                    </Link>
                    <Link to="/register">
                    <Button variant="contained">REGISTER</Button>
                    </Link>

                    </div>
                </div>
            </>
            )
}
            export default Landing