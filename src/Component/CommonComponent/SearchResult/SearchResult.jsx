import React from 'react'

const SearchResult = ({className, SearchProps}) => {

  console.log(SearchProps);
  
  return (
    <>
    <div className={className}>
        {SearchProps?.map((product) => (       
            <div className='lg:max-w-[600px] max-md:max-w-[700px]  cursor-pointer border-b-2 py-4 bg-zinc-200' key={product.id}>
              <div className='flex gap-x-2'>
                  <img src={product.thumbnail} alt="" className='w-8 h-8' />
                  <span>{product.title}</span>
              </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default SearchResult