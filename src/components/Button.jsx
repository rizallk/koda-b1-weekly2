export default function Button({ children, className, variant, ...rest }) {
  let variantClassName;

  switch (variant) {
    case 'theme':
      variantClassName = 'bg-theme hover:bg-[#ee571b] text-dark';
      break;
    case 'outline':
      variantClassName =
        'border border-dark hover:bg-dark text-dark hover:text-white';
      break;
    case 'outline-2':
      variantClassName =
        'border border-[#F3F4F6] hover:bg-[#e2e2e4] text-[#364153]';
      break;
    case 'default':
    default:
      variantClassName = 'bg-dark hover:bg-black text-white';
      break;
  }

  return (
    <button
      className={`px-4 py-3 rounded-lg cursor-pointer transition ${variantClassName} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
