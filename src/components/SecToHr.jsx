import { useState } from 'react';
export const SecToHr = () =>{
    const [Evt,setEvt] = useState('')
   
    
    return(
        <body>
                <input type = 'text' value={Evt} onChange={e => setEvt(e.target.value)} ></input>
                <button onClick={() => {console.log({Evt})}}> Sec to hour:  </button>
                <p></p>
        </body>
    )
}
