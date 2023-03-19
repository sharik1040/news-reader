import { Navigate } from "react-router-dom";
import { LoginContainer } from "../components/containers/Login/index";

export const Login = () => {
    const isLogged = localStorage.getItem("isLogin");

    return (
        <>
            {
                isLogged ? <Navigate to="/profile" replace /> : <LoginContainer />
            }
        </>
    )
}