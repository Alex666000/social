import React from "react";
//import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css';
import NavbarFriendsContainer from "./NavbarFriendsContainer";
import {NavLinks} from "./NavbarLinks";

export const Navbar = () => {
    return (
        <nav className={styles.left__navMenu}>
            {/*<div>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Профиль</NavLink>
            </div>
            <div>
                <NavLink to="/messages" activeClassName={classes.activeLink}>Сообщения</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={classes.activeLink}>Новости</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={classes.activeLink}>Музыка</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Настройки</NavLink>
            </div>*/}

            <div>
                <NavLinks/>
            </div>
            <div>
                <NavbarFriendsContainer/>
            </div>
        </nav>
    );
}