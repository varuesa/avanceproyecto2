
import { Link } from "react-router";
import HeroCarousel from "../components/home/HeroCarousel";
import StatsCounter from "../components/home/StatsCounter";
import { useAppContext } from "../context/AppContext";
import Card from "../components/ui/Card";
import Testimonials from "../components/home/Testimonials";




export default function Home() {
  const { cursos, profesores, categorias, testimonios } = useAppContext();

  return (
    <>
      
      {/* Hero con Carrusel */}
      <section className="hero">
        <div className="container">
          <HeroCarousel cursos={cursos} />
        </div>
      </section>

       {/* Contadores */}
      <section className="section">
        <div className="container ">
          <div className="" >
          <StatsCounter cursos={cursos} profesores={profesores} />
          </div >
         
        </div>
      </section>

            {/* Profesores Destacados */}
      <section className="section">
        <div className="container">
          <div className="d-flex j-content-between a-items-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
            <h2 className="title--sm">👨‍🏫 Profesores Destacados</h2>
            <Link to="/profesores" className="button button--outline-primary interactive">
              Ver todos →
            </Link>
          </div>
          
          <div className="g-layout cols-3 g-8">
            {profesores.slice(0, 3).map(profesor => (
              <Card key={profesor.id} profesor={profesor} />
            ))}
          </div>
        </div>
      </section>

            {/* Cursos Populares */}
      <section className="section">
        <div className="container">
          <div className="d-flex j-content-between a-items-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
            <h2 className="title--sm">📚 Cursos Populares</h2>
            <Link to="/cursos" className="button button--outline-primary interactive">
              Ver todos →
            </Link>
          </div>
          
          <div className="g-layout cols-3 g-8">
            {cursos.slice(0, 3).map(curso => (
              <Card key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </section>

       {/* Categorías */}
      <section className="section">
        <div className="container">
          <div className="d-flex j-content-between a-items-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
            <h2 className="title--sm">🗂️ Explora por Categoría</h2>
            <Link to="/categorias" className="button button--outline-primary interactive">
              Ver todas →
            </Link>
          </div>
          
          <div className="g-layout cols-3 g-8">
            {categorias.slice(0, 3).map(categoria => (
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
        </div>
      </section>

       {/* Testimonios */}
      <section className="section">
        <div className="container">
          <h2 className="title--sm t-align-center" style={{ marginBottom: 'calc(var(--size) * 8)' }}>
            💬 Lo que dicen nuestros estudiantes
          </h2>
          <Testimonials testimonios={testimonios} />
        </div>
      </section>
 
    </>
  );
}