import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <ul className="nav navbar-nav ps-5">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">List</Link>
                    </li>
                </ul>
            </nav>

            <div className='container w-75 my-5'>
                <Outlet/>
            </div>
        </>
    );
}

export default Layout;