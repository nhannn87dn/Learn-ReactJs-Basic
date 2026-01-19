//cách code một component

//Bước 1 Tạo một function với tên bắt đầu bằng kí tự HOA
function Tag() {
  //Code logic của component
  //  (nếu có)

  //Bước 2 Trả về JSX (nhìn giống HTML)
  return (
    <span
      style={{
        padding: "5px 8px",
        border: "1px solid #000",
      }}
    >
      Bag
    </span>
  );
}
//Bước 3 Export component để sử dụng ở nơi khác
export default Tag;
