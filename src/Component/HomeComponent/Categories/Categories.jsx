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
  ]



  return (
    <>
    <div className='mt-[45px]'>
        <div className="container mx-auto">
            <h1 className='font-bold text-[38px] font-DM_Sans text-main_text_color pb-14'>
              Categories
            </h1>

            <div className='flex flex-wrap items-center gap-2'>
              {images?.map((items, id) => (
              <div className=" border px-2 py-2 object-cover" key={items.id}>
                <img 
                  src={items.img} 
                  alt={items.ing}
                  className='w-[140px] h-[140px]'
                />
              </div>
              ))}

            </div>
        </div>
    </div>
    </>
  )
}

export default Categories