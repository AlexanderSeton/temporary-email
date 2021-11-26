import React from "react";
import "./static/EmailHeader.css";

const EmailHeader = ({emailAddress}) => {
    return(
        <div>
            <div className="email-address-display">
                <h3>Your Temporary Email: </h3>
                <p>{emailAddress}</p>
            </div>
        </div>
    )
}

export default EmailHeader;
