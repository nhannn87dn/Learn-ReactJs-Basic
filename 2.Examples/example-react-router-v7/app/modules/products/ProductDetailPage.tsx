import { Button } from "@/components/ui/button";
import type { Route } from "./+types/ProductDetailPage";
import { getProductById } from "./product.service";

/**
 * Server side Fetching
 * thực hiện trước khi render component
 * params: {
 *      id: string
 * }
 * request: Request
 * return: IProduct
 */
export async function loader({ params }: Route.LoaderArgs) {
    const product = await getProductById(Number(params.id));
    if (!product) {
        throw new Response("Product not found", { status: 404 });
    }
    return product;
}

/**
 * {
 *  params: {
 *      id: string
 *  }
 *  data: IProduct
 * }
 * 
 */
export function meta({data}: Route.MetaArgs) {
    return [
        { title: data?.data.product_name || "Product Detail Page" },
        { name: "description", content: data?.data.description || "Product Detail Page" },
    ];
}

/**
 * loaderData: IProduct --> dữ liệu trả về từ loader
 */
export default function ProductDetailPage({loaderData}: Route.ComponentProps) {
    const product = loaderData;
    return (
        <main className="container mx-auto my-5">
            <div className="grid grid-cols-2 gap-4">
                <div className="thumbnail">
                    <img src={product.data.thumbnail} alt={product.data.product_name} className="w-full h-auto max-h-[200px] object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{product.data.product_name}</h2>
                    <p className="text-sm text-gray-500">{product.data.description}</p>
                    <p className="text-sm text-gray-500">{product.data.price}</p>
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </main>
    );
}