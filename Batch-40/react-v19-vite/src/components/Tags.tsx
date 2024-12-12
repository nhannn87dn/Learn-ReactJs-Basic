import { X } from "lucide-react";

const tags = [
  { id: 1, name: "Angular" },
  { id: 2, name: "Vue" },
  { id: 3, name: "React" },
];
const TagItem = ({ label, active }: { label: string; active: boolean }) => {
  return (
    <span
      className={`${
        active ? "bg-red-200" : "bg-green-200"
      } rounded-lg py-1 px-2 flex items-center gap-x-1`}
    >
      {label} <X size={18} />
    </span>
  );
};
export default function Tags() {
  return (
    <div className="bg-white rounded-lg m-2 p-2 flex gap-x-3">
      {tags.map((tag) => {
        return <TagItem active={tag.id === 3} key={tag.id} label={tag.name} />;
      })}
      {/* <TagItem label="Angular" />
      <TagItem label="Vue" />
      <TagItem label="React" /> */}
    </div>
  );
}
