import { useLocation , Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const RequireAuth = ({children}) => {
    const { auth } = useAuth();
    const location = useLocation();

    if(!auth.username && !auth.password) {
        return <Navigate to="/login" state={{from: location}}/>
    }

    return children;
}