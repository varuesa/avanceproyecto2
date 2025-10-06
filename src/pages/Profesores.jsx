import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';



export default function Profesores() {
  const { profesores } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
 

  // Filtrar profesores
  const filteredProfesores = profesores.filter(profesor =>
    profesor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profesor.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
        {filteredProfesores.length > 0 ? (
          <>
            <div className="g-layout g-layout--auto-fit-columns g-8 " style={{ marginBottom: 'calc(var(--size) * 8)' }}>
              {filteredProfesores.map(profesor => (
                <Card key={profesor.id} profesor={profesor} />
              ))}
            </div>

 
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