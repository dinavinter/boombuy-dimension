import { useGigya} from "./context";
   
export function useGigyaAuth( ) {
    const {isLoggedIn, setIsLoggedIn, logout, account, loginFido}= useGigya();

    return {isLoggedIn, setIsLoggedIn, logout, account, loginFido}; 
}
 
