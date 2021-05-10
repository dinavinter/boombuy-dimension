import {useGigya} from "./context";

export function useGigyaAuth() {
    const {isLoggedIn, setIsLoggedIn, logout, account} = useGigya();

    return {isLoggedIn, setIsLoggedIn, logout, account};
}

export function useFido() {
    const {accounts, gigyaNotLoaded} = useGigya();
    if (accounts)
        return {login:e=> accounts.auth.fido.login({callback: console.log}), register:e=>  accounts.auth.fido.register({callback: console.log})};
    else
        return {login: gigyaNotLoaded, register: gigyaNotLoaded}
}
 
