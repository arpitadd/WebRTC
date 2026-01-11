import React from "react";
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage(){
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>WebRTC App</h2>
                </div>
                <div className="navlist">
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>
             <div className="landingMainContainer">
                <div>
                     <h1><span style={{ color: "#1E3A8A" }}>Connect</span> with your loved Ones</h1>
                      <p>Cover a distance by Video Call</p>
                      <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>

        </div>
    )
}