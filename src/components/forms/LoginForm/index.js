import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockuser } from "../../../mockdata/users";

export const LoginForm = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [username, password]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const matchUsername = username === mockuser.username;
        const matchPassword = password === mockuser.password;
        if(matchUsername && matchPassword){
            setSuccess(true);
            setUsername("");
            setPassword("");
            navigate("/profile");
            
        }else {
            errRef.current.focus();
            setErrMsg("The username or password you entered is incorrect.");
        }
    }   

    return (
        <>
            {
                success ? (
                    <section>
                        If the correct data is entered, then redirect to the /profile page
                        it seems you shouldn't use succes, or not?
                    </section>
                ) : (
                    <section>
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label><br/>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                id="username"
                                autoComplete="off"
                                ref={userRef}
                            /><br/>

                            <label htmlFor="password">Password:</label><br/>
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                id="password"
                            /><br/>

                            <button>Login</button>
                        </form>
                        <p ref={errRef}>{errMsg}</p>
                    </section>
                )
            }
        </>
    )
}