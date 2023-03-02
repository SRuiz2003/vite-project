import { useFetch } from "../hooks/useFetch";
import useCounter  from "../hooks/useCounter";
    export const  BreakingBad =  () => {
        const {Increment,counter} = useCounter(0)
        let url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter + 1}` 
        let obj =  useFetch(url)
        console.log(counter)
        let res = obj.data?.[0] ??  "Loading..." 
       return(
            <>
                <h1>Breaking Bad Quotes</h1>
                <blockquote cite={url}>{res.quote} </blockquote>
                <blockquote cite={url}>{res.author} </blockquote>
                <button onClick ={ () => Increment() }> next</button>
            </>

        ) 

}
