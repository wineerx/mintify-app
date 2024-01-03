'use client'

import Person from './assets/person.png'
// import Cat from './assets/cat.png'
import { Card } from './components/Card'
import { Nav } from './components/Nav'
// import Monkey from './assets/Monkey.png'
// import Alien from './assets/Alien.png'
// import Anemic from './assets/Anemic.png'
// import Gorila from './assets/Gorila.png'
// import Crazy from './assets/Crazy.png'
// import Ripster from './assets/Ripster.png'



import { DropdownComponent as Dropdown } from './components/Dropdown'
import { ButtonGroup } from './components/ButtonGroup'
function App() {

  return (
    <>
    
      <header className="flex items-center flex-row w-full p-5  border-b-[1px] border-[#383940] bg-[#25272E]">

        <div className='flex items-center gap-1 basis-1/6'>

          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <g clip-path="url(#clip0_1_123)">
              <path d="M7.22284 -0.121366L7.22142 -0.121349L2.58422 1.85535C0.10095 4.33858 -0.042767 8.28846 2.15272 10.9417L-0.088387 13.1827L-0.176778 13.2711L-0.0883884 13.3595L0.640486 14.0884L0.728874 14.1768L0.817263 14.0884L3.0582 11.8475C4.26736 12.8501 5.77425 13.3959 7.36444 13.3959C9.1698 13.3959 10.868 12.6925 12.1446 11.4158C13.3787 10.1819 14.0807 8.53972 14.1211 6.79277L14.1212 6.79277L14.1212 6.78994L14.125 7.08422e-05L14.1251 -0.125067L13.9999 -0.125L7.22284 -0.121366ZM10.0829 6.43521H8.47047L10.0498 4.85588L10.1382 4.76749L10.0498 4.6791L9.32093 3.95023L9.23254 3.86184L9.14416 3.95023L7.56482 5.52956V3.91712V3.79212H7.43982H6.40903H6.28403V3.91712V6.81035L5.37817 7.71622V3.91712V3.79212H5.25317H4.22237H4.09737V3.91712V8.99701L3.06365 10.0307C1.36476 7.882 1.50671 4.74412 3.48984 2.761C4.48871 1.76216 5.81675 1.19362 7.2309 1.15944L12.8436 1.15641L12.8405 6.77011C12.806 8.18403 12.2375 9.51167 11.239 10.5102C10.2039 11.5453 8.82831 12.1151 7.36444 12.1151C6.11611 12.1151 4.93226 11.7004 3.96888 10.9367L5.00295 9.90266H10.0829H10.2079V9.77766V8.74687V8.62187H10.0829H6.28382L7.18968 7.71601H10.0829H10.2079V7.59101V6.56021V6.43521H10.0829Z" fill="#38F2AF" stroke="#38F2AF" stroke-width="0.25" />
            </g>
            <defs>
              <clipPath id="clip0_1_123">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className='text-[#38F2AF] font-medium text-lg'>Mintify</h1>


        </div>


        <div className='basis-2/5 '>
          <nav className='space-x-10'>
           <Nav/>
          </nav>
        </div>

        <div className='flex flex-row-reverse items-start basis-3/4 gap-6'>

          <div className='flex items-center gap-2'>

            <img src={Person} alt="" />
            <h1 className='text-[#FFF] font-medium text-sm'>Leslie Alexander</h1>

          </div>

          <div className="flex items-center gap-3 ">

            <button className="h-[30px] w-[30px] rounded-full bg-[#373943] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 3H3C2.31063 3 1.75 3.56062 1.75 4.25V11.75C1.75 12.4394 2.31063 13 3 13H13C13.6894 13 14.25 12.4394 14.25 11.75V4.25C14.25 3.56062 13.6894 3 13 3ZM13 4.25V4.56937L8 8.45875L3 4.57V4.25H13ZM3 11.75V6.1525L7.61625 9.74312C7.72569 9.82909 7.86083 9.87582 8 9.87582C8.13917 9.87582 8.27431 9.82909 8.38375 9.74312L13 6.1525L13.0013 11.75H3Z" fill="white" />
              </svg>
            </button>

            <button className="h-[30px] w-[30px] rounded-full bg-[#373943] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.75 6.125C12.7855 6.125 13.625 5.28553 13.625 4.25C13.625 3.21447 12.7855 2.375 11.75 2.375C10.7145 2.375 9.875 3.21447 9.875 4.25C9.875 5.28553 10.7145 6.125 11.75 6.125Z" fill="#38F2AF" />
                <path d="M11.75 12.375H3.625V4.25H8.625C8.625 3.805 8.72062 3.38312 8.88875 3H3.625C2.93562 3 2.375 3.56062 2.375 4.25V12.375C2.375 13.0644 2.93562 13.625 3.625 13.625H11.75C12.4394 13.625 13 13.0644 13 12.375V7.11125C12.6062 7.28496 12.1805 7.37479 11.75 7.375V12.375Z" fill="white" />
              </svg>
            </button>

            <button className="h-[30px] w-[30px] rounded-full bg-[#373943] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.5 8H11.75V10.5H10.5V8Z" fill="white" />
                <path d="M13 4.875V3.625C13 2.93562 12.4394 2.375 11.75 2.375H3.625C2.59125 2.375 1.75 3.21625 1.75 4.25V11.75C1.75 13.1256 2.87125 13.625 3.625 13.625H13C13.6894 13.625 14.25 13.0644 14.25 12.375V6.125C14.25 5.43563 13.6894 4.875 13 4.875ZM3.625 3.625H11.75V4.875H3.625C3.46408 4.8678 3.31213 4.79881 3.2008 4.68239C3.08947 4.56596 3.02733 4.41109 3.02733 4.25C3.02733 4.08891 3.08947 3.93404 3.2008 3.81761C3.31213 3.70119 3.46408 3.6322 3.625 3.625ZM13 12.375H3.6325C3.34375 12.3675 3 12.2531 3 11.75V6.00937C3.19625 6.08 3.40438 6.125 3.625 6.125H13V12.375Z" fill="white" />
              </svg>
            </button>

          </div>

          <div className="flex w-[322px] items-center border-transparent rounded-[10px] bg-[#373943]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className="ml-4">
              <path d="M6.66667 12C7.84999 11.9998 8.99921 11.6036 9.93134 10.8747L12.862 13.8053L13.8047 12.8627L10.874 9.93201C11.6033 8.99979 11.9997 7.8503 12 6.66668C12 3.72601 9.60734 1.33334 6.66667 1.33334C3.726 1.33334 1.33334 3.72601 1.33334 6.66668C1.33334 9.60734 3.726 12 6.66667 12ZM6.66667 2.66668C8.87267 2.66668 10.6667 4.46068 10.6667 6.66668C10.6667 8.87268 8.87267 10.6667 6.66667 10.6667C4.46067 10.6667 2.66667 8.87268 2.66667 6.66668C2.66667 4.46068 4.46067 2.66668 6.66667 2.66668Z" fill="#828282" />
            </svg>

            <input type="text" name="Search artwork" id="" className="flex-1 rounded-[10px] bg-[#373943] focus:outline-none text-[#828282] text-sm font-normal placeholder:text-[#828282] py-2 px-4" placeholder='Search artwork' />
          </div>

        </div>

      </header>


      <div className='flex'>

        <aside className='h-screen w-64 bg-[#25272E] border-r-[1px] border-[#383940] p-8'>

          <menu className='flex flex-col space-y-3'>

            <div className='flex justify-between border-b border-[#383940] pb-2'>
              <h1 className='text-white font-medium text-lg'>Suporte</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="white" />
              </svg>
            </div>

          </menu>

        </aside>

        <main className='flex-1 py-11 px-5 space-y-6'>

          <div className='flex w-full justify-between items-center'>
            <h1 className='text-2xl font-medium text-[#FFF]'>Cryptographics</h1>
            <button className='py-2 px-4 bg rounded bg-[#38F2AF]' type="button" > Create new item</button>
          </div>

          <div className='flex w-full justify-between '>

            <div className='flex items-center gap-3'>
              <Dropdown name='Recent' />
              <Dropdown name='Low to high' />
              <Dropdown name='All' />
            </div>

            <div>
              <ButtonGroup />
            </div>

          </div>


          <section className='flex w-full flex-wrap bg-[#373943] rounded-[10px]   gap-6 justify-stretch p-5 overflow-hidden '>

            <Card/>


          </section>

        </main>

      </div>




    </>
  )
}

export default App
