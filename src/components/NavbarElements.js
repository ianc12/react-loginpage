
import {NavLink as Link} from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav
`
    background: LightCyan;
    height: 10%;
    width: 100%;
    display: flex;
    
    padding: 10px;
    z-index: 12;
`;

export const NavLink = styled(Link)
`
    color: LightSkyBlue;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 16px;
    height: 100%;
    cursor: pointer;
    &.active {
        color: LightSeaGreen;
    }
`;


export const NavMenu = styled.div
`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
    display: none;
    }
`;
