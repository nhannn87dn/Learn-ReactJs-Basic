const TagItem = ({ label }: { label: string }) => {
  return <span className="tag">{label}</span>;
};
const Tags = () => {
  return (
    <div className="tags-list flex gap-3 m-5">
      {/* <span className="tag">Bag</span>
      <span className="tag">Black</span>
      <span className="tag">Blue</span> */}
      <TagItem label="Bag" />
      <TagItem label="Black" />
      <TagItem label="Blue" />
    </div>
  );
};

export default Tags;
