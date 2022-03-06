import { Outlet, Link } from "react-router-dom";

//Nav Bar
const Layout = () => {
    return (
        <>
            <nav>
                <div className="topnav">
                <ul>
                    <li>
                        <Link to="#"  className={"header"}>JWT AUTH</Link>
                    </li>
                    <li>
                        <Link to="/register" className={"link-style"}>Register</Link>
                    </li>
                    <li>
                        <Link to="/sign-in" className={"link-style"}>Sign in</Link>
                    </li>
                    <li>
                        <Link to="/database"  className={"link-style"}>Database</Link>
                    </li>
                    <li>
                        <Link to="/"  className={"link-style"}>Home</Link>
                    </li>
                </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;