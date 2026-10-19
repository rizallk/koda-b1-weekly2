export default function Header({ h4, h2, desc, children }) {
  return (
    <header className="bg-[#F9FAFB] border-b-[0.6px] border-b-[#F3F4F6] mt-16.25 py-10">
      <div className="container mx-auto p-4">
        {children ? (
          <div className="flex justify-between md:items-center flex-col md:flex-row">
            <div>
              <h4 className="font-semibold text-xs text-theme mb-3">{h4}</h4>
              <h2 className="font-extrabold text-5xl text-[#101828] mb-4">
                {h2}
              </h2>
              <p className="text-[#6A7282] mb-4">{desc}</p>
            </div>
            <div>{children}</div>
          </div>
        ) : (
          <div className="text-center">
            <h4 className="font-semibold text-xs text-theme mb-3">{h4}</h4>
            <h2 className="font-extrabold text-5xl text-[#101828] mb-4">
              {h2}
            </h2>
            <p className="text-[#6A7282] mb-4">{desc}</p>
          </div>
        )}
      </div>
    </header>
  );
}
