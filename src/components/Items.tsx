
import Cat from '../assets/Cat.png';
import Dog from '../assets/Dog.png';
import Alien from '../assets/Alien.png';
import Anemic from '../assets/Anemic.png';
import Crazy from '../assets/Crazy.png';
import Gorila from '../assets/Gorila.png';
import Monkey from '../assets/Monkey.png';
import Ripster from '../assets/Ripster.png';

export const Items = () => {

  const dataNft = [
    {
      name: 'The Holy Grail',
      origin: 'Pixart Motion',
      price: 0.001,
      svg: Cat
    },
    {
      name: 'Mirror Glass Efect',
      origin: 'Pixart Motion',
      price: 0.005,
      svg: Gorila
    },
    {
      name: 'Neon in Life',
      origin: 'Pixart Motion',
      price: 0.002,
      svg: Alien
    },
    {
      name: 'Oil Source',
      origin: 'Pixart Motion',
      price: 0.001,
      svg:Monkey
    },
    {
      name: 'World Surface',
      origin: 'Pixart Motion',
      price: 0.004,
      svg: Crazy
    },
    {
      name: 'Infinity Door',
      origin: 'Pixart Motion',
      price: 0.005,
      svg: Ripster
    },
    {
      name: 'Bi-conditional Effect',
      origin: 'Pixart Motion',
      price: 0.002,
      svg: Anemic
    },
    {
      name: 'Motion viem',
      origin: 'Pixart Motion',
      price: 0.009,
      svg: Dog
    }
  ]

  return <>

    {dataNft.map((data, i) => (
      <div key={i} className='flex flex-col'>
        <img src={data.svg} alt="" />
        <div className='bg-gray-400 rounded-b-xl space-y-1 '>
          <div className='p-4 mb-[55px]'>
            <h1 className='text-green-600'>{data.name}</h1>
            <p className='text-gray-100'>{data.origin}</p>
          </div>

          <div className='w-full h-[1px] bg-gray-200'></div>

          <div className='flex justify-between p-4'>
            <h1 className='text-green-600'>Fixed price</h1>
            <button className='flex item-center justify-center  border border-green-600 rounded-3xl '>
              <strong className='text-green-600 font-normal text-sm px-3 py-1'>{data.price} ETH</strong>
            </button>
          </div>
        </div>
      </div>
    ))}
  </>
}