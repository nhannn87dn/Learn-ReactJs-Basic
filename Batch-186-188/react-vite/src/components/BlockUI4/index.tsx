type TChartItem = {
  dayName: string;
  bgColor: string;
  percent: string;
};

type TBlock = {
  count: number;
  chartData: TChartItem[];
};

const ChartItem = ({ dayName, bgColor, percent }: TChartItem) => {
  return (
    <li className="w-[20px]">
      <div className="chart-bar flex flex-col justify-end bg-white border border-gray-300 w-full h-[100px]">
        <div
          style={{
            height: `${percent}`,
          }}
          className={`percent ${bgColor} flex w-full`}
        ></div>
      </div>
      <div className="chart-label">{dayName}</div>
    </li>
  );
};

const BlockUI4 = ({ count, chartData }: TBlock) => {
  return (
    <div className="block-item w-[200px]">
      <div className="block-head bg-white flex flex-col items-center py-3">
        <p>Today'Visitor</p>
        <strong>{count}</strong>
      </div>
      <ul className="block-days bg-gray-200 flex gap-x-2">
        <ChartItem
          dayName={chartData[0].dayName}
          bgColor={chartData[0].bgColor}
          percent={chartData[0].percent}
        />
        <ChartItem
          dayName={chartData[1].dayName}
          bgColor={chartData[1].bgColor}
          percent={chartData[1].percent}
        />
        <ChartItem
          dayName={chartData[2].dayName}
          bgColor={chartData[2].bgColor}
          percent={chartData[2].percent}
        />
      </ul>
    </div>
  );
};

export default BlockUI4;
