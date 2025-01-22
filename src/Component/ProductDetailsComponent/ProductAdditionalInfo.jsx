import { useState } from "react";

const ProductAdditionalInfo = () => {

    const [Toggle, setToggle] = useState(false)

    console.log(Toggle);

    const TitlePart = [
        {
            id: 1,
            title: 'Description',
        },
        {
            id: 2,
            title: 'Specification',
        },
        {
            id: 3,
            title: 'Additional information',
        },
        {
            id: 4,
            title: 'Reviews',
        },
    ]

  return (
    <>
     <div className="flex items-center gap-x-14">
        {TitlePart.map((item, id) => (
            <ul key={id} >
                <li onClick={() => setToggle(item)} className="text-[27px] font-DM_Sans cursor-pointer font-semibold">{item.title}</li>
            </ul>
        ))}
     </div>
    </>
  )
}

export default ProductAdditionalInfo