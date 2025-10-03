import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, duration = 2000, label, icon }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="d-flex f-direction-column a-items-center g-2">
      <span className="title c-primary">{icon}</span>
      <h3 className="title--sm c-primary">
        {count.toLocaleString()}+
      </h3>
      <p className="text c-secondary-text">{label}</p>
    </div>
  );
}

export default function StatsCounter({ cursos, profesores }) {
  const totalEstudiantes = cursos.reduce((sum, curso) => sum + curso.estudiantes, 0);

  return (
    <div className="g-layout g-layout--auto-fit-columns g-8">
      <AnimatedCounter 
        end={cursos.length} 
        label="Cursos disponibles"
        icon="📚"
      />
      <AnimatedCounter 
        end={profesores.length} 
        label="Profesores expertos"
        icon="👨‍🏫"
      />
      <AnimatedCounter 
        end={totalEstudiantes} 
        label="Estudiantes activos"
        icon="🎓"
      />
    </div>
  );
}