import React from "react";
import "./static/EmailHeader.css";

const EmailHeader = ({emailAddress}) => {

    const handleCopyClick = function() {
        navigator.clipboard.writeText(emailAddress);
        // alert("Email address copied to your clipboard.");
    }

    return(
        <div>
            <div className="email-address-display">
                <h3>Your Temporary Email: </h3>
                <p>{emailAddress}</p>
                <button onClick={handleCopyClick} id="copy-button">Copy</button>
            </div>
        </div>
    )
}

export default EmailHeader;
