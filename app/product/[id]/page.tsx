import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"
import BuyButton from "@/app/product/[id]/BuyButton"
import Head from "next/head"

// ISR → página estática que revalida a cada 1h
export const revalidate = 60 * 60

// aceita IDs que não vieram no build (fallback = blocking)
export const dynamicParams = true

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  
  const { id } = await params

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  })

  const price = product.default_price as Stripe.Price

  const formattedProduct = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount! / 100),
    description: product.description,
    defaultPriceId: price.id,
  }

  return (
    <>
        <Head>
            <title>{product.name} | Ignite shop</title>
        </Head>
   
        <ProductContainer>
          <ImageContainer>
            <Image
              src={formattedProduct.imageUrl}
              width={520}
              height={480}
              alt={formattedProduct.name}
            />
          </ImageContainer>

          <ProductDetails>
            <h1>{formattedProduct.name}</h1>
            <span>{formattedProduct.price}</span>
            <p>{formattedProduct.description}</p>

            <BuyButton   product={{
                id: formattedProduct.id,
                name: formattedProduct.name,
                imageUrl: formattedProduct.imageUrl,
                price: price.unit_amount! / 100,
                priceId: price.id,
              }} />
          </ProductDetails>
        </ProductContainer>
     </>
  )
}
