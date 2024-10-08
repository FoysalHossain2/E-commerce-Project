import React from 'react'

const FooterItem = ({allItems=['One', 'Two', 'Three', 'Four', 'Five'], title}) => {
  return (
    <>
    <div className='max-sm:mt-10'>
        <div className="container mx-auto">
            <h2 className='font-DM_Sans font-bold pb-6 text-[24px] text-button_Color'>
                {title}
            </h2>

            <ul>
                {allItems?.map((item, index) => (
                <li key={index} className=' font-DM_Sans font-normal text-white pb-4 cursor-pointer hover:underline'>
                    {item}
                </li>
                ))}
            </ul>

        </div>
    </div>
    </>
  )
}

export default FooterItem