import React from "react";
import {useContext, useState} from "react";
import {showScreenSet} from "./gigyaStore";
import {ScreenSetParams} from "./gigya-interface";

const ScreenContainerContext = React.createContext();

export function Screen({screenSet, startScreen, ...props}) {
    const {show} = useShowScreenset()
    show(screenSet, startScreen, ...props);
    return <></>
}

export function useShowScreenset() {
    const {container} = useContext(ScreenContainerContext);
    return {
        show: (screenSet, startScreen, ...props) => showScreenSet({
            screenSet,
            startScreen,
            containerID: container, ...props
        })
    };

}

export const ScreenSets = {
    Profile: {screenSet: "Default-ProfileUpdate", startScreen: 'gigya-update-profile-screen'},
    Register: {screenSet: "Default-RegistrationLogin", startScreen: 'gigya-register-screen'},
    Login: {screenSet: "Default-RegistrationLogin", startScreen: 'gigya-login-screen'},
    ReAuth: {screenSet: "Default-ReAuthentication", startScreen: 'gigya-reauthentication-screen'},
    Lite: {screenSet: "Default-LiteRegistration"}
}

export const Profile = () => {
    return <Screen screenSet="Default-ProfileUpdate" startScreen='gigya-update-profile-screen'/>;
}

export const RegistrationLogin = () => {
    return <Screen screenSet="Default-RegistrationLogin" startScreen='gigya-register-screen'/>;
}

export const ScreenContainer = ({children, containerId}) => {
    const [container, setContainer] = useState(containerId || "default-gigya-screen-container")
    return <ScreenContainerContext.Provider value={{container, setContainer}}>
        <div>
            {children}
            <div id={container}/>
        </div>
    </ScreenContainerContext.Provider>


}

export function StandaloneScreen({screenSet, startScreen}) {
    const container = `gigya-screen-${screenSet}-${startScreen}`;
    return <div>
        <div id={container}/>
        <Screen screenSet={screenSet} startScreen={startScreen} container={container}/>

    </div>
}
 

  
 