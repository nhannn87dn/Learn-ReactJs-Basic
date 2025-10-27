interface IProps {
  label: string;
  percent: number;
  bgLabel: string;
  bgPercent: string;
}
//rafce
const ProcessBar = ({ label, percent, bgLabel, bgPercent }: IProps) => {
  return (
    <div className="process-bar-item flex">
      <div
        className={`process-bar-label w-[160px] flex justify-end uppercase ${bgLabel} text-white px-4 py-3`}
      >
        {label}
      </div>
      <div className="process-bar-main flex-1 bg-gray-200">
        <div
          style={{
            width: `${percent}%`,
          }}
          className={`process-bar-percent h-full ${bgPercent} text-white text-center py-3`}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default ProcessBar;
