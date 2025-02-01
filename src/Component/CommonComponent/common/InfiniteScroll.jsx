import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchDataProduct } from '../../../Redux/AllSliceFunction/ProductsSlice/ProductsSlice';
import LoadingPage from '../LoadingPage';
import Products from '../Products';
import NotFoundPage from '../NotFoundPage';

const Skeleton = Array.from({ length: 19 });

const productsPerPage = 10;

const InfiniteScroll = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [HasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
                    page * productsPerPage
                }`
            );
            const data = await response.json();

            if (data.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prevProducts) => [
                    ...prevProducts,
                    ...data.products,
                ]);
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

        // cleanup
        return () => {
            if (observer) observer.disconnect();
        };
    }, [HasMore, page]);

  return (
    <div>
      <div className="lg:hidden block">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
             products?.map((productItems, id) => (
                <div key={id}>
                  <Products
                    image={productItems.thumbnail}
                    title={productItems.description}
                    price={`$${Math.round(productItems.price)}`}
                    discountPrice={Math.round(
                      productItems.price - Math.floor((productItems.price * productItems.discountPercentage) / 100)
                    )}
                    ratingStar={productItems.rating}
                    productId={productItems.id}
                  />
                </div>
              ))}
        </div>
      </div>
      {HasMore && <div ref={loaderRef} className="text-red-600">Loading more products...</div>}
    </div>
  );
};

export default InfiniteScroll;
