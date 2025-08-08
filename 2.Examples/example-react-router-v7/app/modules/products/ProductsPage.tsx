import { Link } from "react-router";
import type { Route } from "./+types/ProductsPage";
import { getProducts } from "./product.service";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";

export function meta({}: Route.MetaArgs) {
    return [
        { title: `Products Page` },
        { name: "description", content: "Product Page" },
    ];
}
//Server Data Loading
export async function loader({ request }: Route.LoaderArgs) {
    //get page and limit from query params
    // Lấy query parameters từ URL
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || '1'); // Mặc định page = 1
    const limit = Number(url.searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    const products = await getProducts({ limit, page });
    return products;
}
// SEVER SIDE RENDERING
export default function ProductsPage({ loaderData }: Route.ComponentProps) {
    const {data} = loaderData;
    const totalPages = Math.ceil(data.totalRecords / data.limit);

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl font-bold underline">
                Product Page
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.data.map((product: any) => (
                    <Link to={`/products/${product.id}`} key={product.id} className="border p-4 rounded-md flex flex-col gap-2">
                        <img loading="lazy" src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover" />
                        <h2 className="font-bold">{product.product_name}</h2>
                        <p className="text-sm text-gray-500">{product.price}</p>
                    </Link>
                ))}
            </div>
            {/* pagination with shadcn ui */}   
            <div className="pagination flex justify-center items-center gap-2 my-4">
        
            <Pagination>
                <PaginationContent>
                   {/* pagination follow the products.totalPages */}   
                   {Array.from({length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                        <Link className="border p-2 rounded-md" to={`/products?page=${index + 1}`}>{index + 1}</Link>
                    </PaginationItem>
                   ))}
                   
                </PaginationContent>
                </Pagination>
            </div>

        </main>
    );
}