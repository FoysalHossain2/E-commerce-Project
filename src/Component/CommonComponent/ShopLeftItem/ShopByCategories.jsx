import React, { useState, useEffect } from 'react';
import { GrFormCheckmark } from "react-icons/gr";

const ShopByCategories = ({ CatagoriesData, ShopLeftTitle, AllProducts }) => {

    const [ShowCategories, setShowCategories] = useState([]);
    const [CategoryData, setCategoryData] = useState(CatagoriesData)
    
    console.log(CategoryData);
    
    
    
    useEffect(() => {
        if (CatagoriesData.length > 0) {
            setShowCategories(CatagoriesData.map(() => false));
        }
    }, [CatagoriesData]);
    
    
    const HandleToggal = (ind) => {
        setShowCategories((previousState) => {
            return previousState.map((value, index) =>
                ind === index ? !value : false
        );
    });
};


    
    const HandleSetCateName = (cateItem) => {
        console.log("Selected Category:", cateItem);
        const CatResult = CatagoriesData.filter((curData) =>{
            console.log("Checking Product Category:", curData.category);
            return curData.category === cateItem;
        });
        
    
        setCategoryData(CatResult);
        console.log("Filtered Result:", CatResult);
    }



    return (
        <>
            <div className='mt-11 mb-8'>
                <h3 className='font-Josefin__Sans text-xl border-b-2 border-gray-400 w-[200px] text-secondary_text_color'>
                    {ShopLeftTitle}
                </h3>

                <div className='mt-[11px]'>
                    {CatagoriesData?.map((value, index) => (
                        value.subCategory.length > 0 ? (
                            <div key={index}>

                                <div  onClick={() => HandleSetCateName (value)}>
                                    <div className='flex items-center gap-x-3' onClick={() => HandleToggal (index)}>
                                        <div className='w-4 h-4 border bg-[#FFDBF1] flex items-center'>
                                            <GrFormCheckmark className='text-[#FF3EB2] textF cursor-pointer' />
                                        </div>
                                        <p className='text-Paragraph__Color font-DM_Sans py-2 cursor-pointer' >{value.title}</p>
                                    </div>
                                </div>

                                <div>
                                    <div className={`${value.subCategory && 'pb-2'}`} 
                                    >
                                        {ShowCategories[index] &&
                                            value.subCategory.map((subitem, id) => (
                                                subitem !== value.title && (
                                                    <div key={id}>
                                                        <h2 className='py-2 text-Paragraph__Color cursor-pointer' onClick={() => HandleSetCateName (subitem)}>{subitem}</h2>
                                                    </div>
                                                )                                             
                                            ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div >
                                <div className='flex items-center gap-x-3' >
                                    <div className='w-4 h-4 border bg-[#FFDBF1] flex items-center'>
                                        <GrFormCheckmark className='text-[#FF3EB2] textF cursor-pointer' />
                                    </div>
                                    <p className='text-Paragraph__Color font-DM_Sans py-2' >{value.title}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShopByCategories;