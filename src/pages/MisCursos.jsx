import { Link } from 'react-router';
import { useAppContext } from '../context/AppContext';
import Card from '../components/ui/Card';

export default function MisCursos() {
  const { getMisCursosInscritos } = useAppContext();
  const misCursos = getMisCursosInscritos();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title t-align-center" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
          📚 Mis Cursos
        </h1>
        <p className="text--lg c-secondary-text t-align-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          Cursos en los que estás inscrito
        </p>

        {misCursos.length > 0 ? (
          <div className="g-layout g-layout--auto-fit-columns g-8">
            {misCursos.map(curso => (
              <Card key={curso.id} curso={curso} />
            ))}
          </div>
        ) : (
          <div className="t-align-center" style={{ padding: 'calc(var(--size) * 16) 0' }}>
            <span style={{ fontSize: '5rem', display: 'block', marginBottom: 'calc(var(--size) * 4)' }}>
              📖
            </span>
            <h2 className="subtitle">No estás inscrito en ningún curso</h2>
            <p className="text c-secondary-text" style={{ marginTop: 'calc(var(--size) * 2)', marginBottom: 'calc(var(--size) * 8)' }}>
              Descubre nuestros cursos y comienza a aprender hoy
            </p>
            <Link to="/cursos" className="button button--primary interactive--lg">
              Ver cursos disponibles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}