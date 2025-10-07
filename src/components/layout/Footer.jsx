import { NavLink } from "react-router";
// import logo from "/react.svg";
import logo from "../../../public/react.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <nav className="nav">
        <div className="container g-layout g-layout--auto-fit-columns g-10">
          <div className="d-flex f-direction-column g-2">
            <a href="#"><img src={logo} alt="CursoTech Store Logo" width="32" height="32" className="img img--logo" /></a>
            <h2 className="interactive interactive--lg c-primary">CursoTech Store</h2>
            <p className="text text--xs c-secondary-text">
              CursoTech Store es una plataforma divertida y tecnológica donde encuentras cursos, profesores, te inscribes fácil y guardas tus favoritos.
            </p>
          </div>

          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Navegación</h3>
            <ul className="list d-flex f-direction-column g-1">

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `link interactive interactive--sm c-secondary-text ${isActive ? "active" : ""}`
                    }
                    to="/profesores"
                  >
                    Profesores
                  </NavLink>
                </li>              
              <li><NavLink className="link interactive interactive--sm c-secondary-text" to="/cursos">
                    Cursos
                </NavLink></li>

<li>
                  <NavLink className="link interactive interactive--sm c-secondary-text" to="/categorias">
                    Categorías
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link interactive interactive--sm c-secondary-text" to="/favoritos">
                    Favoritos
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link interactive interactive--sm c-secondary-text" to="/miscursos">
                    Mis Cursos
                  </NavLink>
                </li>
            </ul>
          </div>

          <div className="d-flex f-direction-column g-2">
            <h3 className="interactive interactive--lg">Social Media</h3>
            <ul className="list d-flex f-direction-column g-1">
              <li><a href="https://www.instagram.com/" className="link interactive interactive--sm c-secondary-text">Instagram</a></li>
              <li><a href="https://x.com/" className="link interactive interactive--sm c-secondary-text">X</a></li>
              <li><a href="https://www.youtube.com/" className="link interactive interactive--sm c-secondary-text">YouTube</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="nav">
        <div className="container flexbox flexbox--centered-spacing flexbox--responsive g-2">
          <h2 className="interactive interactive--xs">
            <a href="https://www.instagram.com/" className="link interactive interactive--xs">
              Vanessa Espinoza</a> &copy; {currentYear} <a href="https://www.linkedin.com/" className="link interactive interactive--xs">
              CursoTech Store.
            </a>
            All rights reserved.
          </h2>
          <h2 className="interactive interactive--xs">
            Made with ♥️ by: <a href="https://www.instagram.com/" className="link interactive interactive--xs">
              Vanessa Espinoza
            </a>
          </h2>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;