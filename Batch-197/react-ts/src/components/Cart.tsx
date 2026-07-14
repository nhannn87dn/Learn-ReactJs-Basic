import { useShoppingCartStore } from "../stores/useShoppingCart"
import { ShoppingCart } from "lucide-react"

const Cart = () => {
  const { products } = useShoppingCartStore()
  return (
    <div className="flex gap-x-2">
      <ShoppingCart /> {products.length}
    </div>
  )
}

export default Cart