import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";

const Menubar = () => {

    const menuData = [
        {
            title: 'Electronics',
            submenu: ['Mobile Phones', 'Laptops', 'Cameras']
        },
        {
            title: 'Clothing',
            submenu: ['Men', 'Women', 'Kids']
        },
        {
            title: 'Home & Kitchen',
            submenu: ['Furniture', 'Decor', 'Appliances']
        }
    ];


  const [openMenus, setOpenMenus] = useState([]);

    const toggleMenu = (index) => {
        setOpenMenus((prev) => {
            if (prev.includes(index)) {
                return prev.filter((i) => i !== index);
            } else {
                return [...prev, index];
            }
        });
    };

    return (
        <>
            <div>
                {/* -----------sing in-----------  */}
                    <div className='bg-[#222132] py-4 flex items-center gap-x-6'>
                        <div className='ml-8 bg-white text-button_Color w-8 h-8 rounded-full flex items-center justify-center'>
                            <FaUser className='text-[20px]' />
                        </div>
                        <p className='text-white font-Josefin__Sans text-xl'>Sing in</p>
                    </div>
                {/* -----------sing in-----------  */}
            </div>
            <div className='ml-8'>
                <div className="sidebar">
                    <div className="sidebar-header">
                        <h2>Categories</h2>
                    </div>
                    <ul className="sidebar-menu">
                        {menuData.map((menu, index) => (
                            <li className="menu-item" key={index}>
                                <a href="#" onClick={() => toggleMenu(index)}>
                                    {menu.title}
                                </a>
                                {openMenus.includes(index) && (
                                    <ul className="submenu">
                                        {menu.submenu.map((sub, subIndex) => (
                                            <li key={subIndex}>
                                                <a href="#">{sub}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};



export default Menubar