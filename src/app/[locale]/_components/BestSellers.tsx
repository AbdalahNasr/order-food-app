// import MainHeading from '@/components/main-heading'
// import React from 'react'
// import Menu from '@/components/menu';
import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import getCurrentLocale from "@/lib/getCurrentLocale";
import { getBestSellers } from "@/lib/server/db/product";
import getTrans from "@/lib/translation";
async function BestSellers() {
    // const bestSellers = [
    //     {
    //       id: crypto.randomUUID(),
    //       name: 'Shoyu Ramen',
    //       description: 'Classic soy-based ramen with a rich umami broth.',
    //       basePrice: 15,
    //       image: '/assets/images/shoyu_ramen.png',
    //     },
    //     {
    //       id: crypto.randomUUID(),
    //       name: 'Miso Ramen',
    //       description: 'Savory miso-flavored ramen with hearty toppings.',
    //       basePrice: 16,
    //       image: '/assets/images/miso_ramen.png',
    //     },
    //     {
    //       id: crypto.randomUUID(),
    //       name: 'Tonkotsu Ramen',
    //       description: 'Creamy pork bone broth ramen with tender chashu slices.',
    //       basePrice: 18,
    //       image: '/assets/images/tonkotsu_ramen.jpg',
    //     },
    //     {
    //       id: crypto.randomUUID(),
    //       name: 'Spicy Ramen',
    //       description: 'Bold and fiery ramen for spice lovers.',
    //       basePrice: 17,
    //       image: '/assets/images/spicy_ramen.jpg',
    //     },
    //   ];
      

const bestSellers = await getBestSellers(3)
const locale = await getCurrentLocale();
const {home} =  await getTrans(locale) ; 
const {bestSeller} = home ; 


console.log(bestSellers)       

  return (

    

    <section>
        <div className="container" >
            <div className="text-center mb-4">
                <MainHeading title={bestSeller.checkOut} subTitle={bestSeller.OurBestSellers}  />
            </div>
        
            <Menu items={bestSellers}/> 
        </div>
    </section>
  ) 
}

export default BestSellers



