// import { db } from '@/lib/prisma'
import Menu from '@/components/menu'
import { getProductsByCategory } from '@/lib/server/db/product'
import React from 'react'

async function MenuPage() {
  // await db.category.createMany({
  //   data: [
  //     {name:'Seafood Ramen'} ,
  //     {name:'Tsukemen'}
  //   ],
  // })

  

    const categories = await getProductsByCategory()
    // console.log(categories);
    
  return (
    <main> 
       {categories.map((category) =>  (
      <section key={category.id} className='section-gap'>
        <div className='container text-center'>
          <h1 className='text-primary font-bold text-4xl italic mb-6'>
            {category.name}
          </h1>
          <Menu items={category.products} />
        </div>
      </section>
    ))}
    </main>
  )
  
}

export default MenuPage