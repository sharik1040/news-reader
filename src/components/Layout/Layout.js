import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/profile">Profile</NavLink>
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