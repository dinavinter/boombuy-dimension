import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {AuthorizedView, NotAuthorizedView, ScreenSets, useGigyaAuth} from "../gigya";

const LinkButton = props => <button
    {...props}
    type="button"
    className="link-button"
>
    {props.children}
</button>


const Logout = props => {
    const {logout} = useGigyaAuth();
    return <LinkButton {...props} onClick={logout}>Logout</LinkButton>;
}


export function Bar({openScreen}) {
    const {account, logout} = useGigyaAuth();
    const accountEmail = account && account.profile &&account.profile.email;
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"> Id-Booom
            </NavbarBrand>

            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/#/"># {accountEmail}</NavLink>
                </NavItem>

                <NavItem>
                     <NavLink  href="/#/" onClick={e=>openScreen(ScreenSets.Lite)}>Subscribe</NavLink>
                 </NavItem>
                
                <NavItem>
                    <NotAuthorizedView>
                        <NavLink  href="/#/"  onClick={e=>openScreen(ScreenSets.Login)}>Login</NavLink>
                    </NotAuthorizedView>
                </NavItem>

                <NavItem>
                    <AuthorizedView>
                        <NavLink  href="/#/" onClick={e=>openScreen(ScreenSets.Profile)}>Profile</NavLink>
                    </AuthorizedView>
                </NavItem>

                <NavItem> 
                    <AuthorizedView> 
                        <NavLink  href="/#/" onClick={logout}>Logout</NavLink> 
                    </AuthorizedView>
                </NavItem>

            </Nav>
        </Navbar>
    )
        ;
}
