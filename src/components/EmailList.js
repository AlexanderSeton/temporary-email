import React from "react";
import EmailItem from "./EmailItem.js";
import "./static/EmailList.css";

const EmailList = ({emails, getEmailList}) => {

    const listItems = emails.map((email, index) => {
        return <EmailItem email={email} key={index} />
    })

    const handleRefreshClick = function() {
        getEmailList();
    }

    return(
        <div className="email-list-div">
            <div className="inbox-refresh">
                <h3>Inbox</h3>
                <button onClick={handleRefreshClick}>Refresh</button>
            </div>
            <ul className="email-list">
                {listItems}
            </ul>
        </div>
    )
}

export default EmailList;
