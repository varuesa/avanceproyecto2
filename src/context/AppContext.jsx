import { createContext, useContext, useState, useEffect } from 'react';
import data from '../data/data.json';

const AppContext = createContext();

export const useAppContext = () => 
  
  {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Estados principales
  const [cursos] = useState(data.cursos);
  const [profesores] = useState(data.profesores);
  const [categorias] = useState(data.categorias);
  const [testimonios] = useState(data.testimonios);

  // Estados de usuario (persistentes)
  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem('favoritos');
    return saved ? JSON.parse(saved) : [];
  });

  const [misCursos, setMisCursos] = useState(() => {
    const saved = localStorage.getItem('misCursos');
    return saved ? JSON.parse(saved) : [];
  });


  // Persistir favoritos
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Persistir mis cursos
  useEffect(() => {
    localStorage.setItem('misCursos', JSON.stringify(misCursos));
  }, [misCursos]);






  // Funciones de favoritos
  const toggleFavorito = (cursoId) => {
    setFavoritos(prev => {
      const existe = prev.includes(cursoId);
      if (existe) {
        showToast('Curso eliminado de favoritos', 'warning');
        return prev.filter(id => id !== cursoId);
      } else {
        showToast('Curso agregado a favoritos', 'success');
        return [...prev, cursoId];
      }
    });
  };

  const isFavorito = (cursoId) => favoritos.includes(cursoId);

  // Funciones de inscripción
  const toggleInscripcion = (cursoId) => {
    setMisCursos(prev => {
      const existe = prev.includes(cursoId);
      if (existe) {
        showToast('Te has desinscrito del curso', 'warning');
        return prev.filter(id => id !== cursoId);
      } else {
        showToast('¡Inscripción exitosa!', 'success');
        return [...prev, cursoId];
      }
    });
  };

  const isInscrito = (cursoId) => misCursos.includes(cursoId);

  // Sistema de toasts
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Obtener curso por ID
  const getCursoById = (id) => {
    return cursos.find(curso => curso.id === parseInt(id));
  };

  // Obtener profesor por ID
  const getProfesorById = (id) => {
    return profesores.find(profesor => profesor.id === parseInt(id));
  };

  // Obtener cursos por categoría
  const getCursosByCategoria = (categoriaId) => {
    return cursos.filter(curso => curso.categoria_id === parseInt(categoriaId));
  };

  // Obtener cursos por profesor
  const getCursosByProfesor = (profesorId) => {
    return cursos.filter(curso => curso.profesor_id === parseInt(profesorId));
  };

  // Obtener cursos favoritos
  const getCursosFavoritos = () => {
    return cursos.filter(curso => favoritos.includes(curso.id));
  };

  // Obtener mis cursos inscritos
  const getMisCursosInscritos = () => {
    return cursos.filter(curso => misCursos.includes(curso.id));
  };

  // Estado de toasts
  const [toast, setToast] = useState(null);


  const value = {
    // Datos
    cursos,
    profesores,
    categorias,
    testimonios,

    // Estados de usuario
    favoritos,
    misCursos,

    // Funciones
    toggleFavorito,
    isFavorito,
    toggleInscripcion,
    isInscrito,
    showToast,
    getCursoById,
    getProfesorById,
    getCursosByCategoria,
    getCursosByProfesor,
    getCursosFavoritos,
    getMisCursosInscritos,

    // Toast
    toast
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};