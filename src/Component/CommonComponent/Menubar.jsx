import React, { useEffect, useState } from 'react'

const Menubar = () => {


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
    );
};

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

export default Menubar