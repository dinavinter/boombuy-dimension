import React, {useEffect, useState} from "react";
import {GigyaContext} from "./context"
import {loadGigyaService, onGigyaService, onLogin, onLogout} from "./gigyaStore";
import {AuthContext} from "./useGigyaAuth";



export function GigyaProvider({domain, apiKey, children}) {
     const [gigya, setGigya] = useState(loadGigyaService(window.gigya)  );
    const [isLoggedIn, setIsLoggedIn] = useState( false);

    const [account, setAccount] = useState( false);
    const [uid, setUid] = useState( false);
    const [jwt, setJwt] = useState( false);
 
   
    const onGigyaServiceReady=()=>{

      
        window.gigya.accounts.getAccountInfo({
            callback:function(res) {
                if (res.errorCode === 0) {
                    setAccount(res);
                    setIsLoggedIn(true);

                }
                setGigya(window.gigya);

            }
        });

        window.gigya.socialize.addEventHandlers({
            onLogin: onLogin,
            onLogout:onLogout
        });


    }

     
    const onLogout=()=> {
        setIsLoggedIn(false)
    }


    useEffect(()=> {

        onGigyaService(gigya=>{
            setGigya(gigya);
            trySetUserDetails()
           
        })
        onLogin(trySetUserDetails)
        onLogout(resetDetails)
        window.onGigyaServiceReady = onGigyaServiceReady;
    } );

    useEffect(() => {
        const script = document.createElement('script');

        script.src = `https://cdns.${domain}/js/gigya.js?apikey=${apiKey}`;
        script.async = true;
        

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [domain,apiKey]);

    function trySetUserDetails() {
        const jwt = gigya.getToken();
        const account = gigya.getAccount();
        if (account) {
            setAccount(account);
            setJwt(jwt);
            setUid(account.UID);
            setIsLoggedIn(true)

        }
    }

    function resetDetails() {
        setIsLoggedIn(false);

        setAccount(null);
        setJwt(null);
        setUid(null);

    }

    return  <GigyaContext.Provider value={{...gigya, isLoggedIn:isLoggedIn, setIsLoggedIn:setIsLoggedIn, account}}>
        <AuthContext.Provider value={{jwt, user:account, uid:uid, signinSilent: trySetUserDetails}}>
            {children}

        </AuthContext.Provider>
        {/*<script type="text/javascript"*/}
        {/*        src={`https://cdns.${domain}/js/gigya.js?apikey=${apiKey}`}></script>*/}

    </GigyaContext.Provider>


}
 