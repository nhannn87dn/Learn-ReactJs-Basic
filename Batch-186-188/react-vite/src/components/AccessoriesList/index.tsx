import ProductItem from "../ProductItem";

const AccessoriesList = () => {
  return (
    <div className="product_list flex gap-3">
      <ProductItem
        thumb="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/may-loc-khong-khi-xiaomi-mi-air-purifier-gen-4-pro-thumb-G4276-1650507955496.jpg"
        name="Máy Lọc Không Khí Xiaomi Mi Air Purifier Gen 4 Pro"
        price={1725000}
        promoPrice={1150000}
      />
      <ProductItem
        thumb="https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/loi-loc-khong-khi-xiaomi-mi-air-purifier-filter-thumb-G4315-1650508143306.jpg"
        name="Lõi lọc không khí Xiaomi Mi Air Purifier Filter"
        price={5190000}
      />
    </div>
  );
};

export default AccessoriesList;
