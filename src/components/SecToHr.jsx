import { useState } from 'react';

function Tiempo({ segundos }) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const seg = segundos % 60;
    
    if(segundos>60){
        return `Tiempo total =  ${seg} segundos`;
    }
    else
        {if(segundos<3600){
            return `Tiempo total = ${minutos} minutos y ${seg} segundos`; 
        }   
        else{
            return `Tiempo total = ${horas} horas, ${minutos} minutos y ${seg} segundos`;
            }
        }
    
}

export const SecToHr = () =>{
    const [Evt,setEvt] = useState('')
    const onSetEvt = (evt) => {
    setEvt(evt.target.value)
   }
    const [ans,setAns] = useState("")
    const onSetAns = (evt) => {
        setAns(evt)
    } 

    return(<>
                <input type = 'text' value={Evt} onChange={(event) => onSetEvt(event)} style={{textAlign:"center"}} ></input><br/>
                <button onClick={() => {console.log({Evt}),onSetAns(Tiempo(parseInt(Evt)))}} style={{position:"relative", top:"50px"}}> transformar segundos</button> 
                <p>{ans}</p>

            </>)
}
