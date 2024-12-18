import { X } from "lucide-react";
import { useState } from "react";

const tags = [
  { id: 1, name: "Angular" },
  { id: 2, name: "Vue" },
  { id: 3, name: "React" },
];

const TagItem = ({
  label,
  active,
  onHandleDelete,
}: {
  label: string;
  active: boolean;
  onHandleDelete: () => void; // Function to delete a tag by its id
}) => {
  return (
    <span
      onClick={onHandleDelete}
      className={`${
        active ? "bg-red-200" : "bg-green-200"
      } rounded-lg py-1 px-2 flex items-center gap-x-1`}
    >
      {label} <X size={18} />
    </span>
  );
};
export default function Tags() {
  const [vTags, setVTags] = useState(tags);
  console.log("<<=== 🚀 vTags ===>>", vTags);
  return (
    <div className="bg-white rounded-lg m-2 p-2 flex gap-x-3">
      {vTags.map((tag) => {
        return (
          <TagItem
            onHandleDelete={() =>
              setVTags((prev) => prev.filter((p) => p.id !== tag.id))
            }
            active={tag.id === 3}
            key={tag.id}
            label={tag.name}
          />
        );
      })}
    </div>
  );
}
