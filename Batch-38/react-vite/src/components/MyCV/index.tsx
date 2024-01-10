import CVExpertise from "../CVExpertise";

const MyCV = () => {
  return (
    <div className="flex drop-shadow-2xl">
      <div className="col_left w-[220px] bg-indigo-700">
        Left
        <CVExpertise />
      </div>
      <div className="col_right flex-1">Rigt</div>
    </div>
  );
};

export default MyCV;
