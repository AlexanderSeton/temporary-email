import React from "react";
import EmailItem from "./EmailItem.js";

const EmailList = ({emails}) => {

    const listItems = emails.map((email, index) => {
        return <EmailItem email={email} key={index} />
    })

    return(
        <div>
            <h3>Inbox</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default EmailList;
