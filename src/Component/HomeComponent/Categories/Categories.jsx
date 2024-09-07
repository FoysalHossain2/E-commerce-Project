import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { FetchDataProduct } from '../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice'
import Slider from "react-slick";




// Next Arrow function
function SampleNextArrow(props) {

  const {  className,style, onClick } = props;
  return (
    <div
    className={className}
    style={{
      ...style,
      display: "block", 
      background: "gray", 
      padding: "13px",
      borderRadius: "50%",
      cursor: "pointer",
      position: "absolute" ,
      right: "0px",
      top: "50%",
      transform: "translateY(-50%)",
    }}
    onClick={onClick}
    >
           <div className='flex justify-center items-center  text-white text-2xl'>
              <MdChevronRight/>
           </div>
          </div>
          );
        }
        
        
        // Previous arrow function
        function SamplePrevArrow(props) {
          const { className, style, onClick } = props;
          return (
            <div
            className={className}
            style={{ 
              ...style,
              display: "block", 
              background: "gray", 
              padding: "13px",
              borderRadius: "50%",
              cursor: "pointer",
              position: "absolute",
              left: "-20px",
              zIndex: "1",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={onClick}
            >
              <div className='flex justify-center items-center text-white text-2xl'>
                <MdChevronLeft />
              </div>
              
           </div>
          );
        }


        // slider Implementation
        var settings = {
          dots: false,
          className: "center",
          centerPadding: "60px",
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          }
        }
      ]
    };
    






const Categories = () => {
  





  const dispatch = useDispatch();
  const [AllProducts, setAllProducts] = useState([]);

  
  useEffect(() => {
    dispatch(FetchDataProduct('https://dummyjson.com/products?limit=1000'))
  }, [])
  

    const {data, status} = useSelector((state) => (state.product))
    


    useEffect(() => {
      if(status === 'IDLE') {
        setAllProducts(data.products)
      }
    }, [data, status, setAllProducts])






  return (
    <>
    <div className='mt-[45px] '>
        <div className="container mx-auto">
            <h1 className='font-bold text-[38px] font-DM_Sans text-main_text_color pb-14'>
              Categories
            </h1>

              <div className="pb-16 ">
                {/* <div className='grid grid-cols-5 max-sm:grid-cols-2 gap-x-3'> */}
              <div >
            <Slider {...settings} className=' bg-white'>
                  {AllProducts?.slice(160,165).map((product,id) => (
                      <img src={product.thumbnail} alt="" className='border' />
                    ))}
            </Slider>
            <Slider {...settings} className='pt-5 '>
                  {AllProducts?.slice(95,100).map((product,id) => (
                      <img src={product.thumbnail} alt="" className='border  bg-white' />
                    ))}
            </Slider>
                    </div>
                {/* </div> */}
            </div>



        </div>
    </div>
    </>
  )
}

export default Categories