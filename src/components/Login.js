import React from "react";
import Header from "./Header";

const Login = () =>{
    return(
        <>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" 
                alt="Login-bg"/>
            </div>

            {/* mx-auto right-0 left-0 -> keeps the sign in block in the centre */}
            <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0">
                <h1 className="font-bold text-white text-2xl my-4">Sign In</h1>
                <input type="text" placeholder="Enter your Email" className="p-4 my-2 w-full bg-black border border-gray-500 rounded"/>
                <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-black border border-gray-500 rounded"/>
                <button className="p-2 my-2 text-white bg-red-600 w-full rounded">Sign In</button>
                <p className="text-white">New to Netflix? 
                    <button>Sign up!</button>
                </p>
                <br></br>
                <p className="text-gray-400">This page is protected by reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>
                
            
        </>
    )
}

export default Login;