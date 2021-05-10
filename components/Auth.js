import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import {ScreenContainer} from "../gigya";
import {Screen} from "../gigya/screens";
import React, {useState} from "react";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";
import {Bar} from "./Navbar";
import {NavItem, NavLink} from "reactstrap";

export function AuthScreen(props) {

    const {screen} = props;
    const [activeScreen, setActiveScreen] = useState(screen);


    let closeScreen = ()=>  setActiveScreen(null);
    let close =  <NavLink  href="javascript:;"  onClick={closeScreen}>Back</NavLink>


    const openScreen = (screenDetails) => setActiveScreen(screenDetails);

    return (
        <div>
            <header style={activeScreen ? {display: 'none'} : {}}>
                <Bar openScreen={openScreen}/>
            </header>
            <div id="auth"
                 style={activeScreen ? {display: 'flex'} : {display: 'none'}}>

            <article className={`${activeScreen ? 'active' : ''} ${activeScreen ? 'timeout' : ''}`}>
                <ScreenContainer>
                    {activeScreen ? 
                            <Screen screenSet={activeScreen.screenSet} startScreen={activeScreen.startScreen}  onSubmit={closeScreen}/>
                        :
                        <></>}
                    {close}
                </ScreenContainer>
            </article>
            
        </div>


</div>


)

}

AuthScreen.propTypes = {
route: PropTypes.object,
screen: PropTypes.object,
isActive: PropTypes.bool,
timeout: PropTypes.bool,

}

