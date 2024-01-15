'use client';

import { Button } from 'flowbite-react';

export function ButtonGroup() {
    return (
        <Button.Group className='flex'>
            
            <Button className='bg-gray-200 rounded-l-lg hover:bg-[#38F2AF14] ' target='terkonwdoá'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                     <path d="M2.25 2.25V8.25H8.25V2.25H2.25ZM6.75 6.75H3.75V3.75H6.75V6.75ZM2.25 9.75V15.75H8.25V9.75H2.25ZM6.75 14.25H3.75V11.25H6.75V14.25ZM9.75 2.25V8.25H15.75V2.25H9.75ZM14.25 6.75H11.25V3.75H14.25V6.75ZM9.75 9.75V15.75H15.75V9.75H9.75ZM14.25 14.25H11.25V11.25H14.25V14.25Z" fill="white" />
                </svg>
            </Button>
            
            
            <Button className='bg-gray-200 rounded-r-lg hover:bg-[#38F2AF14]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                 <path d="M9 6.75H12C12.4125 6.75 12.75 6.4125 12.75 6C12.75 5.5875 12.4125 5.25 12 5.25H9C8.5875 5.25 8.25 5.5875 8.25 6C8.25 6.4125 8.5875 6.75 9 6.75ZM9 9.75H12C12.4125 9.75 12.75 9.4125 12.75 9C12.75 8.5875 12.4125 8.25 12 8.25H9C8.5875 8.25 8.25 8.5875 8.25 9C8.25 9.4125 8.5875 9.75 9 9.75ZM9 12.75H12C12.4125 12.75 12.75 12.4125 12.75 12C12.75 11.5875 12.4125 11.25 12 11.25H9C8.5875 11.25 8.25 11.5875 8.25 12C8.25 12.4125 8.5875 12.75 9 12.75ZM5.25 5.25H6.75V6.75H5.25V5.25ZM5.25 8.25H6.75V9.75H5.25V8.25ZM5.25 11.25H6.75V12.75H5.25V11.25ZM15 2.25H3C2.5875 2.25 2.25 2.5875 2.25 3V15C2.25 15.4125 2.5875 15.75 3 15.75H15C15.4125 15.75 15.75 15.4125 15.75 15V3C15.75 2.5875 15.4125 2.25 15 2.25ZM14.25 14.25H3.75V3.75H14.25V14.25Z" fill="white" />
                </svg>
            </Button>
        </Button.Group>

    );
}