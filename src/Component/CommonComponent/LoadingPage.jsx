import React from 'react'

const LoadingPage = () => {
  return (
    <>
    <div>
        <div className="container mx-auto">
          
          <div className='flex items-center justify-between flex-wrap gap-y-6'>
            {[...Array.from({length: 180})].map((_,index) => (
                <div className={` w-[30%] rounded-md p-4 shadow`} key={index}>
                  <div>
                    <div className=" h-[300px] w-full animate-pulse rounded-lg bg-gray-300">
                      <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-end gap-y-5">
                      </div>
                    </div>
                  </div>
                    <div className="  h-3 w-full  rounded-md bg-gray-200 py-3 mt-5"></div>
                    <div className="  h-3 w-full  rounded-md bg-gray-200 py-3 mt-5"></div>
                </div>

              ))}
          </div>


        </div>
    </div>
    </>
  )
}

export default LoadingPage