import * as React from 'react';

import {ToastContainer} from 'react-toastify';
import  { useApi} from '../../services/ApiService';

import AuthContent from './AuthContent';
import Buttons from './Buttons';
import {useAuth} from "../../gigya/useGigyaAuth";


function AppContent() {

    const { user , jwt } = useAuth();
    const {api, data} = useApi();


    return (
        <>
            <ToastContainer/>

            <AuthContent api={data} user={user} jwt={jwt}/>
        </>
    );
}

export default AppContent;
