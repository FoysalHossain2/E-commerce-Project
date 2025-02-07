import Footer from '../Footer/Footer'
import Header from '../../HomeComponent/Header/Header'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import BottomNavbar from '../common/BottomNavbar'
import ProductDetailsNavbar from '../ProductDetailsNavbar';

const RootLayouts = () => {
  const location = useLocation();
  const { productId } = useParams(); // useParams 

  return (
    <>
      {!productId  ? <Header /> : <Header />}
      <Outlet />
      <div className="lg:hidden sm:block md:block">
        {productId ? 
          <ProductDetailsNavbar />
          : 
          <BottomNavbar />
        }
      </div>
      <Footer />
    </>
  )
}

export default RootLayouts;
