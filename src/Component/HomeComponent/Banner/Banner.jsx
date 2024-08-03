import React, { useState } from 'react'
import BannerImg from '../../../assets/BannerImg.png'
import BannerImg2 from '../../../assets/BannerImg2.png'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';


const Banner = ({SlideshowMenu}) => {

  const BImage =[
    {
      id: 1,
      img: BannerImg
    },
    {
      id: 2,
      img: BannerImg
    },
    {
      id: 3,
      img: BannerImg
    },
    {
      id: 4,
      img: BannerImg
    },
  ]


  
  const [currentSlide , setCurrentSlide] = useState(1)

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          padding: "10px",
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

    beforeChange: (currentSlideNumber , nextCurrentSlideNumber) => {
      setCurrentSlide(nextCurrentSlideNumber + 1);
    },


    customPaging: (i) => (
      <>
        {i <= 3 && ( 
          <div
            style={                
               i + 3               
               ?{
                  width: "36px",
                  padding: "20px 0",
                  borderRight: "4px solid #fff",
                }
                :
                {                    
                  width: "36px",
                  padding: "20px 0",
                  borderRight: "4px solid #fff",
                }
                
            }
           >
           { i + 1 === 4 ? `${i + 1}...` : `0${i + 1}` } 
         </div>
        ) }
    
      </>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };



  return (
    <>
    <div className=''>

      <Slider {...settings} className=''>
        {BImage?.map((items, id) => (
            <Link to={'/shop'}  key={id}>
              <div className='object-cover max-h-[580px] bg-center' >
                  <img 
                    src={items.img}
                    alt={items.img}
                    className='object-cover '
                  />
              </div>
            </Link>
        ))}

      </Slider>
    </div>
    </>
  )
}

export default Banner