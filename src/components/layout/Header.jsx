import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Inicio 🛒
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/profesores">
                  Profesores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cursos">
                  Cursos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categorias">
                  Categorías
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/favoritos">
                  Favoritos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/miscursos">
                  Mis Cursos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
