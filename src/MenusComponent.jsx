import React from 'react'
import MenuItem from './MenuItem'

const MenusComponent = ({menus, filteredMenus, allMenus, categories}) => {
  return (
    <>
       <section className='flex items-center flex-col'>
           <h1 className='text-xl font-bold border-b-2 border-orange-400 mt-6 pb-1'>Our Menu</h1> 
           <section className='flex gap-4 mt-4'>
                <button onClick={()=> allMenus()} className='text-white bg-orange-400 hover:bg-orange-600 px-2 py-1 rounded-md'>All</button>
                {categories.map((category, index)=> {
                    return <button onClick={()=> filteredMenus(category)} className='text-white bg-orange-400 hover:bg-orange-600 px-2 py-1 rounded-md' key={index}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
                })}
           </section>
           <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-8/12'>
                {menus.map((menu)=> <MenuItem key={menu.id} {...menu}/>)}
           </section>
        </section> 
    </>
  )
}

export default MenusComponent