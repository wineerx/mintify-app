import { Accordion } from './ui/Accordion';

export const Aside = () => {
  return <>
    <aside className='h-screen w-64 bg-gray-600 border-r-[1px] border-gray-200 p-8'>

      <menu className='flex flex-col space-y-4'>
        <Accordion></Accordion>
      </menu>

    </aside>
  </>
}
