import React, { useCallback } from "react";
import "./Account.css"

function Account(props)
{
    var isLogin = props.login

    const LoginFunc = useCallback(() => {
        props.onConnect();
    });

    function userPage()
    {
        window.location.replace(props.users.profile);
    }

    if(!isLogin)
    {
        return (
            <button className="login-button" onClick={LoginFunc}>
                Login to Spotify!
            </button>
        );
    }

    else
    {
        return (
            <button className="login-button" onClick={userPage}>
                Welcome! {props.users.name}
            </button>
        );
    }
}

export default Account;