import {useState } from 'react'
import './App.css'
import UsersList from './components/UsersList'
import AddNewPost from './components/AddNewPost'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import ProductsListAPI from './components/ProductsListAPI'
import ProductFilter from './components/ProductsListAPI/ProductFilter'
import AddProduct from './components/ProductsListAPI/AddProduct'
import GetProfile from './components/GetProfile'

// Create a client
const queryClient = new QueryClient()

function App() {
  const [show, setShow] = useState(false)


  return (
    <>
    <GetProfile />
     {/* // Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <ProductsListAPI />
      <ProductFilter />
      <AddProduct />
    </QueryClientProvider>

    <button onClick={()=>{
      setShow(!show)
    }}>Toggle Users</button>
    {show && <UsersList /> }
      <hr />
      <AddNewPost />
    </>
  )
}

export default App
