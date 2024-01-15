'use client';

import { Dropdown } from 'flowbite-react';


interface DropdownInterface {
  name : string
}

export function DropdownComponent(props : DropdownInterface ) {
  return (
    <div className=' text-white-100 bg-gray-200 rounded '>
     <Dropdown className='border border-gray-200 bg-gray-600 ' label={props.name} dismissOnClick={false}>
        <Dropdown.Item className='hover:text-green-600'>Dashboard</Dropdown.Item>
        <Dropdown.Item className='hover:text-green-600'>Settings</Dropdown.Item>
        <Dropdown.Item className='hover:text-green-600'>Earnings</Dropdown.Item>
        <Dropdown.Item className='hover:text-green-600'>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
 
  );
}