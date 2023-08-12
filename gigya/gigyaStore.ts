import {GigyaSdk, LoginDetails} from "./types";
import {ScreenSetParams} from "./gigya-interface";

function getAccount(gigya: GigyaSdk) {
    return () =>
        new Promise((resolve, reject) => {
            gigya.accounts.getAccountInfo({
                callback: function (res) {
                    if (res.errorCode === 0) {
                        resolve(res)
                    } else {
                        reject(res)
                    }

                }
            })
        });
}

function getJwt(gigya: GigyaSdk) {
    return (): Promise<string> =>
        new Promise((resolve, reject) => {
            gigya.accounts.getJWT({
                callback: function (res) {
                    if (res.errorCode === 0) {
                        resolve(res.id_token as string)
                    } else {
                        reject(res)
                    }

                }
            })
        });
}

export declare type LoginCallback = {
    <TLoginDetails extends LoginDetails = LoginDetails>(details: TLoginDetails): void;
}
export declare type LogoutCallback = {
    <TLogoutDetails  = any>(details: TLogoutDetails): void;
}


export async function waitForLogin(): Promise<LoginDetails> {
    return await new Promise((resolve) => {
        onLogin(details => resolve(details))
    });

}

export function onLogin(cb: LoginCallback) {
    onGigyaService(({gigya}) => {
        gigya.socialize.addEventHandlers({
            context: {str: 'congrats on your'}
            , onLogin: cb
        });
    })
}
export function showScreenSet(args:Partial<ScreenSetParams>) {
    onGigyaService(({gigya}) => {
        gigya.accounts.showScreenSet(args);
    })
}
export function onLogout(cb: LogoutCallback) {
    onGigyaService(({gigya}) => {
        gigya.socialize.addEventHandlers({
            context: {str: 'congrats on your'}
            , onLogout: cb
        });
    })
}
export function loadGigyaService(gigya: any):GigyaSdk {
    return gigya && {
        gigya: gigya,
        socialize: gigya.socialize,
        accounts: gigya.accounts,
        apiKey: gigya.apiKey,
        showScreenSet: (args) => {
            gigya.accounts.showScreenSet(args)
        },
        showDebugUI: () => {
            gigya.showDebugUI()
        },

        getAccount: getAccount(gigya),
        getToken: getJwt(gigya)
    }

}

declare global {

    interface Window {
        gigya: any,
        onGigyaServiceReady: any

    }


}

export function onGigyaService(cb: (gigya: GigyaSdk) => void) {
    if (window.gigya) {
        cb(loadGigyaService(window.gigya))

    } else window.onGigyaServiceReady = () => cb(loadGigyaService(window.gigya));
    window.onGigyaServiceReady = loadGigyaService;

}

 