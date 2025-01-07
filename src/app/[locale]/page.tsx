
  // import { db } from '@/lib/prisma';
import About from '@/components/about';
import BestSellers from './_components/BestSellers';
import Hero from './_components/Hero';
import Contact from '@/components/contact';
export default async  function Home() {
// const sizes = await db.extra.createMany(
//{
//   data: [
//     {name:'PEPPER',price:3,productId:'sghdsnmuiltgftynhgdhjjk'},
//     {name:'ONION',price:2,productId:'sghdsnmuiltgftynhgdhjjk'},

//   ]
// });
// const products = await  db.product.deleteMany()
// const sizes = await  db.size.deleteMany()
// const extras = await  db.extra.deleteMany()
//  console.log(sizes);
//  console.log(products);
//  console.log(e


  return <main>
<Hero/>
<BestSellers/>   
<About/>
<Contact/>        
</main>
  
} 
