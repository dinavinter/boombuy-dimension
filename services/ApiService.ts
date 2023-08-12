import {useGigyaAuth} from "../gigya";
import {useState} from "react";
import {useAuth} from "../gigya/useGigyaAuth";

import {toast} from "react-toastify";

export function useApi() {
    const {token} = useAuth();
    const [apiData, setApiData] = useState();
    return {
        api: (api) => callApi(api, token)
            .then(data => {
                setApiData(data.data);
                toast.success('Api return successfully data, check in section - Api response');
            })
            .catch(error => {
                toast.error(error);
            }),
        data: apiData
    }

    async function callApi(token, api) {
        const response = await fetch(api, {
            headers: !token ? {} : {'Authorization': `Bearer ${token}`}
        });

        return await response.json();

    }
}