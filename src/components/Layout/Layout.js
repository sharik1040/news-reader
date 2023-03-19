import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Layout.css";

export const Layout = () => {
    const { auth } = useAuth();
    const isLogin = localStorage.getItem("isLogin");

    return (
        <>
            <header>
                {
                    auth.username || isLogin ? (
                        <nav>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                        </nav>

                    ) : (
                        <nav>
                            <NavLink to="/login">Login</NavLink>
                        </nav>
                    )
                }

            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                © Copyright 2023
            </footer>
        </>
    )
}