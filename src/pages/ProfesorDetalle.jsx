import { useParams } from 'react-router';
import { useAppContext } from '../context/AppContext';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Card from '../components/ui/Card';


export default function ProfesorDetalle() {
  const { id } = useParams();
  const { getProfesorById, getCursosByProfesor } = useAppContext();
  
  const profesor = getProfesorById(id);
  const cursos = getCursosByProfesor(id);

  if (!profesor) {
    return (
      <section className="section">
        <div className="container t-align-center">
          <h2 className="title--sm">Profesor no encontrado</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Profesores', path: '/profesores' },
          { label: profesor.nombre }
        ]} />

        {/* Perfil del profesor */}
        <div className="card" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          <div className="card__body">
            <div className="d-flex f-direction-column g-8">
              <div className="d-flex f-direction-column g-4 a-items-center">
                <img 
                  src={profesor.avatar} 
                  alt={profesor.nombre}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '5px solid var(--primary-color)'
                  }}
                />
                <div className="t-align-center">
                  <h1 className="title--sm">{profesor.nombre}</h1>
                  <span className="badge badge--primary interactive--lg" style={{ marginTop: 'calc(var(--size) * 2)' }}>
                    {profesor.especialidad}
                  </span>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="g-layout g-layout--auto-fit-columns g-8">
                <div className="t-align-center">
                  <p className="title--xs c-primary">{profesor.estudiantes.toLocaleString()}</p>
                  <p className="text c-secondary-text">Estudiantes</p>
                </div>
                <div className="t-align-center">
                  <p className="title--xs c-primary">{profesor.cursos_dictados}</p>
                  <p className="text c-secondary-text">Cursos</p>
                </div>
                <div className="t-align-center">
                  <p className="title--xs c-primary">{profesor.valoracion} ⭐</p>
                  <p className="text c-secondary-text">Valoración</p>
                </div>
              </div>

              {/* Biografía */}
              <div>
                <h3 className="subtitle--xs" style={{ marginBottom: 'calc(var(--size) * 2)' }}>
                  Sobre {profesor.nombre.split(' ')[0]}
                </h3>
                <p className="text c-secondary-text">{profesor.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cursos del profesor */}
        <h2 className="title--sm" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          📚 Cursos de {profesor.nombre.split(' ')[0]}
        </h2>
        
        {cursos.length > 0 ? (
          <div className="g-layout g-layout--auto-fit-columns g-8">
            {cursos.map(curso => (
              <Card key={curso.id} curso={curso} />
            ))}
          </div>
        ) : (
          <div className="t-align-center" style={{ padding: 'calc(var(--size) * 8)' }}>
            <p className="text c-secondary-text">
              Este profesor aún no tiene cursos publicados
            </p>
          </div>
        )}
      </div>
    </section>
  );
}