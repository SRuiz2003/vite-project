import { useState,useEffect } from 'react';

export const useFetch =  ( url ) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    
    const getFetch = async () => {

    const resp = await fetch(url)
    const data = await resp.json()
    
        setState({
            data,
            isLoading: false,
            hasError: null
        })

    }

    useEffect(() => {
        getFetch()
    },[url])

    return {
        ...state    
    }
}
