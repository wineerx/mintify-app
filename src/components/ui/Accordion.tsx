'use client';

import { Accordion as Accord } from 'flowbite-react';
export const Accordion = () => {

  const dataAccordion = [
    {
      title: 'Status',
      desc: `Ola Mundo`
    },

    {
      title: 'Price',
      desc: `Ola Mundo`
    },

    {
      title: 'Collections',
        desc: `Ola Mundo`
    },

    {
      title: 'Chains',
        desc: `Ola Mundo`
    },

    {
      title: 'Categories',
        desc: `Ola Mundo`
    },

    {
      title: 'Sale',
        desc: `Ola Mundo`
    }


  ]
  
  return (
    <Accord collapseAll className='border-none space-y-2'>
      {dataAccordion.map((data, index) => (
        <Accord.Panel key={index} className=''>
          <Accord.Title className='text-white-100 font-medium text-lg p-0'>{data.title}</Accord.Title>
          <Accord.Content className='p-0'>
           <p className='text-gray-500'>{data.desc}</p>
          </Accord.Content> 
          <div className='w-full bg-gray-200 h-[1px]'></div>
        </Accord.Panel>
      ))}
    </Accord>
  );
};



