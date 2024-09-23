import Slider from '@mui/material/Slider';
import React from 'react';


const ShopByPriceFilter = () => {

  function valuetext(value) {
    return `${value}°C`;
  }
  



  return (
    <>
        {/*-------------- Price Filter section -------------- */}
        <div className='mt-11'>
        <p className='font-Josefin__Sans text-xl underline text-secondary_text_color'>
            Price Filter
        </p>

        <div className='mt-[11px]'>
          
            <Slider
              sx={{
                width: 200,
                color: 'success',
              }}
              getAriaLabel={() => 'Minimum distance'}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />


        </div>
    </div>
    {/*-------------- Price Filter section -------------- */}
    </>
  )
}

export default ShopByPriceFilter