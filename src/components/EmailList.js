import React from "react";
import EmailItem from "./EmailItem.js";
import "./static/EmailList.css";

const EmailList = ({emails}) => {

    const listItems = emails.map((email, index) => {
        return <EmailItem email={email} key={index} />
    })

    return(
        <div className="email-list-div">
            <h3>Inbox</h3>
            <ul className="email-list">
                {listItems}
            </ul>
        </div>
    )
}

export default EmailList;
