import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';
import Pagination from '../components/ui/Pagination';


export default function Profesores() {
  const { profesores } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtrar profesores
  const filteredProfesores = profesores.filter(profesor =>
    profesor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profesor.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const totalPages = Math.ceil(filteredProfesores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProfesores = filteredProfesores.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title t-align-center" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
          👨‍🏫 Nuestros Profesores
        </h1>
        <p className="text--lg c-secondary-text t-align-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          Aprende de los mejores expertos en la industria
        </p>

        {/* Buscador */}
        <div style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar por nombre o especialidad..."
          />
        </div>

        {/* Resultados */}
        {currentProfesores.length > 0 ? (
          <>
            <div className="g-layout g-layout--auto-fit-columns g-8" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
              {currentProfesores.map(profesor => (
                <Card key={profesor.id} profesor={profesor} />
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
              No se encontraron profesores que coincidan con tu búsqueda
            </p>
          </div>
        )}
      </div>
    </section>
  );
}