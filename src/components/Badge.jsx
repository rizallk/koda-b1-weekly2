/**
 *  Komponen badge untuk menampilkan status atau teks pendek apapun
 *
 * @typedef {object} BadgeProps
 * @property {string} text - menampilkan isi teksnya
 * @property {string} variant - menentukan variant style badge
 * @property {string} className - menambahkan custom class
 * @returns {JSX.Element}
 */
export default function Badge({ text, variant, className }) {
  const variantClassName =
    variant === 'theme'
      ? 'text-theme bg-[#FFF3EE] border-[#FFF3EE]'
      : 'text-[#4A5565] bg-[#F9FAFB] border-[#E5E7EB]';

  return (
    <div
      className={`rounded-full font-medium text-sm border-[0.7px] py-2 px-3 w-fit ${variantClassName} ${className}`}
    >
      {text}
    </div>
  );
}
