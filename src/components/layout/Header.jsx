import { Link, NavLink } from "react-router";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
 const { favoritos, misCursos } = useAppContext();

  return (
    <header className="header">
      <nav className="nav nav--scroll">
        <div className="container d-flex a-items-center g-4">
          <div className="f-1 d-flex j-content-start">
            <Link to="/" className="link d-flex a-items-center g-2">
              <img
                /* src="/react.svg" */
                 src={`${import.meta.env.BASE_URL}react.svg`}
                alt="CursoTech Store Logo"
                width="32"
                height="32"
                className="img img--logo"
              />
              <h2 className="interactive interactive--lg c-primary">
                CursoTech Store
              </h2>
            </Link>
          </div>
          <div
            className="off-canvas off-canvas--right off-canvas--mobile"
            id="menu"
          >
            <a href="#" className="off-canvas__backdrop"></a>
            <div className="off-canvas__child">
              <ul className="list f-2 list flexbox flexbox--center flexbox--responsive g-8">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `link interactive ${isActive ? "active" : ""}`
                    }
                    to="/profesores"
                  >
                    Profesores
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link interactive" to="/cursos">
                    Cursos
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link interactive" to="/categorias">
                    Categorías
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link interactive" to="/favoritos">
                   ❤️ Favoritos {favoritos.length > 0 && (
              <span className="badge badge--primary"> {favoritos.length} </span>
            )}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link interactive"  style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '8px' }} to="/miscursos">
                   📘 Mis Cursos   
{misCursos.length > 0 && (
              <span className="badge badge--primary"> {misCursos.length} </span>
            )}
                  </NavLink>

                </li>
              </ul>
            </div>
          </div>
          <div className="f-1 d-flex a-items-center j-content-end g-2">
            <a
              href="#menu"
              className="link interactive interactive--2xl md:d-none"
            >
              📚
            </a>
          </div>
        </div>
      </nav>
    </header>

   
  );
};

export default Header;
