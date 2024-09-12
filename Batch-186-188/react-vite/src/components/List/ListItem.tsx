const ListItem = ({
  content,
  isDone = false,
}: {
  content: string;
  isDone: boolean;
}) => {
  console.log("ListItem render", content);

  return (
    <li>
      {content} {isDone && "✔"}
    </li>
  );
};

export default ListItem;
