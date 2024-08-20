import React from 'react'
import Ad_1 from '../../../assets/Ad_1.png';
import Ad_2 from '../../../assets/Ad_2.png';
import Ad_3 from '../../../assets/Ad_3.png';
import Overlay from '../../CommonComponent/Overlay';

const Add = () => {
  return (
    <>
    <div className='py-3 px-2 md:px-0 pt-[84px]'>
        <div className="container mx-auto">
            <div className={'sm:gap-x-5 md:gap-x-6 lg:gap-x-10 flex flex-row gap-y-4'}>
              <div className='md:w-1/2 w-full relative border'>
                <div className=' w-full h-full'>
                  <img src={Ad_1} alt=""  className=' w-full h-full'  />
                </div>

                <Overlay 
                  className={'md:bottom-[72px] bottom-[30px] left-16'} 
                  title={'Phone sale'}
                  discountDetailsFirst={'up to'}
                  discountAmount={'30%'}
                  discountDetailsLast={'sale for all phones!'}
                  btnTitle={'Shop Now'}
                />
               
              </div>

              <div className='md:w-1/2 w-full flex flex-col gap-10'>
                 <div className='w-full relative border'>
                   <picture>
                      <img src={Ad_2} alt="" />
                   </picture>
                    <Overlay 
                      className={'top-1/2 -translate-y-1/2 left-10'} 
                      title={'Electronics Sale'}
                      discountDetailsFirst={'up to'}
                      discountAmount={'70%'}
                      discountDetailsLast={'sale for all electronics!'}
                      btnTitle={'Shop Now'}
                    />
                 </div>
                 <div className='w-full relative border'>
                    <picture className='max-h-[200px]'>
                       <img src={Ad_3} alt="" />
                    </picture>
                      <Overlay 
                        className={'top-1/2 -translate-y-1/2 left-10'} 
                        title={'Furniture Offer'}
                        discountDetailsFirst={'up to'}
                        discountAmount={'50%'}
                        discountDetailsLast={'sale for all furniture items!'}
                        btnTitle={'Shop Now'}
                      />
                 </div>
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Add