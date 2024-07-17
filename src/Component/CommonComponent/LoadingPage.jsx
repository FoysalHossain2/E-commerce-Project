import React from 'react'

const LoadingPage = () => {
  return (
    <>
    <div>
        <div className="container mx-auto">
          
          <div className='flex items-center flex-wrap '>
            {[...Array.from({length: 180})].map((_,index) => (
                <div className={` w-[33%] rounded-md border border-blue-100 p-4 shadow`} key={index}>
                  <div>
                    <div className=" h-[355px] w-full animate-pulse rounded-lg bg-gray-200">
                      <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-end gap-y-5">
                        <div className=" h-[200px] w-[80%]  rounded-md bg-gray-500 py-3"></div>
                        <div className="  h-3 w-[80%]  rounded-md bg-gray-400 py-3 pt-4"></div>
                        <div className="  h-3 w-[80%]  rounded-md bg-gray-300 py-3"></div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
          </div>


        </div>
    </div>
    </>
  )
}

export default LoadingPage