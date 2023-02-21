import { useState,useEffect } from 'react';

export const useFetch = async ( url ) => {
    const [link, setLink] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    
    const change = () => {
        setLink(url + 'Changed')
    }

    const resp = await fetch(url)
    const {data} = await resp.json()
    
    return {
            
        data,
        isLoading: true,
        hasError: null
    
    }
}
