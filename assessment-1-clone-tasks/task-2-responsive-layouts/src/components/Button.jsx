// Reusable button used for both "SEARCH" and "WATCH NOW"
function Button({ children, className = '' }) {
  return (
    <button type="button" className={`btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
