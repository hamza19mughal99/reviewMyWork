import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";

const Header = ({ sideBarItems, children }) => {
    const { pathname } = useLocation();
    const [show, setShow] = useState(false)

    const classes = (path) => {
        if (path.split('/')[2] === pathname.split('/')[2]) return "nav_active";
        return "";
    };

    useEffect(() => {
        setShow(false)
    }, [pathname])

    return (
        <div className="user_layout">
            <div className="layout_content_section">
                <div className="sidebar_mob_view">
                    <RxHamburgerMenu onClick={() => setShow(!show)} />

                    {
                        show &&
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
                    }
                </div>

                <div className="layout_content_sidebar_section sidebar_web_view">
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