export default function Input({
  id,
  label,
  placeholder,
  required = false,
  type = 'text',
  className,
  error,
  ...inputRest
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="font-medium text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mb-3"></div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border-[0.6px] border-[#E5E7EB] py-4 px-5 rounded-lg w-full text-sm"
        {...inputRest}
      />
      {error && (
        <p role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
