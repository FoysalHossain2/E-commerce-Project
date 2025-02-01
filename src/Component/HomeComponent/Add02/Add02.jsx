import AddImage01 from '../../../assets/AddImage01.png'
import AddImage02 from '../../../assets/AddImage02.png'
import AddImage03 from '../../../assets/AddImage03.png'

const Add02 = () => {


  return (
    <div className='pb-10'>
      <div className="container mx-auto ">
        <div className='px-4 py-8 flex gap-6 overflow-x-scroll'>
          {/* Card 1 */}
          <div className="w-[500px] ">
            <img
              src={AddImage01} // Replace this with the actual image URL
              alt="RO Water Purifiers"
              className="rounded-lg"
            />
            
          </div>

          {/* Card 2 */}
          <div className="w-[500px] ">
            <img
              src={AddImage02} // Replace this with the actual image URL
              alt="RO Water Purifiers"
              className="rounded-lg"
            />
            
          </div>
          {/* Card 3 */}
          <div className="w-[500px] ">
            <img
              src={AddImage03} // Replace this with the actual image URL
              alt="RO Water Purifiers"
              className="rounded-lg"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add02;
