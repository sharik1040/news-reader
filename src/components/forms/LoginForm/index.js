import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockuser } from "../../../assets/mockdata/users";
import useAuth from "../../../hooks/useAuth";

import "./LoginForm.styles.css";

export const LoginForm = () => {
    const { setAuth } = useAuth();
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
            setAuth({ username, password})
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
        <div className="loginform-container">
            {
                success ? (
                    <section>
                        If the correct data is entered, then redirect to the /profile page
                        it seems you shouldn't use succes, or not?
                    </section>
                ) : (
                    <section>
                        <h1 className="loginform__title">Login</h1>
                        <form onSubmit={handleSubmit} className="loginform">
                            <label htmlFor="username" className="loginform__label">Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                id="username"
                                autoComplete="off"
                                ref={userRef}
                                className="loginform__input"
                            />

                            <label htmlFor="password" className="loginform__label">Password:</label>
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                id="password"
                                className="loginform__input"
                            />

                            <button className="loginform__button">Login</button>
                        </form>
                        <p ref={errRef}>{errMsg}</p>
                    </section>
                )
            }
        </div>
    )
}