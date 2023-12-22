import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface ICategories {
  id: number;
  name: string;
}

const CategoriesPage = () => {
  //Hàm queryFn phải có return
  const getCategories = async () => {
    return fetch("https://api.escuelajs.co/api/v1/categories").then(
      (response) => response.json()
    );
  };

  const query = useQuery<ICategories[], Error>({
    queryKey: ["categories"], //dăt một key bộ nhớ cache
    queryFn: getCategories, //hàm fetch data
  });

  //Them mới
  // Mutations
  // Access the client
  const queryClient = useQueryClient();

  const createCategory = async () =>
    fetch("https://api.escuelajs.co/api/v1/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //code cứng cho ví dụ
      body: JSON.stringify({
        name: "Softech",
        image: "https://placeimg.com/640/480/any",
      }),
    }).then((response) => response.json());

  const mutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      console.log("Thêm mơi thành công !");
      // Làm mới danh sách danh mục lại
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  return (
    <div>
      <h2 className="font-bold">Create a new Category</h2>

      <button
        onClick={() => {
          //Gọi action để thực hiện hàm mutationFn = createCategory
          mutation.mutate();
        }}
        className="btn btn_primary"
      >
        Thêm mới
      </button>

      <h2 className="font-bold">Categories List</h2>
      <ul>
        {query.data &&
          query.data.map((category) => {
            return <li key={category.id}>{category.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default CategoriesPage;
