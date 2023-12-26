import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ sideBarItems, children }) => {
    const { pathname } = useLocation();

    const classes = (path) => {
        if (path.split('/')[2] === pathname.split('/')[2]) return "nav_active";
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