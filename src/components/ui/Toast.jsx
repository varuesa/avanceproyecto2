import { useAppContext } from '../../context/AppContext';

export default function Toast() {
  const { toast } = useAppContext();

  if (!toast) return null;

  const typeStyles = {
    success: 'c-primary',
    warning: 'c-warning',
    error: 'c-warning',
    info: 'c-secondary'
  };

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      right: '20px',
      zIndex: 9999,
      padding: '1rem 1.5rem',
      borderRadius: '8px',
      backgroundColor: 'var(--secondary-background)',
      boxShadow: '0 4px 12px var(--shadow)',
      animation: 'slideInRight 0.3s ease-out',
      maxWidth: '400px'
    }}>
      <p className={`text ${typeStyles[toast.type]}`} style={{ margin: 0 }}>
        {toast.message}
      </p>
    </div>
  );
}