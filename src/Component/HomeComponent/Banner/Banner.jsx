import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import banner01 from "../../../assets/Banner/banner01.png";
import banner02 from "../../../assets/Banner/banner02.png";
import banner03 from "../../../assets/Banner/banner03.png";

const Banner = () => {
  const BImage = [
    {
      id: 1,
      img: banner01,
    },
    {
      id: 2,
      img: banner02,
    },
    {
      id: 3,
      img: banner03,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    appendDots: (dots) => (
      <div
        style={{
          color: "#FB2E86",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          padding: "10px",
          top: "90%",
          left: "50%",
          transform: "translateY(-50%)",
          flexWrap: "wrap",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", gap: "10px" }}>
          {" "}
          {dots}{" "}
        </ul>
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
            borderRadius: "50%",
            cursor: "pointer",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          {i + 1}
        </div>
      );
    },
  };

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 778,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ];

  return (
    <div className="mt-4 lg:px-0 px-4 rounded-xl">
      <div className="container mx-auto">
        <Slider {...settings} className=" rounded-xl">
          {BImage?.map((items, id) => (
            <Link to={"/shop"} key={id}>
              <div className=" rounded-xl xl:h-[460px] lg:h-[250px] max-sm:h-[150px]">
                <img
                  src={items.img}
                  alt={items.img}
                  className=" rounded-xl w-full h-full aspect-auto"
                />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
