import { useFetch } from "../hooks/useFetch";

    export const  BreakingBad =  () => {
       let obj =  useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`)
       
       console.log(obj)
       console.log(obj.data) 
       
       res = obj.data[0].quote || "Si hay xd" ;
       

       return(
            <>
                <blockquote>{}</blockquote>
            </>

        ) 

}
