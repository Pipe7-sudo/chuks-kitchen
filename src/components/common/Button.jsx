const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:scale-95 shadow-sm',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-orange-50 active:scale-95',
    accent: 'bg-accent text-white hover:bg-blue-700 active:scale-95 shadow-sm',
    ghost: 'bg-transparent text-primary hover:bg-orange-50',
    dark: 'bg-dark-deep text-white hover:bg-dark active:scale-95',
  };

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
