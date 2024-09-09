import React from "react";

function Account(props)
{
    var isLogin = props.login

    if(!login)
    {
        return (
            <button onClick>
                Login to Spotify!
            </button>
        );
    }

    else
    {
        return (
            <div>
                <img src={props.users.images}/>
                <p>{props.users.name}</p>
            </div>
        );
    }
}

export default Account;