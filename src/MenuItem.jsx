import React from 'react'

const MenuItem = ({title, img, category, price, desc, id}) => {
  return (
    <section className='w-full h-fit rounded-md bg-gray-100 shadow-md'>
        <img src={img} className='w-full rounded-t-lg h-40' alt={title} />
        <article className='px-4 mt-4'>
            <section className='flex  justify-between'>
                <h1 className='font-bold capitalize'>{title}</h1>
                <p className='bg-orange-400 px-2 py-1 rounded-md'>${price}</p>
            </section>
            <section >
                <p className='text-justify mb-4 text-sm mt-2 text-gray-900'>{desc}</p>
            </section>
        </article>
    </section>
  )
}

export default MenuItem