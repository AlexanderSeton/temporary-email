import React from "react";
import "./static/EmailItem.css";

const EmailItem = ({email}) => {

    const convertTimeStamp = function(timeStamp) {
        let time = new Date();
        time.setTime(timeStamp);
        return time.toTimeString();
    }

    return(
        <li className="list-element">
            <p>{convertTimeStamp(email.mail_timestamp)}</p>
            <h3>From: {email.mail_from}</h3>
            <p>{email.mail_excerpt}</p>
        </li>
    )
}

export default EmailItem;
