export default function Testimonials({ testimonios }) {
  return (
    <div className="g-layout g-layout--auto-fit-columns g-8">
      {testimonios.map(testimonio => (
        <article key={testimonio.id} className="card">
          <div className="card__body d-flex f-direction-column g-4">
            <div className="d-flex a-items-center g-4">
              <img 
                src={testimonio.avatar} 
                alt={testimonio.nombre}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h4 className="interactive">{testimonio.nombre}</h4>
                <p className="text--xs c-secondary-text" style={{ margin: 0 }}>
                  {testimonio.curso}
                </p>
              </div>
            </div>
            
            <div className="d-flex g-1">
              {[...Array(testimonio.valoracion)].map((_, i) => (
                <span key={i} className="text c-warning">⭐</span>
              ))}
            </div>
            
            <p className="text--sm c-secondary-text" style={{ fontStyle: 'italic' }}>
              "{testimonio.comentario}"
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}