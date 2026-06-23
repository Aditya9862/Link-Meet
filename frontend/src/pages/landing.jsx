import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
    return(
        <div className='landingPageContainer'>
            <nav>
                <div className="navHeader">
                    <h2>Meet Call</h2>
                </div>
                <div className="navList">
                    
                    <Link to={"/auth"} className='btn'> Register</Link>
                    <div role='button'>
                        <Link to={"/auth"} className='btn'> Login</Link>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style= {{color: "#FF9839"}}>Connect</span> with your loved ones</h1>
                    <p>Cover a distance by Meet Call</p>
                    <div role='button' className='btn1'>
                        <Link to={"/auth"} className='gs'>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src = "mobile.png"></img>
                </div>
            </div>
        </div>
    )
}