type TAccessItem = {
  name: string;
  price: number;
  promoPrice?: number;
};

const AccessItem = ({ name, price, promoPrice = 0 }: TAccessItem) => {
  const discount =
    promoPrice > 0 ? Math.round(((price - promoPrice) / price) * 100) : 0;

  return (
    <div className="item flex-1 relative">
      {discount > 0 ? (
        <span className="absolute z-1 bg-orange-500 text-white py-1 px-2 rounded">
          {discount}
        </span>
      ) : null}
      <div className="photo w-full h-[160px] bg-slate-200"></div>
      <h3>{name}</h3>
      <div className="price">
        <strong>{price}</strong>
        {promoPrice > 0 ? <del>{promoPrice}</del> : null}
      </div>
    </div>
  );
};

const AccessoriesRelate = () => {
  return (
    <div className="accessories_list flex gap-x-3">
      <AccessItem
        price={780}
        promoPrice={520}
        name="Adapter sạc Apple Type C 20W"
      />
      <AccessItem price={840} name="Cáp sạc Lightning 2m" />
      <AccessItem price={1290} name="Cáp chuyển đổi USB-C sang SD" />
    </div>
  );
};

export default AccessoriesRelate;
