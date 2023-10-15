import React from "react";
import "./style.css";
import { BsPeopleFill } from "react-icons/bs";
import { FaUnlockKeyhole } from "react-icons/fa6";

export default function RegisterFrom() {
    return(
        <div className="registerForm">
            <div className="siteInfo">
                <h2>Welcome to my Site!</h2>
                <p>it's just a simple shell of a registration form. I'm just learning to write on React, so don't judge harshly :З</p>
            </div>

            <div className="registerFormBlock">
                <div id="registerInputs">
                    <div className="inputs">
                        <BsPeopleFill style={{
                            width: '50px',
                            fontSize: '20px',
                            marginTop: '13px',
                        }}/>

                        <input placeholder="Login" type="text"/>
                    </div>
                    
                    <div className="inputs">
                        <FaUnlockKeyhole style={{
                            width: '50px',
                            fontSize: '20px',
                            marginTop: '13px',
                        }}/>
                        <input placeholder="Password" type="password"/>
                    </div>

                    <div className="inputs">
                        <FaUnlockKeyhole style={{
                            width: '50px',
                            fontSize: '20px',
                            marginTop: '13px',
                        }}/>
                        <input placeholder="Password again" type="password"/>
                    </div>
                </div>

                <div id="registerBtn">
                    <button>SIGN UP</button>
                </div>

                <div id="forgotPassword">
                    <p>Forgot password?</p>
                </div>
            </div>
            
        </div>
    )
}