import React, { useState } from 'react'

const CheckoutComponent = () => {

    const [UserInfo, setUserInfo] = useState({
        Name:"",
        Email:"",
        PhoneNumber:"",
        City:"",
        Division:"",
        District:"",
        Address:"",
        Message:"",
    })

    const [UserInfoError, setUserInfoError] = useState({
        NameError:"",
        PhoneNumberError:"",
        CityError:"",
        DivisionError:"",
        DistrictError:"",
        AddressError:"",
        MessageError:"",
    })

    // HandleOnChange input change functionality
    const HandleOnChange = (e) => {
        if (e.target.checked) {
            console.log(e.target.checked);
            setUserInfo({
              ...UserInfo,
              [e.target.id]: true,
            });
          } else {
            setUserInfo({
              ...UserInfo,
              [e.target.id]: e.target.value,
            });
          }
    }

    

    // HandleOderButton functionality
    const HandleOderButton = () => {

        const {Name, PhoneNumber, District, Division, Address} = UserInfo

        if (!Name) {
            setUserInfoError({
                ...UserInfoError,
                NameError: 'Please Input Your Name'
            })
        } else if (!PhoneNumber) {
            setUserInfoError({
                ...UserInfoError,
                PhoneError: 'Please Input Your PhoneNumber'
            })
        }
    }
    




  return (
    <>
    
    <div className='pt-14 pb-20 '>
      <div className='container mx-auto'>

        <h1 className='pb-11'>Shipping address</h1>

        <div className='flex justify-between'>
            <div className='w-[770px] bg-[#F8F8FD] py-3 px-5'>

            <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                <label >Name</label>
                <input 
                    type="text" 
                    name='Name' 
                    id='Name' 
                    placeholder='Name' 
                    className={`border-2 border-slate-200 w-[336px] py-3 rounded-xl  ${UserInfoError.NameError ? 'border-2 border-red-400' : 'border-2 border-slate-200'}`}
                    value={UserInfo.Name}
                    onChange={HandleOnChange}
                />
                </div>

                <div className='flex flex-col'>
                    <label >Email</label>
                <input 
                    type="email" 
                    name='Email' 
                    id='Email' 
                    placeholder='Email' 
                    className='border-2 w-[336px] rounded-xl py-3' 
                    value={UserInfo.Email}
                    onChange={HandleOnChange}
                />
                </div>
            </div>

            <div className='flex items-center justify-between mt-4'>
                <div className='flex flex-col'>
                    <label>Phone</label>
                    <input 
                    type="PhoneNumber" 
                    name='PhoneNumber' 
                    id='PhoneNumber' 
                    placeholder='PhoneNumber' 
                    className={`border-2 border-slate-200 w-[336px] py-3 rounded-xl  ${UserInfoError.PhoneNumber ? 'border-2 border-red-400' : 'border-2 border-slate-200'}`} 
                    value={UserInfo.PhoneNumber}
                    onChange={HandleOnChange}
                    />
                </div>
                <div className='flex flex-col'>
                    <label>City</label>
                    <input 
                    type="text" 
                    name='City' 
                    id='Address' 
                    placeholder='Select City' 
                    className='border-2 w-[336px] rounded-xl py-3 '
                    value={UserInfo.City}
                    onChange={HandleOnChange}
                    />
                </div>
            </div>

            <div className='flex items-center justify-between mt-4'>
                <div className='flex flex-col'>
                    <label >Division</label>
                    <select 
                        type="text" 
                        name='Division' 
                        id='Division' 
                        placeholder='Select Division'
                        className='border-2 w-[336px] rounded-xl py-3 '
                        value={UserInfo.Division}
                        onChange={HandleOnChange}
                    >
                        <option value="">Dhaka</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label >District</label>
                    <select
                        type="text" 
                        name='District' 
                        id='District' 
                        placeholder='Select District'
                        className='border-2 w-[336px] rounded-xl py-3 '
                        value={UserInfo.District}
                        onChange={HandleOnChange}
                     >
                        <option value="">Manikgonj</option>
                    </select>
                </div>
            </div>

            <div className='mt-4'>
                <input 
                    type="text" 
                    name='Address' 
                    id='Address' 
                    placeholder='Address' 
                    className='border-2 w-full rounded-xl py-3 '
                    value={UserInfo.Address}
                    onChange={HandleOnChange}
                />
            </div>

            {/* --------- Order Note (optional) --------- */}
                <div className='mt-4'>
                    <textarea 
                        name="Message" 
                        id="Message" 
                        cols="30"
                        rows="10"
                        placeholder='Order Note (optional)'
                        className='w-full rounded-xl py-3 border-2'
                        value={UserInfo.Message}
                        onChange={HandleOnChange}
                    >

                    </textarea>
                </div>
            {/* --------- Order Note (optional) --------- */}


            </div>

            <div className=''>
                 {/* ======= Total & sunTotal =========== */}
                <div className='w-[340px] bg-[#E8E6F1] h-[300px] py-3 px-5'>
                    <div className='flex items-center justify-between mt-8'>
                    <p>SubTotal:</p>
                    <p>{33}</p>
                    </div>
                    <div className='border-b-2 border-b-zinc-300 mt-3'></div>
                    <div className='flex items-center justify-between mt-8'>
                    <p>Totals:</p>
                    <p>$44</p>
                    </div>
                    <div className='border-b-2 border-b-zinc-300 mt-3'></div>

                    <div className='mt-8 flex items-center gap-x-2'>
                    <p className='w-3 h-3 bg-[#19D16F] rounded-full '></p>
                    <p className='text-[14px] font-Josefin__Sans'>Shipping & taxes calculated at checkout</p>
                    </div>
                    {/* --- Proceed To Checkout button --- */}
                    <div className='mt-8'>
                        <button className='bg-[#19D16F] py-3 w-full rounded text-white font-Roboto font-bold '  onClick={HandleOderButton}>
                          PLACE ORDER
                        </button>
                    </div>
                    {/* --- Proceed To Checkout button --- */}
                </div>
                {/* ======= Total & sunTotal =========== */}
            </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default CheckoutComponent