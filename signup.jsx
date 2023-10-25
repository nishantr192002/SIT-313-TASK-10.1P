import React from 'react'
import './EmailBanner.css'
import { useState } from "react";



function EmailBanner() {
    const [email, setEmail] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            alert("hello")
                const response = await fetch("http://localhost:3001/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
                });
        
                if (response.ok) {
                    alert("SENT SUCCESSFULLY")
                setTimeout(() => {
                    setEmail("");
                }, 5000);
                } else {
                    alert("Mail not sent")
                console.error("Error sending email");
                }
            } catch (error) {
                alert("Mail not sent")
                console.error("Error sending email:", error);
            }
        };

    return(
        <form
        id="EmailForm"
        action="/"
        target="EmptyFrame"
        method="POST"
        onSubmit={handleFormSubmit}
        >
            <div className="emailbox">
                <div className="emailbox-form">
                    <h1>SIGN UP FOR OUR DAILY INSIDER</h1>
                    

                    <input 
                        type="email" 
                        className="input" 
                        name="email" 
                        placeholder="Enter Your Email" 
                        required="required" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    <button onClick={handleFormSubmit} className="emailbutton">SUBSCRIBE</button>
                </div>
            </div>
    </form>
    )

}

export default EmailBanner;