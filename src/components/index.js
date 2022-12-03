import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>  
            <Nav>
                <NavLink to = "/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to = "/user_info" activeStyle>
                    My Account
                </NavLink>
                <NavLink to = "/login" activeStyle>
                    Sign Out
                </NavLink>
                <NavLink to = "/surprise" activeStyle>
                    Surprise for Larry
                </NavLink>
            </Nav>
        </>
    );

}

export default Navbar;