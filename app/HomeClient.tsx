"use client"

import Image from "next/image"
import { Footer, HomeContainer, Product } from "./styles/pages/home"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link"
import Head from "next/head"
import { ShoppingBagOpen } from "phosphor-react"
import { useCart } from "./context/CartContext"

interface Product {
  id: string
  priceId: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products: Product[]
}

export default function HomeClient({ products }: HomeProps) {
  const { addItem } = useCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  function handleAddToCart(product: Product) {
    const priceNumber = Number(
      product.price.replace(/\s/g, '')
        .replace('R$', '')
        .replace('.', '')
        .replace(',', '.')
    )

    addItem({
      id: product.id,
      priceId: product.priceId,
      name: product.name,
      imageUrl: product.imageUrl,
      price: priceNumber,
      quantity: 1,
    })
  }

  return (
    <>
      <Head>
        <title>Home | Ignite shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
            className="keen-slider__slide"
            style={{ minWidth: 'calc(100% / 4)', overflow: 'visible' }} 
          >
            <Product>
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <Footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleAddToCart(product)
                }}>
                  <ShoppingBagOpen size={32} />
                </button>
              </Footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}