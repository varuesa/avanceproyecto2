export default function SearchBar({ value, onChange, placeholder = "Buscar..." }) {
  return (
    <div className="form" style={{ margin: '0 auto' }}>
      <input
        type="text"
        className="form__input text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}