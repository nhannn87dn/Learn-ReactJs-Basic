import React from "react";

type TTagItem = {
  id: number;
  name: string;
};

const Tags = () => {
  const [tags, setTags] = React.useState<TTagItem[]>([
    { id: 1, name: "Angular" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "NextJs" },
    { id: 4, name: "React" },
  ]);
  return (
    <div className="tags_list flex gap-x-3 my-4">
      <button
        onClick={() => {
          setTags([
            ...tags,
            { id: Math.floor(Math.random() * 100 + 5), name: "NodeJs" },
          ]);
        }}
      >
        Add new Tag
      </button>
      {tags.map((tag) => {
        return (
          <div
            key={tag.id}
            onClick={() => {
              setTags((prev) => prev.filter((p) => p.id !== tag.id));
            }}
            className="tag_item cursor-pointer bg-green-100 px-3 py-1 rounded-lg hover:bg-red-100"
          >
            {tag.name} <span className="font-bold text-xl">x</span>
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
