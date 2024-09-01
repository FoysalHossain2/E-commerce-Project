import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {CartItem, TotalCartItem, TotalAmount} = useSelector((state) => state.cart)



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
        EmailError: "",
        PhoneNumberError:"",
        CityError:"",
        DivisionError:"",
        DistrictError:"",
        AddressError:"",
    })

    // HandleOnChange input change functionality
    const HandleOnChange = (e) => {
        if (e.target.checked) {
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

        const {
            Name,
            Email,
            PhoneNumber,
            City,
            Division,
            District,
            Address,
        } = UserInfo;


        if (!Name) {
            setUserInfoError({
                ...UserInfoError,
                NameError: "Name is required",
            })
        } else if (!Email) {
            setUserInfoError({
                ...UserInfoError,
                NameError: "",
                EmailError: "Email is required",
            })
        } else if (!PhoneNumber) {
            setUserInfoError({
                ...UserInfoError,
                NameError: "",
                EmailError: "",
                PhoneNumberError: "PhoneNumber is required",
            })
        } else if (!City) {
            setUserInfoError({
                ...UserInfoError,
                NameError: "",
                EmailError: "",
                PhoneNumberError: "",
                CityError: "City is required",
            })
        } else if (!Division) {
            setUserInfoError({
                ...UserInfoError,
                NameError: "",
                EmailError: "",
                PhoneNumberError: "",
                CityError: "",
                DivisionError: "Division is required",
            })
        } else if (!District) {
            setUserInfoError({
                ...UserInfoError,
                NameError: "",
                EmailError: "",
                PhoneNumberError: "",
                CityError: "",
                DivisionError: "",
                DistrictError: "District is required",
            })
        } else if (!Address) {
            setUserInfoError({
                ...UserInfoError,
                NameError: "",
                EmailError: "",
                PhoneNumberError: "",
                CityError: "",
                DivisionError: "",
                DistrictError: "",
                AddressError: "Address is required",
            })
        }
      
    }
    




  return (
    <>
    
    <div className='pt-14 pb-20 '>
      <div className='container mx-auto'>

        <h1 className='pb-11'>Shipping address</h1>

        <div className='flex gap-x-12'>
            <div className='w-[770px] bg-[#F8F8FD] py-4 px-5  rounded-lg'>

            <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                <label >Name</label>
                <input 
                    type="text" 
                    name='Name' 
                    id='Name' 
                    placeholder='Name' 
                    className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${UserInfoError.NameError ? 'border-2 border-red-400 rounded-xl' : 'border-2 border-slate-200 rounded-xl'}`}
                    value={UserInfo.Name}
                    onChange={HandleOnChange}
                />
                  {UserInfoError.NameError && (
                    <p className='text-red-500'>{UserInfoError.NameError}</p>
                  )}      
                </div>

                <div className='flex flex-col'>
                    <label >Email</label>
                <input 
                    type="email" 
                    name='Email' 
                    id='Email' 
                    placeholder='Email' 
                    className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${UserInfoError.EmailError ? 'border-2 border-red-400 rounded-xl' : 'border-2 border-slate-200 rounded-xl'}`} 
                    value={UserInfo.Email}
                    onChange={HandleOnChange}
                />

                {UserInfoError.NameError && (
                    <p className='text-red-500'>{UserInfoError.NameError}</p>
                  )}   

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
                    className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${UserInfoError.PhoneNumberError ? 'border-2 border-red-400 rounded-xl' : 'border-2 border-slate-200 rounded-xl'}`}
                    value={UserInfo.PhoneNumber}
                    onChange={HandleOnChange}
                    />

                    {UserInfoError.NameError && (
                    <p className='text-red-500'>{UserInfoError.NameError}</p>
                  )}      

                </div>
                <div className='flex flex-col'>
                    <label>City</label>
                    <input 
                    type="text" 
                    name='City' 
                    id='City' 
                    placeholder='Select City' 
                    className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${UserInfoError.CityError ? 'border-2 border-red-400 rounded-xl' : 'border-2 border-slate-200 rounded-xl'}`}
                    value={UserInfo.City}
                    onChange={HandleOnChange}
                    />

                    {UserInfoError.NameError && (
                    <p className='text-red-500'>{UserInfoError.NameError}</p>
                  )}      

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
                        className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${UserInfoError.DivisionError ? 'border-2 border-red-400 rounded-xl' : 'border-2 border-slate-200 rounded-xl'}`}
                        value={UserInfo.Division}
                        onChange={HandleOnChange}
                    >
                        <option value="Dhaka">Dhaka</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Dhaka">Dhaka</option>
                    </select>

                    {UserInfoError.NameError && (
                    <p className='text-red-500'>{UserInfoError.NameError}</p>
                  )}      

                </div>
                <div className='flex flex-col'>
                    <label >District</label>
                    <select
                        type="text" 
                        name='District' 
                        id='District' 
                        placeholder='Select District'
                        className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${UserInfoError.DistrictError ? 'border-2 border-red-400 rounded-xl' : 'border-2 border-slate-200 rounded-xl'}`}
                        value={UserInfo.District}
                        onChange={HandleOnChange}
                     >
                        <option value="Manikgonj">Manikgonj</option>
                        <option value="Manikgonj">Manikgonj</option>
                        <option value="Manikgonj">Manikgonj</option>
                        <option value="Manikgonj">Manikgonj</option>
                        <option value="Manikgonj">Manikgonj</option>
                    </select>

                    {UserInfoError.NameError && (
                    <p className='text-red-500'>{UserInfoError.NameError}</p>
                  )}      

                </div>
            </div>

            <div className='mt-4'>
                <input 
                    type="text" 
                    name='Address' 
                    id='Address' 
                    placeholder='Address' 
                    className={`pl-2 border-2 border-slate-200 w-[336px] py-3 rounded-xl${UserInfoError.AddressError ? 'border-2 border-red-400 rounded-xl' : 'border-2 border-slate-200 rounded-xl'}`}
                    value={UserInfo.Address}
                    onChange={HandleOnChange}
                />

                {UserInfoError.NameError && (
                    <p className='text-red-500'>{UserInfoError.NameError}</p>
                  )}      

            </div>

            {/* --------- Order Note (optional) --------- */}
                <div className='mt-4'>
                    <textarea 
                        name="Message" 
                        id="Message" 
                        cols="30"
                        rows="10"
                        placeholder='Order Note (optional)'
                        className='pl-2 w-full rounded-xl py-3 border-2'
                        value={UserInfo.Message}
                        onChange={HandleOnChange}
                    >

                    </textarea>
                </div>
            {/* --------- Order Note (optional) --------- */}


            </div>

            <div className=''>
                 {/* ======= Total & sunTotal =========== */}
                <div className='w-[340px] bg-[#E8E6F1] h-[400px] py-3 px-5'>
                    <div className='flex items-center justify-between mt-8'>
                    <p className='font-Roboto'>Delivery Outside Dhaka:</p>
                    <p className='text-[18px] font-Roboto'><span className='text-[17px] '>৳</span> 109.00</p>
                    </div>
                    <div className='flex items-center justify-between mt-8'>
                    <p className='font-Roboto'>Delivery Inside Dhaka:</p>
                    <p className='text-[18px] font-Roboto'><span className='text-[17px] '>৳</span> 59.00</p>
                    </div>
                    <div className='border-b-2 border-b-zinc-300 mt-3'></div>

                    {CartItem?.map((item, id) => (
                        <div className='flex items-center justify-between mt-9'>
                            <p>Totals MRP:</p>
                            <p>{item.CartQuantity * Math.round(item.price - Math.floor((item.price * item.discountPercentage / 100)))}</p>
                        </div>
                    ))}

                    <div className='border-b-2 border-b-zinc-300 mt-3'></div>

                    <div className='flex items-center justify-between mt-4'>
                        <p>Total Amount:</p>
                        <p>{TotalAmount}</p>
                    </div>

                    <div className='mt-8 flex items-center gap-x-2'>
                    <p className='w-3 h-3 bg-[#19D16F] rounded-full '></p>
                    <p className='text-[14px] font-Josefin__Sans'>Shipping & taxes calculated at checkout</p>
                    </div>
                    {/* --- Proceed To Checkout button --- */}
                    <div className='mt-8'>
                        <button className='bg-[#19D16F] py-3 w-full rounded text-white font-Roboto font-bold hover:bg-green-600'  onClick={HandleOderButton}>
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