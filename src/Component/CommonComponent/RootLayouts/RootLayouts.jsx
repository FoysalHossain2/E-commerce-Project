import Footer from '../Footer/Footer'
import Header from '../../HomeComponent/Header/Header'
import { Outlet } from 'react-router-dom'


const RootLayouts = () => {
  return (
    <>
     <Header />
      <Outlet />
     <Footer />
    </>
  )
}

export default RootLayouts