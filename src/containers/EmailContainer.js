import React, {useEffect, useRef, useState} from "react";
import EmailHeader from "../components/EmailHeader";
import EmailList from "../components/EmailList";

const EmailContainer = () => {

    const firstUpdate = useRef(true);

    const [emailAddress, setEmailAddress] = useState("");
    const [sidToken, setSidToken] = useState("");
    const[emails, setEmails] = useState([]);
    const[numberEmails, setNumberEmails] = useState(0);

    useEffect(() => {
        getEmailAddress();
    }, [])

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
            getEmailList();
        }
    }, [sidToken])

    const getEmailAddress = async function() {
        console.log("getEmailAddress called"); // testing
        const response = await fetch("https://api.guerrillamail.com/ajax.php?f=get_email_address&lang=en&agent=user1&ip=127.0.0.1");
        const data = await response.json();
        setEmailAddress(data.email_addr);
        setSidToken(data.sid_token);
    }

    const getEmailList = async function() {
        console.log("getEmailList called", emailAddress, sidToken); // testing
        const response = await fetch(`https://api.guerrillamail.com/ajax.php?f=get_email_list&offset=0&agent=user1&sid_token=${sidToken}`);
        const data = await response.json();
        const emailsList = data.list;
        console.log("emailsList:", emailsList);
        if (numberEmails === 0) {
            console.log("initial num emails 0");
            setEmails(emailsList);
            setNumberEmails(emailsList.length);
        } else if (numberEmails === emailsList.length) {
            console.log("no new emails");
            return;
        } else {
            console.log("update emails");
            setEmails(emailsList);
            setNumberEmails(emailsList.length);
        }
    }

    return(
        <div>
            <EmailHeader emailAddress={emailAddress} />
            <EmailList emails={emails} getEmailList={getEmailList} />
        </div>
    )
}

export default EmailContainer;
