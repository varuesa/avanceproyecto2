import { useState } from 'react';

import { useAppContext } from '../context/AppContext';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';

import Breadcrumbs from '../components/layout/Breadcrumbs';
import { Link, useParams } from 'react-router';

export default function Categorias() {
  const { id } = useParams();
  const { categorias, getCursosByCategoria } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');


  // Si hay ID, mostrar cursos de esa categoría
  if (id) {
    const categoria = categorias.find(cat => cat.id === parseInt(id));
    const cursos = getCursosByCategoria(id);

    // Filtrar cursos
    const filteredCursos = cursos.filter(curso =>
      curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      curso.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
      <section className="section">
        <div className="container">
          <Breadcrumbs items={[
            { label: 'Categorías', path: '/categorias' },
            { label: categoria?.nombre || 'Categoría' }
          ]} />

          <div className="t-align-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
            <span style={{ fontSize: '4rem' }}>{categoria?.icono}</span>
            <h1 className="title--sm" style={{ margin: 'calc(var(--size) * 2) 0' }}>
              {categoria?.nombre}
            </h1>
            <p className="text c-secondary-text">{categoria?.descripcion}</p>
          </div>

          {/* Buscador */}
          <div style={{ marginBottom: 'calc(var(--size) * 8)' }}>
            <SearchBar 
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Buscar cursos en esta categoría..."
            />
          </div>

          {/* Cursos */}
          {filteredCursos.length > 0 ? (
            <>
              <div className="g-layout g-layout--auto-fit-columns g-8" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
                {filteredCursos.map(curso => (
                  <Card key={curso.id} curso={curso} />
                ))}
              </div>


            </>
          ) : (
            <div className="t-align-center" style={{ padding: 'calc(var(--size) * 16) 0' }}>
              <p className="text--lg c-secondary-text">
                No se encontraron cursos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Vista principal de categorías
  const filteredCategorias = categorias.filter(categoria =>
    categoria.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    categoria.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section">
      <div className="container">
        <h1 className="title t-align-center" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
          🗂️ Todas las Categorías
        </h1>
        <p className="text--lg c-secondary-text t-align-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          Explora cursos organizados por temas
        </p>

        {/* Buscador */}
        <div style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          <SearchBar 
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar categorías..."
          />
        </div>

        {/* Grid de categorías */}
        {filteredCategorias.length > 0 ? (
          <div className="g-layout g-layout--auto-fit-columns g-8">
            {filteredCategorias.map(categoria => (
              <Link 
                key={categoria.id} 
                to={`/categorias/${categoria.id}`}
                style={{ textDecoration: 'none' }}
              >
                <article className="card">
                  <div className="card__body d-flex f-direction-column a-items-center g-4 t-align-center">
                    <span style={{ fontSize: '4rem' }}>{categoria.icono}</span>
                    <h3 className="subtitle--xs">{categoria.nombre}</h3>
                    <p className="text--sm c-secondary-text">
                      {categoria.descripcion}
                    </p>
                    <span className="badge badge--primary interactive--sm">
                      {categoria.total_cursos} cursos
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="t-align-center" style={{ padding: 'calc(var(--size) * 16) 0' }}>
            <p className="text--lg c-secondary-text">
              No se encontraron categorías
            </p>
          </div>
        )}
      </div>
    </section>
  );
}