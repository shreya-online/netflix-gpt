import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () =>{

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () =>{
        setIsSignIn(!isSignIn);
    }

    return(
        <>
            <Header />
            <div className="h-screen">
            <div className="absolute inset-0">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" 
                alt="Login-bg" className="w-full h-full object-cover"/>
            </div>

            {/* mx-auto right-0 left-0 -> keeps the sign in block in the centre 
            left-0 right-0 -> Ensures the form stretches from the left edge to the right edge of the container (used for centering in conjunction with mx-auto)
            transform -translate-y-1/2 -> Adjusts the form's position to center it vertically by translating it up by half its own height. */}
            
            <form className="w-11/12 absolute md:p-12 p-6 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 sm:w-8/12 md:w-6/12 lg:w-4/12 
                                top-1/2 transform -translate-y-1/2">
                <h1 className="font-bold text-white text-2xl my-4">{isSignIn?"Sign In": "Sign Up"}</h1>
                {!isSignIn && 
                     <input type="text" placeholder="Enter your name" className="p-4 my-2 w-full bg-black border border-gray-500 rounded"/>
                }
                <input type="text" placeholder="Enter your Email" className="p-4 my-2 w-full bg-black border border-gray-500 rounded"/>
                <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-black border border-gray-500 rounded"/>
                <button className="p-2 my-2 text-white bg-red-600 w-full rounded">{isSignIn?"Sign In": "Sign Up"}</button>
                <p className="text-white cursor-pointer" onClick={toggleSignIn}> {isSignIn? "New to Netflix? Sign Up" : "Already an user? Sign In"}! </p>
                <br></br>
                <p className="text-gray-400">This page is protected by reCAPTCHA to ensure you're not a bot. Learn more.</p>
            </form>
                
            </div>
        </>
    )
}

export default Login;