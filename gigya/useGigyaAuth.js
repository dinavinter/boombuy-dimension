import {GigyaContext, useGigya} from "./context";
import {createContext, useContext} from "react";
import {useShowScreenset} from "./useScreenset";
import {ScreenSets} from "./screens";
export const AuthContext = createContext({user:{}, jwt: null, token:null, uid: null, signinSilent:()=>{}});
// export const ScreenSetContext = createContext({user:{}, jwt: null, token:null, uid: null});


export function useAuth() {
    return useContext(AuthContext);
}
export function useReactOidc() {
    const {user}= useContext(AuthContext);
    const {account, logout} = useGigyaAuth();
    const {signinSilent} = useAuth();

    const {show} = useShowScreenset();
    const login = ()=> show(ScreenSets.Login);
    const reauth = ()=> show(ScreenSets.ReAuth);
    return {oidcUser: {...user, profile:{...user.profile, name:user.profile.nickName, isEnabled: true, login, logout, signinSilent}}} 
}

export function useGigyaAuth() {
    const {isLoggedIn, setIsLoggedIn, logout, account} = useGigya();
    const auth= useContext(AuthContext);

    return {isLoggedIn, setIsLoggedIn, logout, account};
}

export function useFido() {
    const {accounts, gigyaNotLoaded} = useGigya();
    if (accounts)
        return {login:e=> accounts.auth.fido.login({callback: console.log}), register:e=>  accounts.auth.fido.register({callback: console.log})};
    else
        return {login: gigyaNotLoaded, register: gigyaNotLoaded}
}
 
