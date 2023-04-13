import { NavLink } from "react-router-dom";

const MainNavigation =(props) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/data">data</NavLink>
                    </li>
                     <li>
                        <NavLink to="/publish">Publish</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;