'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  imageUrl: string
  priceId: string
  quantity: number
}

interface CartContextData {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string, priceId: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(product: CartItem) {
    setItems(state => {

      const cleanState = state.filter(item => item.priceId !== undefined);

      const productAlreadyInCart = state.find(
        item => item.priceId === product.priceId
      )

      if (productAlreadyInCart) {
        return state.map(item =>
          item.priceId === product.priceId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...cleanState, product]
    })
  }

  function removeItem(id: string, priceId: string) {
    setItems(prev => {
      const item = prev.find(
        i => i.id === id && i.priceId === priceId
      )

      if (!item) return prev

      if (item.quantity === 1) {
        return prev.filter(
          i => !(i.id === id && i.priceId === priceId)
        )
      }

      return prev.map(i =>
        i.id === id && i.priceId === priceId
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    })
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  )
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
