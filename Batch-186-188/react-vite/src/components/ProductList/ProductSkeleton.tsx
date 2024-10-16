import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="product_list grid grid-cols-4 gap-[20px]">
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
      <div className="product_item">
        <Skeleton className="product_thumb w-full h-[305px]" />
        <Skeleton className="product_name w-full" />
        <Skeleton className="product_price" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
