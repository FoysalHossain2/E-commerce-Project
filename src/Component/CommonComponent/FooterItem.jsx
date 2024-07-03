import React from 'react'

const FooterItem = ({allItems=['One', 'Two', 'Three', 'Four', 'Five'], title}) => {
  return (
    <>
    <div>
        <div className="container mx-auto">
            <h2 className='font-DM_Sans font-bold pb-4 text-lg'>
                {title}
            </h2>

            <ul>
                {allItems?.map((item, index) => (
                  
                <li key={index} className='font-DM_Sans font-normal text-white pb-2 cursor-pointer hover:underline'>
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