import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayouts from './Component/CommonComponent/RootLayouts/RootLayouts'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Contact from './Pages/Contact/Contact'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import NotFoundPage from './Component/CommonComponent/NotFoundPage'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'


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