import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayouts from './Component/CommonComponent/RootLayouts/RootLayouts'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Contact from './Pages/Contact/Contact'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/'  element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Contact' element={<Contact />} />
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