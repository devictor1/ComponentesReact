import { useEffect, useState } from "react"

function Relogio(){
    const dia = useState(new Date().toLocaleDateString());
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const interval = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
    }, 1000);
    return() => clearInterval(interval);
},[]);
    return(
        <>
        <h1>Hora Agora</h1>
        <h2>{hora}</h2>
        <h1>Dia Hoje</h1>
        <h2>{dia}</h2>
        </>
    )
}

export default Relogio