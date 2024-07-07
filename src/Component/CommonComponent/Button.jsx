import React from 'react'

const Button = ({title, className}) => {
  return (
    <>
    <div>
       <div 
        className={className ? className : ' p-2 bg-black text-white '}
        >
          {title? title : "Non"}
        </div>
    </div>
    </>
  )
}

export default Button