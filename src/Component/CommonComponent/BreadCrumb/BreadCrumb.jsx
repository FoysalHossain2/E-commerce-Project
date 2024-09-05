import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {

  const location = useLocation();
  const BradCrumbPathname = location.pathname.split('/').filter((x) => x);
  let BradCrumbList = "" ;


  return (
    <>
    <div>
      <ul className='flex items-center gap-x-2'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>

        <li className='flex items-center gap-x-2'>
        {BradCrumbPathname?.map((path, index) => {
          const isLoginDin = index === BradCrumbPathname.length - 1 
          BradCrumbList += `/${path}`

          return (
            
            <li key={index}>
              <span>/</span>  
              <Link  to={BradCrumbList} className={`${isLoginDin ? 'text-button_Color ml-2' : ''}`}>
                {path}
              </Link>
            </li>
          )
        })}
        </li>
      </ul>
    </div>
    </>
  )
}

export default BreadCrumb