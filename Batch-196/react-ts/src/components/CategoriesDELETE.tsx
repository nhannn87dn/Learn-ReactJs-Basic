const CategoriesDELETE = ({ id }: { id: number }) => {
  const onHandleDelete = async () => {
    console.log("Delete", id);
    const url = `https://api.escuelajs.co/api/v1/categories/${id}`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Delete", data);
  };
  return <button onClick={onHandleDelete}>Delete</button>;
};

export default CategoriesDELETE;
