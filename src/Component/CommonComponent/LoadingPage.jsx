import React from 'react'

const LoadingPage = () => {
  return (
    <>
    <div>
        <div className="container mx-auto">
          
          <div className='lg:flex lg:items-center lg:justify-between lg:flex-wrap gap-y-6 max-sm:grid max-sm:grid-cols-2 gap-x-5 '>
            {[...Array.from({length: 180})].map((_,index) => (
                <div className={`  h-[270px] xl:w-[255px] 
                  lg:w-[230px] 
                  md:w-[350px] max-md:w-[290px]
                  max-sm:w-[164px] max-sm:h-[180px] rounded-md p-4 shadow`}
                 key={index}>
                  <div>
                    <div className=" h-[280px] w-full animate-pulse rounded-lg bg-slate-200">
                      <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-end gap-y-5">
                      </div>
                    </div>
                  </div>
                    <div className="  h-9 w-full  rounded-md bg-gray-300 py-3 mt-5"></div>
                    <div className="  h-9 w-full  rounded-md bg-gray-300 py-3 mt-5"></div>
                </div>

              ))}
          </div>


        </div>
    </div>
    </>
  )
}

export default LoadingPage