import useCounter from "../hooks/useCounter";

export const Counter = ( ) => {

    const {Increment,Decrement,Reset,counter} = useCounter(0)

    return (
        <>
            <h1>Click on me</h1>
            <p> {counter} </p>
            <button onClick ={ () => Decrement () }> -1 </button>
            <button onClick ={ () => Reset () }> Restart </button>
            <button onClick ={ () => Increment() }> +1 </button>
            
        </>
    )


}