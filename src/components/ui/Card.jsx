import { Link } from "react-router";


export default function Card({ curso, profesor }) {
    if (curso) {
        return (
            <article className="card">
                <img
                    src={curso.imagen}
                    alt={curso.titulo}
                    className="card__image"
                />
                <div className="card__body">
                    <h3 className="subtitle--2xs">{curso.titulo}</h3>
                    <p className="text--sm c-secondary-text" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {curso.descripcion}
                    </p>
                    <div className="d-flex j-content-between a-items-center">
                        <span className="badge badge--primary interactive--xs">
                            {curso.nivel}
                        </span>
                        <span className="text--sm c-primary f-weight-700">
                            ${curso.precio}
                        </span>
                    </div>
                    <Link
                        to={`/cursos/${curso.id}`}
                        className="button button--primary interactive--sm"
                    >
                        Ver detalles
                    </Link>
                </div>
            </article>
        );
    }

    if (profesor) {
        return (
            <div className="card">
                <div className="card__body d-flex f-direction-column a-items-center g-4">
                    <img
                        src={profesor.avatar}
                        alt={profesor.nombre}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--primary-color)'
                        }}
                    />
                    <h3 className="subtitle--xs t-align-center">{profesor.nombre}</h3>
                    <span className="badge badge--primary interactive--sm">
                        {profesor.especialidad}
                    </span>
                    <p className="text--sm c-secondary-text t-align-center" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {profesor.bio}
                    </p>
                    <div className="d-flex g-4 t-align-center">
                        <div>
                            <p className="text--xs c-secondary-text" style={{ margin: 0 }}>Estudiantes</p>
                            <p className="interactive--sm c-primary" style={{ margin: 0 }}>{profesor.estudiantes.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="text--xs c-secondary-text" style={{ margin: 0 }}>Cursos</p>
                            <p className="interactive--sm c-primary" style={{ margin: 0 }}>{profesor.cursos_dictados}</p>
                        </div>
                    </div>
                    <Link
                        to={`/profesores/${profesor.id}`}
                        className="button button--primary interactive--sm"
                    >
                        Ver perfil
                    </Link>
                </div>
            </div>
        );
    }

    return null;
}