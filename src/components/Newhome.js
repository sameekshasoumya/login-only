import React, { useState } from 'react';
import './Newhome.css';

const Newhome = () => {
    const [userInput,setUserInput] = useState({
        userfirstname: "",
        userlastname: "",
        email: "",
        phone: "",
        city: "",
        address: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value})
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>Sign In</h2>
                </div>


                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" value={userInput.email} onChange={handleInput} name="email" id="email" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="text" value={userInput.password} onChange={handleInput} name="password" id="password" required/>
                    </div>
                </div>

                <div class="btn">
                    <input type="submit" value="Submit Request"/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default Newhome