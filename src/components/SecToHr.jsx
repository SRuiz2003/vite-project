import { useState } from 'react';

function Tiempo({ value }) {
    console.log(value)
    const segundos = parseFloat(value)
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const seg = segundos % 60;
    let res = ""
    console.log(horas)
    console.log(minutos)
    console.log(seg)
    if(segundos<60){
        res =`Tiempo total =  ${seg} segundos`;
    }
    else
        {if(segundos<3600){
            res = `Tiempo total = ${minutos} minutos y ${seg} segundos`; 
        }   
        else{
            res = `Tiempo total = ${horas} horas, ${minutos} minutos y ${seg} segundos`;
            }
        }
    return res
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
                <div>
                <input type = 'text' value={Evt} onChange={(event) => onSetEvt(event)}  ></input><br/>
                <button onClick={() => {console.log({Evt}),console.log(Tiempo(parseInt(Evt)))}} > transformar segundos</button> 
                <p>{Evt}</p>
                </div>
            </>)
}
