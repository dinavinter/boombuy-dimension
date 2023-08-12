import React from 'react'
 import Buttons from "../components/auth-content/Buttons";
import  "./sideBar.css";
import '../index.css'
import {useReactOidc} from "../gigya/useGigyaAuth";

function Sidebar() {
    const {isEnabled, login, logout, signinSilent, oidcUser} = useReactOidc();

    return  <div className="sidenav">
      
        <Buttons

            login={login}
            logout={logout}
            renewToken={signinSilent}
            getUser={signinSilent}
        />
    </div>
 }

export default Sidebar
