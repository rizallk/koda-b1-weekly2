export default function ProgressBar({ label, min }) {
  return (
    <div>
      <div className="flex justify-between font-medium text-sm mb-3">
        <p className="text-[#364153]">{label}</p>
        <p className="text-theme">{min}%</p>
      </div>
      <div className="h-2.5 rounded-full overflow-hidden bg-[#E5E7EB] w-full">
        <div
          className="h-2.5 left-0 bg-dark rounded-full"
          style={{ width: `${min}%` }}
        ></div>
      </div>
    </div>
  );
}
