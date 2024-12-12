export default function ProcessBar({ label, bgLabel, percent, bgPercent }) {
  return (
    <div className="process-bar flex my-3">
      <div
        className={`process-label w-[120px] ${bgLabel} uppercase py-2 px-3 text-center text-white`}
      >
        {label}
      </div>
      <div className="process-bar flex-1 bg-gray-300">
        <div
          style={{ width: `${percent}%` }}
          className={`process-bar-percent py-2 px-3 ${bgPercent} text-white`}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
}
