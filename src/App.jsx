import   { useState, useEffect } from "react";
import data from "./data/data_proy_end.json";


function App() {



  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador cambió:", contador);
    console.log("Profesores:", data.profesores);
  }, [contador]); 


  return (

    <>
    
    <div>
      <p>Contador1: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
     
     
    </>
  )
}

export default App
