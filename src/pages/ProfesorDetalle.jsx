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
    <section className="section" style={{}}>
      <div className="container" style={{}}>
        <Breadcrumbs items={[
          { label: 'Profesores', path: '/profesores' },
          { label: profesor.nombre }
        ]} />

        {/* Perfil del profesor */}
        <div className="card " style={{/*  border: '2px solid red' */ }}>
          <div className="card__body1 " style={{ display: 'flex'/* border: '2px solid red' , */ }}>
            <img
              src={profesor.avatar}
              alt={profesor.nombre}
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid var(--primary-color)'
              }}
            />
            <div className="" style={{/* border: '2px solid green', */   }}>
              <h1 className="title--sm t-align-center">{profesor.nombre}</h1>

              <div className="d-flex j-content-center">
                <span className="badge badge--primary interactive--lg">
                  {profesor.especialidad}
                </span>
              </div>

              {/* Estadísticas */}
              <div className="d-flex g-4 j-content-around">
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
            </div>
          </div>
          {/* Biografía */}
          <div  className="card__body1 text--sm  ">
            <h3 className="subtitle--xs" style={{ marginBottom: 'calc(var(--size) * 2)' }}>
              Sobre {profesor.nombre.split(' ')[0]}
            </h3>
            <p className="text c-secondary-text">{profesor.bio}</p>
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