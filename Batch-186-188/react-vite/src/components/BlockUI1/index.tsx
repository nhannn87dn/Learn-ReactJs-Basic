const BlockItem = ({ label, percent, bgLabel, bgPercent }) => {
  return (
    <div className="block-item flex h-[45px] w-full">
      <div
        className={`block-label h-full  w-[120px] uppercase p-3 text-right text-white ${bgLabel}`}
      >
        {label}
      </div>
      <div className="block-progress h-full flex-1 bg-gray-300">
        <div
          style={{
            width: percent,
          }}
          className={`block-percent h-full  text-white p-3 ${bgPercent}`}
        >
          {percent}
        </div>
      </div>
    </div>
  );
};

const BlockUI1 = () => {
  return (
    <div className="block-ui1 flex flex-col gap-y-3">
      <BlockItem
        label={"Bandwidth"}
        percent={"20%"}
        bgLabel={"bg-red-600"}
        bgPercent={"bg-red-500"}
      />
      <BlockItem
        label={"Storage"}
        percent={"50%"}
        bgLabel={"bg-sky-600"}
        bgPercent={"bg-sky-500"}
      />
      <BlockItem
        label={"Users"}
        percent={"70%"}
        bgLabel={"bg-green-600"}
        bgPercent={"bg-green-500"}
      />
    </div>
  );
};

export default BlockUI1;
