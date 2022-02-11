import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="mainDivLanding mainBackground">
        <div className="mainDivLandingTitle">
          <h1 className="headingWelcome">READY TO FIGHT WITH POKEMON</h1>
        </div>
        <div className="mainDivLandingLinks">
          <Link to="/login" className="linkLanding">
            <Button variant="contained" className="btnLanding">
              LOG IN
            </Button>
          </Link>
          <Link to="/register" className="linkLanding">
            <Button variant="contained" className="btnLanding">
              REGISTER
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Landing;
