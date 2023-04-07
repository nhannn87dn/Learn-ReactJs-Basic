import React from "react";

function Item({ content, done = false }: { content: string; done?: boolean }) {
  //const isDone = done === true ? 'Xong' : '';

  return (
    <li>
      {content} {done && "XOng"}
    </li>
  );
}

function ProductItem({
  price = 0,
  salePrice = 0,
}: {
  price: number;
  salePrice?: number;
}) {

    let discount = Math.ceil(100 - (100*salePrice)/price);

  return (
    <li>
      {salePrice > 0 ? (
        <div>
            <p>{discount}</p>
          <strong>{salePrice}</strong> <del>{price}</del>
        </div>
      ) : (
        <strong>{price}</strong>
      )}
    </li>
  );
}

const ConditionalRendering = () => {
  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        <Item content="Quét nhà" done={true} />
        <Item content="Lau nhà" done={true} />
        <Item content="Giặt quần áo" />
      </ul>
      <ul>
        <ProductItem price={1290000} salePrice={790000} />
        <ProductItem price={520000} />
        <ProductItem price={840000} />
        <ProductItem price={1450000} salePrice={820000} />
      </ul>
    </div>
  );
};

export default ConditionalRendering;
