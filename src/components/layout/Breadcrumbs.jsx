import { Link } from "react-router";


export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: 'calc(var(--size) * 4)' }}>
      <ol className="d-flex g-2 a-items-center" style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0 
      }}>
        <li>
          <Link to="/" className="link text--sm">🏠 Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="d-flex a-items-center g-2">
            <span className="text--sm c-secondary-text">/</span>
            {item.path ? (
              <Link to={item.path} className="link text--sm">
                {item.label}
              </Link>
            ) : (
              <span className="text--sm c-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}