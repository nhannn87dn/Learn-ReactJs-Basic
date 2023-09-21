import Home from '../pages/Home';
import Product from '../pages/Product';
import Category from '../pages/Category';
import Customers from '../pages/Customers';
import CustomerProfile from '../pages/Customers/CustomerProfile';
import CustomerOrders from '../pages/Customers/CustomerOrders';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import EmptyLayout from '../components/Layouts/EmptyLayout';
import OnlyHeaderLayout from '../components/Layouts/OnlyHeaderLayout';

interface BaseProps {
    id: number;
    path: string;
    element: () => JSX.Element;
}
interface Routes extends  BaseProps {
    layout?: () => JSX.Element;
    nested?: BaseProps[]
}

//Public routes

const publicRoutes: Routes[] = [
    {id: 1, path: '/', element: Home},
    {id: 2, path: '/product', element: Product},
    {id: 3, path: '/product/:id', element: ProductDetails},
    {id: 4, path: '/category', element: Category},
    {id: 5, path: '/login', element: Login, layout: EmptyLayout},
    {id: 6, path: '/customers', element: Customers, layout: OnlyHeaderLayout, nested: [
        {id: 1, path: '/customers/profile', element: CustomerProfile},
        {id: 2, path: '/customers/orders', element: CustomerOrders}
    ]},
]

//Private routes
const privateRoutes: Routes[] = [];

export {
    publicRoutes,
    privateRoutes
}
