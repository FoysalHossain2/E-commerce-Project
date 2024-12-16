import React, { useEffect, useRef, useState } from "react";
import Products from "../../CommonComponent/Products";

const NewArrival = ({ headingTitle }) => {
  const [products, setProducts] = useState([]);
  const [HasMore, setHasMore] = useState(true);
  const [Page, setPage] = useState(0);
  const [LadingClick, setLadingClick] = useState(false);

  const loaderRef = useRef();

  const productParePage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productParePage}&skip=${
          Page * productParePage
        }`
      );
      const data = await response.json();
      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((previous) => [...previous, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && HasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [HasMore, Page]);

  const HandleClick = () => {
    setLadingClick(!LadingClick);
  };

  return (
    <>
      <div className="mt-[100px] mb-[50px]  max-sm:px-3">
        <div className="container mx-auto">
          <h1 className="font-bold text-[38px] font-DM_Sans text-main_text_color pb-14">
            {headingTitle ? headingTitle : headingTitle}
          </h1>

          <div
            className="lg:grid lg:grid-cols-4 gap-y-8 gap-x-6
           
            max-sm:grid max-sm:grid-cols-2
          "
          >
            {products?.map((items, id) => (
              <div className="w-[230px]" key={id}>
                <Products
                  key={id}
                  image={items.thumbnail}
                  title={items.title}
                  price={items.price}
                />
              </div>
            ))}
          </div>
          {HasMore && (
            <button onClick={HandleClick}>
              {HasMore && <h1 ref={loaderRef}>Page Loading...</h1>}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NewArrival;
