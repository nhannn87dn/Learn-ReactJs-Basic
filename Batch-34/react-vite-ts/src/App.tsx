import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import {publicRoutes} from './data/routesList'
import DefaultLayout from './components/Layouts/DefaultLayout';
import NoPage from './pages/NoPage';

const queryClient = new QueryClient();

function App() {

  return (
    <>
     <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
            {
              publicRoutes.map((route)=>{
                const Page = route.element;
                //Layout mặc định
                const Layout = route.layout ? route.layout : DefaultLayout;
                if(route.nested && route.nested.length > 0){
                  return (
                    <Route key={route.id} path={route.path} element={<Layout />}  >
                        <Route index element={<Page />} />
                        {
                          route.nested.map((child)=> {
                            const ChildPage = child.element;
                            return (
                              <Route key={child.id} path={child.path} element={<Page />}  >
                                <Route index element={<ChildPage />} />
                             </Route>
                            )
                          })
                        }
                    </Route>
                  )
                }else{
                  return (
                    <Route key={route.id} path={route.path} element={<Layout />}  >
                        <Route index element={<Page />} />
                    </Route>
                  )
                }
                
              })
            }
            <Route path='*' element={<NoPage />}  />
          {/* <Route path='/' element={<DefaultLayout />}> */}
            {/* <Route index element={<Home />}  />
            <Route path='product' element={<Product />}  />
            <Route path='product/:id' element={<ProductDetails />}  />
            <Route path='category' element={<Category />}  />
            <Route path='login' element={<Login />}  /> */}
            {/* Nested Layout */}
            {/* <Route path='customers' element={<Customers />}>
              <Route path='profile' element={<CustomerProfile />} />
              <Route path='orders' element={<CustomerOrders />} />
            </Route> */}
            {/* Nếu không tồn tại thì rơi vào route dưới */}
            {/* <Route path='*' element={<NoPage />}  /> */}
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
