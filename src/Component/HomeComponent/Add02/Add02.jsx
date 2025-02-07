import AddImage01 from '../../../assets/AddImage01.png'
import AddImage02 from '../../../assets/AddImage02.png'
import AddImage03 from '../../../assets/AddImage03.png'

const Add02 = () => {


  return (
    <div className='pb-10'>
      <div className="container mx-auto ">
        <div className='px-4 py-8 flex justify-between gap-6 overflow'>
          {/* Card 1 */}
          <div className=" ">
            <img
              src={AddImage01} // Replace this with the actual image URL
              alt="RO Water Purifiers"
              className="rounded-lg w-[700px]"
            />
            
          </div>

          {/* Card 2 */}
          <div className=" ">
            <img
              src={AddImage02} // Replace this with the actual image URL
              alt="RO Water Purifiers"
              className="rounded-lg w-[700px]"
            />
            
          </div>
          {/* Card 3 */}
          <div className=" ">
            <img
              src={AddImage03} // Replace this with the actual image URL
              alt="RO Water Purifiers"
              className="rounded-lg w-[700px]"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add02;
