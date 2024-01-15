'use client'

import { Items } from './components/Items';
import { Header } from './components/Header';
import { DropdownComponent as Dropdown } from './components/ui/Dropdown';
import { ButtonGroup } from './components/ui/ButtonGroup';
import { Aside } from './components/Aside';

function App() {

  return (
    <>
      <Header></Header>

      <div className='flex'>

        <Aside></Aside>

        <main className='flex-1 py-11 px-5 space-y-6'>

          <div className='flex w-full justify-between items-center'>
            <h1 className='text-2xl font-medium text-white-100'>Cryptographics</h1>
            <button className='py-2 px-4 bg rounded bg-green-600' type="button" > Create new item</button>
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

          <section className='flex w-full flex-wrap bg-gray-200 rounded-[10px] gap-6 justify-stretch p-5 overflow-hidden '>
            <Items />
          </section>

        </main>

      </div>
    </>
  )
}

export default App
