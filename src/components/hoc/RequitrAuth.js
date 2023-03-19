import { useLocation , Navigate, } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const RequireAuth = ({ children }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const isLogged = localStorage.getItem("isLogin");

    if(!auth.username && !auth.password && !isLogged) {
        return <Navigate to="/login" state={{from: location}}/>
    }

    return children;
}