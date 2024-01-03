'use client';

import { Dropdown } from 'flowbite-react';

export function DropdownComponent(props : any) {
  return (
    <div className='text-[#38F2AF] bg-[#373943] rounded'>
   <Dropdown className='bg-[#25272E]' label={props.name} dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
    </div>
 
  );
}