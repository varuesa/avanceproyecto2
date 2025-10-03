import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';
import Pagination from '../components/ui/Pagination';

export default function Cursos() {
  const { cursos } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtrar cursos
  const filteredCursos = cursos.filter(curso =>
    curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    curso.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
    curso.nivel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const totalPages = Math.ceil(filteredCursos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCursos = filteredCursos.slice(startIndex, startIndex + itemsPerPage);

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
        {currentCursos.length > 0 ? (
          <>
            <div className="g-layout g-layout--auto-fit-columns g-8" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
              {currentCursos.map(curso => (
                <Card key={curso.id} curso={curso} />
              ))}
            </div>

            {/* Paginación */}
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
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