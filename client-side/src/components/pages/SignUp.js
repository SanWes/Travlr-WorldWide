import React from 'react'
import '../../App.css'
import Login from './Login'
import Register from './Register'


function SignUp() {
    return (
        <>
        <div className="sign-up">

        <div className="sign-up-form row">
        {/* Register */}
            <div className="col">
                <Register></Register>
            </div>
            {/* Login */}
            <div className="col">
                <Login/>
            </div>
            
        </div>

            </div>
        </>
    )
}

export default SignUp
