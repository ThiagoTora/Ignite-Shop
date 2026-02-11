import { stripe } from "./lib/stripe"
import Stripe from "stripe"
import HomeClient from "./HomeClient"

export const revalidate = 60 * 60 * 2 // 2 horas

export async function generateStaticParams() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 10, 
    active: true,
  })

  return response.data.map(product => ({
    id: product.id,
  }))
}

export default async function Page() {

 const response = await stripe.products.list({
  expand: ["data.default_price"],
  })

  const products = response.data.filter(product => product.default_price).map(product => {
    const price = product.default_price as Stripe.Price
    

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      priceId: price.id, 
    }
  })

  return <HomeClient products={products} />
}
