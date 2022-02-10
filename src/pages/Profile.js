import React, { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';

const Profile=()=>{

    const [details, setDetails] = useState({
        firstName : "",
        lastName : "",
        email: "",
    })

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile=async ()=>{
        const token=await localStorage.usertoken;
        const decoded = await jwt_decode(token);
        console.log(decoded);
        setDetails({
            firstName : decoded.user.first_name,
            lastName : decoded.user.last_name,
            email: decoded.user.email,
        })  
   
    }

    return(
        <>
       
         <div>
         <h1>User Profile Info</h1>
         
              <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{details.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{details.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{details.email}</td>
                    </tr>
                </tbody>


              </table>   
                </div>
        </>
    )
}

export default Profile;