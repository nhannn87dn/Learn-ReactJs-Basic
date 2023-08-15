import { create } from 'zustand';
import { products } from '../../data/products';

interface Product {
    id: number;
    name: string;
    price: number;
    promoPrice: number;
    thumb: string
}

interface TypeState {
    productsList: Product[];
    actionFilter: () => void;
}

//Export ra de dung chung
//set là set trạng thái state
//get đi lấy trạng thái state hiện tại
const useProducts = create<TypeState>((set,get) => ({
    productsList: products,
    actionFilter: () => set({productsList: get().productsList.filter(p => p.promoPrice > 0)}),
}));

export default useProducts;