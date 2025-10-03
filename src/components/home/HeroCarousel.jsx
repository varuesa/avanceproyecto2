import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

export default function HeroCarousel({ cursos }) {
  const cursosDestacados = cursos.filter(curso => curso.destacado);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="swiper--custom"
      style={{ 
        borderRadius: 'calc(var(--size) * 4)',
        overflow: 'hidden'
      }}
    >
      {cursosDestacados.map(curso => (
        <SwiperSlide key={curso.id}>
          <div className="p-relative" style={{ height: '500px' }}>
            <img 
              src={curso.imagen} 
              alt={curso.titulo}
              className="img--background"
              style={{ opacity: 0.3 }}
            />
            <div className="d-flex f-direction-column j-content-center a-items-center g-4" 
                 style={{ 
                   height: '100%',
                   padding: 'calc(var(--size) * 8)',
                   textAlign: 'center'
                 }}>
              <span className="badge badge--primary interactive">✨ Curso Destacado</span>
              <h2 className="hero__title" style={{ maxWidth: '800px' }}>
                {curso.titulo}
              </h2>
              <p className="hero__paragraph c-secondary-text" style={{ maxWidth: '600px' }}>
                {curso.descripcion}
              </p>
              <div className="d-flex g-4">
                <Link 
                  to={`/cursos/${curso.id}`}
                  className="button button--primary interactive--lg"
                >
                  Ver curso
                </Link>
                <span className="button button--secondary interactive--lg">
                  ${curso.precio}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}