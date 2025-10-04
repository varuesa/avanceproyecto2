
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';


export default function Cursos() {
  const { cursos } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
    const [delayedSearch, setDelayedSearch] = useState('');

    // scrooll 10 cuross
    const [visibleCount, setVisibleCount] = useState(10);
  const [hasMore, setHasMore] = useState(true);

    // Delay de 4 segundos (debounce)
  useEffect(() => {
    const delay = setTimeout(() => {
      setDelayedSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(delay);
  }, [searchTerm]);


  // Filtrar cursos según el término con delay
  const filteredCursos = cursos.filter(curso =>
    curso.titulo.toLowerCase().includes(delayedSearch.toLowerCase()) ||
    curso.descripcion.toLowerCase().includes(delayedSearch.toLowerCase()) ||
    curso.nivel.toLowerCase().includes(delayedSearch.toLowerCase())
  );


// scrooll 10 cuross
  const visibleCursos = filteredCursos.slice(0, visibleCount);
  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (bottomReached && hasMore) {
        if (visibleCount < filteredCursos.length) {
          setVisibleCount(prev => prev + 10);
        } else {
          setHasMore(false); // Ya no hay más cursos
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredCursos.length, visibleCount, hasMore]);

  // Reiniciar cuando cambia la búsqueda
  useEffect(() => {
    setVisibleCount(10);
    setHasMore(true);
  }, [delayedSearch]);






  return (
    <section className="section">
      <div className="container">
        <h1 className="title t-align-center" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
          📚 Todos los Cursos
        </h1>
        <p className="text--lg c-secondary-text t-align-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          Descubre cursos de calidad impartidos por expertos
        </p>

        {/* Buscador */}
        <div style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar cursos por título, descripción o nivel..."
          />
        </div>

        {/* Resultados */}
        {visibleCursos.length > 0 ? (
          <>
            <div className="g-layout g-layout--auto-fit-columns g-8" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
              {visibleCursos.map(curso => (
                <Card key={curso.id} curso={curso} />
              ))}
            </div>


           {/* Mensaje inferior según el estado */}
            <p className="text--sm c-secondary-text t-align-center" style={{ marginBottom: 'calc(var(--size) * 6)' }}>
              {hasMore
                ? 'Desplázate hacia abajo para ver más...'
                : 'No hay más cursos por mostrar'}
            </p>
          </>
          
          
        ) : (
          <div className="t-align-center" style={{ padding: 'calc(var(--size) * 16) 0' }}>
            <p className="text--lg c-secondary-text">
              No se encontraron cursos que coincidan con tu búsqueda
            </p>
          </div>
        )}
      </div>
    </section>
  );
}