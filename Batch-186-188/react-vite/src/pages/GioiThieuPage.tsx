import { useEffect, useState } from "react";
import "./GioiThieu.css";
import { BsDatabaseCheck } from "react-icons/bs";

type TCategories = {
  id: number;
  name: string;
};

const GioiThieuPage = () => {
  const [categories, setCategories] = useState<TCategories[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    //goi api o day
    const url = "https://api.escuelajs.co/api/v1/categories";
    const options = {};
    // cú pháp dùng một Promise
    // fetch(url, options)
    //   .then((res) => res.json()) //convert
    //   .then((data) => {
    //     console.log(data); //array
    //     setCategories(data);
    //   })
    //   .catch((err) => console.log(err));

    const fetchCategories = async () => {
      const response = await fetch(url, options); //Method GET
      const data = await response.json();
      console.log("<<=== 🚀 data ===>>", data);
      setCategories(data);
    };

    fetchCategories();
  }, []);
  console.log("<<=== 🚀 categories ===>>", categories);
  return (
    <div className="container mx-auto">
      <h1>GioiThieuPage</h1>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log("<<=== 🚀 formData ===>>", formData); //obj
          //gopi API tao moi
          // const url = "https://api.escuelajs.co/api/v1/categories";
          // const options = {
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   method: "POST", //PUT, DELETE
          //   body: JSON.stringify(formData), //convert obj thanh json
          // };
          // const response = await fetch(url, options);
          // const result = await response.json();
          // console.log("<<=== 🚀 result ===>>", result);

          //gopi API update

          const url = "https://api.escuelajs.co/api/v1/categories/2";
          const options = {
            headers: {
              "Content-Type": "application/json",
            },
            method: "PUT", //PUT, DELETE
            body: JSON.stringify(formData), //convert obj thanh json
          };
          const response = await fetch(url, options);
          const result = await response.json();
          console.log("<<=== 🚀 result ===>>", result);
        }}
      >
        <input
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          type="text"
          name="name"
        />
        <input
          onChange={(e) => {
            setFormData({ ...formData, image: e.target.value });
          }}
          type="text"
          name="image"
        />
        <button type="submit" className="btn btn-primary">
          Create new Category
        </button>
      </form>

      <button
        onClick={async () => {
          try {
            const url = "https://api.escuelajs.co/api/v1/products/23";
            const options = {
              method: "DELETE",
            };
            const response = await fetch(url, options);
            const result = await response.json();
            console.log("<<=== 🚀 result ===>>", result);
          } catch (error) {
            console.log("<<=== 🚀  ===>>", error);
          }
        }}
        type="button"
        className="btn btn-primary"
      >
        Xóa SP
      </button>

      <ul>
        {categories.length > 0 &&
          categories.map((c) => {
            return <li key={c.id}>{c.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default GioiThieuPage;
