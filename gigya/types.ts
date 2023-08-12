export declare type LoginDetails<TContext extends any = any> = {
    provider: string;
    UID: string;
    context: TContext;
    eventName: "login"
    fullEventName: "login"
    loginMode: "standard" | "reauth"
    newUser: boolean
    [key: string]: any;

}

export declare type GigyaSdk = {
    socialize: any,
    accounts: any,
    gigya: any,
    // loaded: boolean,
    apiKey: string,
    showScreenSet: (args: any) => void
    showDebugUI: () => void,
    // onLogin?: ({provider, uid, context}) => void
    // screenSet: ScreenSetController
    getAccount(): Promise<any>,
    getToken(): Promise<string>,
}
