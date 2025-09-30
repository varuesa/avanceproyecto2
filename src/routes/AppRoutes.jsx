import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Profesores from "../pages/Profesores";
import Cursos from "../pages/Cursos";
import Categorias from "../pages/Categorias";
import Favoritos from "../pages/Favoritos";
import MisCursos from "../pages/MisCursos";


const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    
      <Route path="profesores" element={<Profesores />} />
      <Route path="cursos" element={<Cursos />} />
      <Route path="categorias" element={<Categorias />} />
      <Route path="favoritos" element={<Favoritos />} />
      <Route path="miscursos" element={<MisCursos />} />
      <Route path="prueba" element={<h1>Prueba</h1>} />
    </Routes>
  );
};

export default AppRoutes;
