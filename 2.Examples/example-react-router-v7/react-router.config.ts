import { getProducts } from "./app/modules/products/product.service";
import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  //prerender
  prerender: async ()=> {
    const preRenderRoutes = ["/"];
    let response = await getProducts({limit: 10, page: 1})
    const productDetailRoutes = response.data.data.map(product => `/products/${product.id}`)
    return [...preRenderRoutes, ...productDetailRoutes]
  }
} satisfies Config;
