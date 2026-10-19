export default function Radio({
  id,
  label,
  placeholder,
  required = false,
  checked = false,
  className,
  ...inputRest
}) {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <input
        type="radio"
        id={id}
        placeholder={placeholder}
        className="border-[0.6px] border-[#E5E7EB] py-4 px-5 rounded-lg w-4 h-4 accent-theme"
        defaultChecked={checked}
        {...inputRest}
      />
      <label htmlFor={id} className="text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
}
