import   { useState, useEffect } from "react";
import data from "./data/data.json";


function App() {

/*    useEffect(() => {
    console.log("Profesores:", data.profesores);
    console.log("Cursos:", data.cursos);
  }, []); */

/*   useEffect(() => {
  console.log("El componente se renderizó 🔄");

  
}); */

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
