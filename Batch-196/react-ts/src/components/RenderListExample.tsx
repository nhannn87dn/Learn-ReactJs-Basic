const Tag = ({ name }: { name: string }) => {
  return (
    <span
      style={{
        border: "1px solid #ddd",
        padding: "4px 8px",
        marginRight: 5,
      }}
    >
      {name}
    </span>
  );
};

const RenderListExample = () => {
  const tags = ["Bag", "Shoes", "Shirt", "Pants", "Hat", "Clothe"];
  return (
    <div>
      <h2>Render List Example Component</h2>
      <div>
        {tags.length > 0 &&
          tags.map((tag, index) => {
            return <Tag key={index} name={tag} />;
          })}

        {/* <Tag name="Bag" />
        <Tag name="Shoes" />
        <Tag name="Shirt" />
        <Tag name="Pants" />
        <Tag name="Hat" /> */}
      </div>
    </div>
  );
};

export default RenderListExample;
