import ResumeTitle from "./ResumeTitle";
import { dataCV } from "./data";

const Rate = ({ rate }: { rate: number }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <span className="flex gap-x-[3px]">
      {arr.map((item) => (
        <span
          className={`w-[5px] h-[5px] rounded-full block ${item <= rate ? "bg-orange-400" : "bg-white"}`}
          data-index={item}
          key={item}
        ></span>
      ))}
    </span>
  );
};

const ExpertiseItem = ({
  expertise,
  rate,
}: {
  expertise: string;
  rate: number;
}) => {
  return (
    <li className="flex items-center justify-between">
      {expertise} <Rate rate={rate} />
    </li>
  );
};

const ResumeExpertises = () => {
  const expertises = dataCV.expertises;
  return (
    <div>
      <ResumeTitle title="Expertises" />
      <ul>
        {expertises &&
          expertises.map((expertise) => (
            <ExpertiseItem
              key={expertise.id}
              expertise={expertise.title}
              rate={expertise.rate}
            />
          ))}
      </ul>
    </div>
  );
};

export default ResumeExpertises;
