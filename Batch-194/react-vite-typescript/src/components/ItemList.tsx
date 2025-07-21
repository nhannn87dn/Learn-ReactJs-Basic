// Component con (ví dụ một danh sách hiển thị các số đã được lọc/tính toán)
function ItemList({ items }) {
  console.log("ItemList re-rendered!");
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - Price: {item.price}
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
