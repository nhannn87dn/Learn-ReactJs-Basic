import { useState } from "react";
import styles from "./TagsList.module.css";

type TTag = {
  id: number;
  name: string;
};

type TagItemProps = {
  name: string;
  onClick: () => void;
};

const TagItem = ({ name, onClick }: TagItemProps) => {
  return (
    <span onClick={onClick} className={styles.tag_item}>
      {name}
    </span>
  );
};

const TagsList = () => {
  const [data, setData] = useState<TTag[]>([
    { id: 1, name: "Angular" },
    { id: 2, name: "React" },
    { id: 3, name: "NextJs" },
  ]);
  console.log("<<=== 🚀data  ===>>", data);
  return (
    <div
      style={{
        display: "flex",
        columnGap: 10,
      }}
    >
      {data.map((tag) => {
        return (
          <TagItem
            key={tag.id}
            onClick={() => {
              console.log(tag.id);
              const newData = data.filter((t) => t.id != tag.id);
              setData(newData);
            }}
            name={tag.name}
          />
        );
      })}
    </div>
  );
};

export default TagsList;
