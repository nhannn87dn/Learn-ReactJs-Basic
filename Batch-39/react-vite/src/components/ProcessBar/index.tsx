type TProcessBar = {
  bwbg: string;
  pcbg: string;
  label: string;
  percent: number;
};
const ProcessBar = ({ bwbg, pcbg, label, percent }: TProcessBar) => {
  return (
    <div className="flex my-2">
      <div
        className={`label py-1 px-2 w-[100px] ${bwbg} text-white flex justify-end`}
      >
        {label}
      </div>
      <div className="process_bar flex-1 bg-slate-200">
        <div
          style={{ width: `${percent}%` }}
          className={`percent py-1 px-2 ${pcbg}  text-white`}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default ProcessBar;
