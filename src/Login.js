import React, { useState } from "react";

function Login({onLogin}) {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const handleLogin = () => {
        if(username === "example" && password === "password") {
            alert("Logged in")
            onLogin(username)
        }
        else {
            alert("Wrong credentials")
        }
    }

    return(
        <div>
            <input type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
}

export default Login;