import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFoundPage from './Component/CommonComponent/NotFoundPage'
import RootLayouts from './Component/CommonComponent/RootLayouts/RootLayouts'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Shop from './Pages/Shop/Shop'
import WishList from './Pages/WishList/WishList'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/'  element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/*' element={<NotFoundPage />} />
      <Route path='/productDetails/:productId' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/wishList' element={<WishList />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contact' element={<Contact />} />
      </Route>
    </Route>
  )
)


function App() {

  return (
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  )
}

export default App;