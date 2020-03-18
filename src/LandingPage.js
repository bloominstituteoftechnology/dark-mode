import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h1 style={{ fontSize: "80px", marginTop: "100px", fontWeight: 500}}>Crypto Tracker</h1>
            <Link to="/charts"><button style={{ background: "black", color: "white", border: "none", padding: "20px 30px", marginTop: 50, fontSize: "30px" }}>Start here</button></Link>
        </div>
    )
}

export default LandingPage