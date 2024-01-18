import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import AddProductForm from "./AddProducForm";

/*
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/

interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const SingleProduct = ({
  product,
  onClick,
}: {
  product: IProduct;
  onClick: () => void;
}) => {
  return (
    <div className="item w-[200px]">
      <img
        width={200}
        height={200}
        src={product.images[0]}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <strong>{product.price}</strong>
      <button onClick={onClick} className="btn bg-red-600 text-white">
        Delete
      </button>
    </div>
  );
};

const ProductListAPI = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    const url = "https://api.escuelajs.co/api/v1/products";
    const options = {
      method: "GET",
    };
    /*
            Khi option rỗng thì GET là mặc định
        */
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  console.log("<<=== 🚀 products ===>>", products);

  const handleDeleteProduct = async (productId: number) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/products/${productId}`;
      const options = {
        method: "DELETE", //DELETE, PUT, PATCH
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      const response = await fetch(url, options);
      const result = await response.json();
      if (result) {
        console.log(`Xóa sản phẩm có ID ${productId} thành công !`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className="my-10">
        <AddProductForm />
        <hr />
        <h2>Product List</h2>
        {isLoading && <div>Loading.......</div>}
        <div className="flex gap-3 flex-wrap">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <SingleProduct
                  onClick={() => handleDeleteProduct(product.id)}
                  key={product.id}
                  product={product}
                />
              );
            })}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductListAPI;
