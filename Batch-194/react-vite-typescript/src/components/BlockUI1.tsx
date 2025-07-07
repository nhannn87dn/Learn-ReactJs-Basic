interface IProcessItem {
  label: string;
  percent: number;
  bgLabel: string;
  bgPercent: string;
}
const ProcessItem = ({ label, percent, bgLabel, bgPercent }: IProcessItem) => {
  return (
    <div className="process-item flex">
      <div
        className={`process-label w-[150px] ${bgLabel} text-white uppercase py-3 px-3 text-right`}
      >
        {label}
      </div>
      <div className="process-bar flex-1 bg-gray-200">
        <div
          style={{
            width: `${percent}%`,
          }}
          className={`percent ${bgPercent} py-3 px-3  text-white`}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};
const BlockUI1 = () => {
  return (
    <div className="process-list flex flex-col gap-y-3">
      <ProcessItem
        bgLabel="bg-red-500"
        bgPercent="bg-red-400"
        label="Bandwidth"
        percent={20}
      />
      <ProcessItem
        bgLabel="bg-cyan-500"
        bgPercent="bg-cyan-400"
        label="Storage"
        percent={50}
      />
      <ProcessItem
        bgLabel="bg-green-500"
        bgPercent="bg-green-400"
        label="User"
        percent={70}
      />
    </div>
  );
};

export default BlockUI1;
