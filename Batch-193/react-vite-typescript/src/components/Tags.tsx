const tagsList = [
  { id: 1, label: "Angular", active: false },
  { id: 2, label: "Vue", active: false },
  { id: 3, label: "NextJs", active: true },
];
interface ITag {
  tag: {
    id: number;
    label: string;
    active: boolean;
  };
}
const TagItem = ({ tag }: ITag) => {
  return (
    <div
      className={`tag-item ${
        tag.active ? "bg-red-100" : "bg-green-100"
      } px-2 py-1 rounded-xl`}
    >
      {tag.label}
    </div>
  );
};

const Tags = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex gap-x-4">
      {tagsList.map((tag) => {
        return <TagItem key={tag.id} tag={tag} />;
      })}
    </div>
  );
};

export default Tags;
