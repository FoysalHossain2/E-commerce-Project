import Footer from '../Footer/Footer'
import Header from '../../HomeComponent/Header/Header'
import { Outlet } from 'react-router-dom'
import BottomNavbar from '../common/BottomNavbar'
import ProductDetailsNavbar from '../ProductDetailsNavbar';

const hideNavbarRoutes = ['/productDetails'];
const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)
console.log(shouldHideNavbar);


const RootLayouts = () => {
  return (
    <>
     <Header />
      <Outlet />
       <div className="lg:hidden sm:block md:block">
        {shouldHideNavbar ? <ProductDetailsNavbar/> :
          <BottomNavbar />
        }
        </div>
     <Footer />
    </>
  )
}

export default RootLayouts