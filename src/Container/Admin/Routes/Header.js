import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ sideBarItems, children }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate()

    const classes = (path) => {
        if (path === pathname) return "nav_active";
        return "";
    };

    return (
        <div className="user_layout">
            <div className="layout_content_section">
                <div className="layout_content_sidebar_section">
                    <div className="user_sidebar">
                        {
                            sideBarItems?.map((s, i) => {
                                return (
                                    <div key={i}>
                                        <ul className="nav_list">
                                            <li className={`${classes(s.path)}`}>
                                                <Link to={s.path}>
                                                    <span>{s.title}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="layout_content">{children}</div>
            </div>
        </div>
    );
}

export default Header;