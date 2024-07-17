import React from 'react'
import ErrorPage from '../../assets/ErrorPage.png'

const NotFoundPage = () => {
  return (
    <>
    <div className='container mx-auto'>
        <div className='flex items-center justify-center py-14'>
            <img src={ErrorPage} alt={ErrorPage} />
        </div>
    </div>
    </>
  )
}

export default NotFoundPage