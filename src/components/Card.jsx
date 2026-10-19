export default function Card({ img, imgHeight, variant, children, className }) {
  const variantClassName =
    variant === 'var2' ? 'bg-[#F9FAFB] ' : 'bg-white shadow';

  return (
    <div
      className={`rounded-xl overflow-hidden border-[0.6px] border-[#F3F4F6] ${variantClassName} ${className}`}
    >
      {img && (
        <img
          src={img}
          alt="Image"
          className="object-cover w-full"
          style={{ height: `${imgHeight}px` }}
        />
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
