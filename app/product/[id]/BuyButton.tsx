'use client'

import { useCart } from '@/app/context/CartContext'

interface BuyButtonProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    priceId: string
  }
}

export default function BuyButton({ product }: BuyButtonProps) {
  const { addItem } = useCart()

  function handleAddToCart() {
    addItem({
      id: product.id,
      priceId: product.priceId,      
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,  
      quantity: 1,
    })
  }

  return (
    <button onClick={handleAddToCart}>
      Colocar na sacola
    </button>
  )
}
