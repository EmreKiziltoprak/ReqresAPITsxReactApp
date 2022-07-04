import {useState, useEffect} from 'react';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import url from './Url';

axios.defaults.baseURL = url;

async function useFetch<T>(urlz: string, options?: object)    {

    const [response, setResponse] = useState<T>(null);
    const [error, setError] = useState<string>(null);
    console.log("RESPONSE")

        try {
            console.log("RESPONSE")

            const res = await fetch(url, options);
            const json = await res.json();
            console.log("RESPONSE")
            console.log(json.toString());
            setResponse(json);

        } catch (error) {
            setError(error);
            Promise.reject(error)
        }


};


export {useFetch}