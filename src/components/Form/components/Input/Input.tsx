const Input = ({ children, name, label, error }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      {children}
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default Input;
