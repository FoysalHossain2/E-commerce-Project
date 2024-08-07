import React from 'react'

const ProductAddToCart = ({EachProductsDetailsItem}) => {
    console.log(EachProductsDetailsItem);
  return (
    <>
    <div className='w-[290px] border rounded-lg'>
        <div className='ml-4 mr-4'>
            <h1>Buy Now</h1>

            <div className='flex items-center font-DM_Sans'>
                <p>$</p>
                <p className='text-[24px]'>
                    {Math.ceil(EachProductsDetailsItem.price - Math.floor((EachProductsDetailsItem.price * EachProductsDetailsItem.discountPercentage / 100)))}
                </p>
            </div>
            <div className='mt-6 font-DM_Sans flex items-center gap-x-3'>
                <p className='text-green-600 font-semibold text-[19px]'>
                   {EachProductsDetailsItem.availabilityStatus}:
                </p>
                <p>{EachProductsDetailsItem.stock}</p>
            </div>

            {/* ============= Quantity Part ============*/}
            <div className='flex border rounded-lg p-1 mt-4 bg-zinc-100'>
                <p>Quantity:</p>
                <select name="" id="" className='bg-transparent'>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                </select>
            </div>
            {/* ============= Quantity Part ============*/}

            {/* ============AddToCart Part ============ */}
                <div className='border rounded-full p-1 mt-3 bg-button_Color  text-white cursor-pointer'>
                    <p className='font-DM_Sans text-center '>  
                        Add to Cart
                    </p>
                </div>
            {/* ============AddToCart Part ============ */}
            <p>ships from Shop.com</p>

            <div className='flex items-'>
                {/* <p>Warranty</p> */}
                <p>{EachProductsDetailsItem.warrantyInformation}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductAddToCart