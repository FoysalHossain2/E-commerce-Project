import React from 'react'

const SearchResult = ({className, SearchProps}) => {
  return (
    <>
    <div className={className}>
        {SearchProps?.map((product) => (       
            <div className='lg:max-w-[600px] max-md:max-w-[700px]  cursor-pointer border-b-2 py-4 bg-zinc-200' key={product.id}>
                <span>{product.title}</span>
            </div>
        ))}
    </div>
    </>
  )
}

export default SearchResult