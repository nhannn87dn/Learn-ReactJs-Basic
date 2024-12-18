import Title from "./Title";

const DotIcon = ({ className }: { className: string }) => {
  return (
    <span
      className={`inline-block w-[10px] h-[10px] rounded-full ${className}`}
    ></span>
  );
};
const ExpertiseItem = ({
  label,
  rankNumber = 0,
}: {
  label: string;
  rankNumber: number;
}) => {
  const ranks = [1, 2, 3, 4, 5];
  return (
    <div className="expertise-item flex gap-x-5 items-center justify-between">
      <div className="text-white">{label}</div>
      <div className="rating flex gap-x-2">
        {ranks.map((r) => {
          if (r <= rankNumber) {
            return <DotIcon key={r} className="bg-orange-500" />;
          }
          return <DotIcon key={r} className="bg-white" />;
        })}
      </div>
    </div>
  );
};

export default function Expertise() {
  return (
    <div className="expertise-list">
      <Title className="text-white" content="Expertise" />

      <ExpertiseItem label="MS Word" rankNumber={5} />
      <ExpertiseItem label="MS Excel" rankNumber={3} />
    </div>
  );
}
