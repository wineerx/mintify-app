import { Nav } from './Nav';
import { Logo } from './Logo';
import Person from '../assets/person.png'

export const Header = () => {
  return <>
    <header className="flex items-center flex-row w-full p-5  border-b-[1px] border-gray-200 bg-gray-600">
     <Logo/>
      <div className='basis-2/5 '>
        <Nav/>
      </div>

      <div className='flex flex-row-reverse items-start basis-3/4 gap-6'>

        <div className='flex items-center gap-2'>
          <img src={Person} alt="" />
          <h1 className='text-white-100 font-medium text-sm'>Leslie Alexander</h1>
        </div>

        <div className="flex items-center gap-3 ">

          <button className="h-[30px] w-[30px] rounded-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 3H3C2.31063 3 1.75 3.56062 1.75 4.25V11.75C1.75 12.4394 2.31063 13 3 13H13C13.6894 13 14.25 12.4394 14.25 11.75V4.25C14.25 3.56062 13.6894 3 13 3ZM13 4.25V4.56937L8 8.45875L3 4.57V4.25H13ZM3 11.75V6.1525L7.61625 9.74312C7.72569 9.82909 7.86083 9.87582 8 9.87582C8.13917 9.87582 8.27431 9.82909 8.38375 9.74312L13 6.1525L13.0013 11.75H3Z" fill="white" />
            </svg>
          </button>

          <button className="h-[30px] w-[30px] rounded-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.75 6.125C12.7855 6.125 13.625 5.28553 13.625 4.25C13.625 3.21447 12.7855 2.375 11.75 2.375C10.7145 2.375 9.875 3.21447 9.875 4.25C9.875 5.28553 10.7145 6.125 11.75 6.125Z" fill="#38F2AF" />
              <path d="M11.75 12.375H3.625V4.25H8.625C8.625 3.805 8.72062 3.38312 8.88875 3H3.625C2.93562 3 2.375 3.56062 2.375 4.25V12.375C2.375 13.0644 2.93562 13.625 3.625 13.625H11.75C12.4394 13.625 13 13.0644 13 12.375V7.11125C12.6062 7.28496 12.1805 7.37479 11.75 7.375V12.375Z" fill="white" />
            </svg>
          </button>

          <button className="h-[30px] w-[30px] rounded-full bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.5 8H11.75V10.5H10.5V8Z" fill="white" />
              <path d="M13 4.875V3.625C13 2.93562 12.4394 2.375 11.75 2.375H3.625C2.59125 2.375 1.75 3.21625 1.75 4.25V11.75C1.75 13.1256 2.87125 13.625 3.625 13.625H13C13.6894 13.625 14.25 13.0644 14.25 12.375V6.125C14.25 5.43563 13.6894 4.875 13 4.875ZM3.625 3.625H11.75V4.875H3.625C3.46408 4.8678 3.31213 4.79881 3.2008 4.68239C3.08947 4.56596 3.02733 4.41109 3.02733 4.25C3.02733 4.08891 3.08947 3.93404 3.2008 3.81761C3.31213 3.70119 3.46408 3.6322 3.625 3.625ZM13 12.375H3.6325C3.34375 12.3675 3 12.2531 3 11.75V6.00937C3.19625 6.08 3.40438 6.125 3.625 6.125H13V12.375Z" fill="white" />
            </svg>
          </button>

        </div>

        <div className="flex w-[322px] items-center border-transparent rounded-[10px] bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className="ml-4">
            <path d="M6.66667 12C7.84999 11.9998 8.99921 11.6036 9.93134 10.8747L12.862 13.8053L13.8047 12.8627L10.874 9.93201C11.6033 8.99979 11.9997 7.8503 12 6.66668C12 3.72601 9.60734 1.33334 6.66667 1.33334C3.726 1.33334 1.33334 3.72601 1.33334 6.66668C1.33334 9.60734 3.726 12 6.66667 12ZM6.66667 2.66668C8.87267 2.66668 10.6667 4.46068 10.6667 6.66668C10.6667 8.87268 8.87267 10.6667 6.66667 10.6667C4.46067 10.6667 2.66667 8.87268 2.66667 6.66668C2.66667 4.46068 4.46067 2.66668 6.66667 2.66668Z" fill="#828282" />
          </svg>

          <input type="text" name="Search artwork" id="" className="flex-1 rounded-[10px] bg-gray-200 focus:outline-none text-gray-100 text-sm font-normal placeholder:text-gray-100 py-2 px-4" placeholder='Search artwork' />
        </div>

      </div>

    </header>
  </>
}