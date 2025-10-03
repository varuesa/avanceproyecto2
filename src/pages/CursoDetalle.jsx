
import { useAppContext } from '../context/AppContext';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { Link, useParams } from 'react-router';

export default function CursoDetalle() {
    const { id } = useParams();
    const {
        getCursoById,
        getProfesorById,
        isFavorito,
        toggleFavorito,
        isInscrito,
        toggleInscripcion
    } = useAppContext();

    const curso = getCursoById(id);
    const profesor = curso ? getProfesorById(curso.profesor_id) : null;

    if (!curso) {
        return (
            <section className="section">
                <div className="container t-align-center">
                    <h2 className="title--sm">Curso no encontrado</h2>
                </div>
            </section>
        );
    }

    const esFavorito = isFavorito(curso.id);
    const estaInscrito = isInscrito(curso.id);

    return (
        <section className="section">
            <div className="container">
                <Breadcrumbs items={[
                    { label: 'Cursos', path: '/cursos' },
                    { label: curso.titulo }
                ]} />

                <div className="g-layout g-8" style={{ gridTemplateColumns: '1fr', gap: 'calc(var(--size) * 8)' }}>
                    {/* Imagen principal */}
                    <div className="p-relative" style={{ borderRadius: 'calc(var(--size) * 4)', overflow: 'hidden' }}>
                        <img
                            src={curso.imagen}
                            alt={curso.titulo}
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                        />
                        {curso.destacado && (
                            <span
                                className="badge badge--primary interactive p-absolute"
                                style={{ top: 'calc(var(--size) * 4)', right: 'calc(var(--size) * 4)' }}
                            >
                                ✨ Destacado
                            </span>
                        )}
                    </div>

                    {/* Contenido */}
                    <div className="d-flex f-direction-column g-8">
                        {/* Header */}
                        <div>
                            <div className="d-flex j-content-between a-items-start g-4 f-wrap" style={{ marginBottom: 'calc(var(--size) * 2)' }}>
                                <h1 className="title--sm" style={{ flex: 1 }}>{curso.titulo}</h1>
                                <button
                                    onClick={() => toggleFavorito(curso.id)}
                                    className={`button ${esFavorito ? 'button--primary' : 'button--outline-primary'} interactive`}
                                >
                                    {esFavorito ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
                                </button>
                            </div>

                            <div className="d-flex g-4 f-wrap" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
                                <span className="badge badge--primary interactive">
                                    {curso.nivel}
                                </span>
                                <span className="text c-secondary-text">⏱️ {curso.duracion}</span>
                                <span className="text c-secondary-text">👥 {curso.estudiantes.toLocaleString()} estudiantes</span>
                                <span className="text c-warning">⭐ {curso.valoracion}</span>
                            </div>

                            <p className="text--lg c-secondary-text">{curso.descripcion}</p>
                        </div>

                        {/* Profesor */}
                        {profesor && (
                            <div className="card">
                                <div className="card__body">
                                    <h3 className="subtitle--xs" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
                                        👨‍🏫 Instructor
                                    </h3>
                                    <div className="d-flex g-4 a-items-center">
                                        <img
                                            src={profesor.avatar}
                                            alt={profesor.nombre}
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '50%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <div className="f-1">
                                            <h4 className="interactive--lg">{profesor.nombre}</h4>
                                            <p className="text--sm c-secondary-text" style={{ margin: 'calc(var(--size) * 1) 0' }}>
                                                {profesor.especialidad}
                                            </p>
                                            <Link
                                                to={`/profesores/${profesor.id}`}
                                                className="link text--sm"
                                            >
                                                Ver perfil completo →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Inscripción */}
                        <div className="card">
                            <div className="card__body d-flex j-content-between a-items-center f-wrap g-4">
                                <div>
                                    <p className="text--sm c-secondary-text" style={{ margin: 0 }}>Precio del curso</p>
                                    <p className="title--xs c-primary" style={{ margin: 'calc(var(--size) * 1) 0 0 0' }}>
                                        ${curso.precio}
                                    </p>
                                </div>
                                <button
                                    onClick={() => toggleInscripcion(curso.id)}
                                    className={`button ${estaInscrito ? 'button--secondary' : 'button--primary'} interactive--xl`}
                                >
                                    {estaInscrito ? '✓ Inscrito - Cancelar' : '🎓 Inscribirse ahora'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}