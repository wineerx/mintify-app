
import Dog from '../assets/Dog.png'
export const Card = () => {

  return <>
    <div className='flex flex-col'>
      <img src={Dog} alt="" />
      <div className='bg-[#272A34] rounded-b-xl space-y-1 '>
        <div className='p-4 mb-[55px]'>
          <h1 className='text-[#38F2AF]'>The Holy Grail</h1>
          <p className='text-[#828282]'>Pixart Motions</p>
        </div>

        <div className='w-full h-[1px] bg-[#343741]'></div>

        <div className='flex justify-between p-4'>
          <h1 className='text-[#38F2AF]'>Fixed price</h1>
          <button className='flex item-center justify-center  border border-[#38F2AF] rounded-3xl '>
            <strong className='text-[#38F2AF] font-normal text-sm px-3 py-1'>0.001 ETH</strong>
          </button>
        </div>
      </div>

    </div>
  </>
}