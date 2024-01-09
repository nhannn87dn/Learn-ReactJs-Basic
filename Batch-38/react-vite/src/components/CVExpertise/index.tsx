import { myProfile } from "../../data/myProfile";

type TExpertise = {
  name: string;
  rank: number;
};

const SingleItem = ({ name, rank }: TExpertise) => {
  const dots = [1, 2, 3, 4, 5];
  return (
    <li className="flex">
      <span className="name">{name}</span>
      <span className="rank flex">
        {dots.map((dot) => {
          if (dot <= rank) {
            return (
              <span className="w-[10px] h-[10px] rounded-full bg-amber-500 block"></span>
            );
          }

          return (
            <span
              key={dot}
              className="w-[10px] h-[10px] rounded-full bg-white block"
            ></span>
          );
        })}
      </span>
    </li>
  );
};

const CVExpertise = () => {
  return (
    <div>
      <ul>
        {myProfile.expertise.map((item) => {
          return <SingleItem name={item.name} rank={item.rank} />;
        })}
      </ul>
    </div>
  );
};

export default CVExpertise;
