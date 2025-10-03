
import { useAppContext } from '../context/AppContext';
import Card from '../components/ui/Card';
import { Link } from 'react-router';

export default function Favoritos() {
  const { getCursosFavoritos } = useAppContext();
  const cursosFavoritos = getCursosFavoritos();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title t-align-center" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
          ❤️ Mis Favoritos
        </h1>
        <p className="text--lg c-secondary-text t-align-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
          Cursos que te interesan
        </p>

        {cursosFavoritos.length > 0 ? (
          <div className="g-layout g-layout--auto-fit-columns g-8">
            {cursosFavoritos.map(curso => (
              <Card key={curso.id} curso={curso} />
            ))}
          </div>
        ) : (
          <div className="t-align-center" style={{ padding: 'calc(var(--size) * 16) 0' }}>
            <span style={{ fontSize: '5rem', display: 'block', marginBottom: 'calc(var(--size) * 4)' }}>
              🤍
            </span>
            <h2 className="subtitle">No tienes cursos favoritos aún</h2>
            <p className="text c-secondary-text" style={{ marginTop: 'calc(var(--size) * 2)', marginBottom: 'calc(var(--size) * 8)' }}>
              Explora nuestro catálogo y agrega cursos a tus favoritos
            </p>
            <Link to="/cursos" className="button button--primary interactive--lg">
              Explorar cursos
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}