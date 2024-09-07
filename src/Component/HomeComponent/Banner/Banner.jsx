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

  

    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            color: '#FB2E86',
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            padding: "10px",
            top: "90%",
            left: "50%",
            transform: "translateY(-50%)",
            flexWrap: 'wrap'
          }}
        >
          <ul style={{ margin: "0px", display: "flex", gap: "10px",  }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => {
        return (
          <div
            style={{
              width: "15px",
              height: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FB2E86",
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: "#000",
              color: "#fff"
            }}
          >
            {i + 1}
          </div>
        );
      }
    };
   




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
  



  return (
    <>
    <div className=''>

      <Slider {...settings} className=''>
        {BImage?.map((items, id) => (
            <Link to={'/shop'}  key={id}>
              <div className='xl:h-[560px] lg:h-[300px] max-sm:h-[200px]' >
                  <img 
                    src={items.img}
                    alt={items.img}
                    className=' w-full h-full aspect-auto'
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