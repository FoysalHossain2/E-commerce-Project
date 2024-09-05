import React from 'react'
import Accesories from '../../../assets/Categories/Accesories.png'
import phoneStand from '../../../assets/Categories/phoneStand.png'
import shoes from '../../../assets/Categories/shoes.png'
import Jaket from '../../../assets/Categories/Jaket.png'
import pants from '../../../assets/Categories/pants.png'
import shirt from '../../../assets/Categories/shirt.png'
import monitor from '../../../assets/Categories/monitor.png'
import Ring from '../../../assets/Categories/Ring.png'


const Categories = () => {


  const images = [
    {
      id: '1',
      img: monitor,
    },
    {
      id: '2',
      img: pants,
    },
    {
      id: '3',
      img: phoneStand,
    },
    {
      id: '4',
      img: shoes,
    },
    {
      id: '5',
      img: Jaket,
    },
    {
      id: '6',
      img: Ring,
    },
    {
      id: '7',
      img: shirt,
    },
    {
      id: '1',
      img: monitor,
    },
    {
      id: '2',
      img: pants,
    },
    {
      id: '3',
      img: phoneStand,
    },
    {
      id: '4',
      img: shoes,
    },
    {
      id: '5',
      img: Jaket,
    },
    {
      id: '6',
      img: Ring,
    },
    {
      id: '7',
      img: shirt,
    },
    {
      id: '6',
      img: Ring,
    },
    {
      id: '7',
      img: shirt,
    },
  ]



  return (
    <>
    <div className='mt-[45px] '>
        <div className="container mx-auto">
            <h1 className='font-bold text-[38px] font-DM_Sans text-main_text_color pb-14'>
              Categories
            </h1>

        <div className="pb-16">
            <div className="flex justify-between items-center">
                {/* <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full"> */}
                    <div className="flex flex-col justify-between items-center space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4  w-full">

                            <div className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-button_Color font-DM_Sans">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>

                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="shoe-image" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-button_Color font-DM_Sans">Shoes</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </div>
                                <div className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" alt="watch-image" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-button_Color font-DM_Sans">Watches</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </div>
                            </div>

                            <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                                <img className="object-center object-cover h-full w-full" src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="girl-image" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-button_Color font-DM_Sans">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>

                            <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                                <img className="object-center object-cover h-full w-full md:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-white py-3 w-36 bg-button_Color font-DM_Sans">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </div>
                            
                        </div>
                        
                        <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                            <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                            <img className="object-center object-cover h-full w-full sm:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>


        </div>
    </div>
    </>
  )
}

export default Categories