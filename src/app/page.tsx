
import Hero from "@/components/Hero"
import FlashSales from "@/components/FlashSales"
import Cart from "@/components/Cart"
import ProductGrid from "@/components/Product Grid"
import Featured from "@/components/Featured"

export default function Home(){
  return(
    <div>
    
    <Hero />
    <FlashSales />
    <Cart />
   <ProductGrid />
   <Featured />
   
    </div>
  )
}