'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import { useCart } from '@/app/context/CartContext'


import {
  Overlay,
  Content,
  Header,
  Items,
  Item,
  Footer,
  Close,
} from '@/app/styles/components/CartModal'

export function CartModal() {
  const { items, totalItems, totalPrice, removeItem } = useCart()
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckout(true)

      const response = await axios.post('/api/checkout', {
        items: items.map(item => ({
          priceId: item.priceId,
          quantity: item.quantity,
        })),
      })

      console.log('CHECKOUT', response.data)

      window.location.href = response.data.checkoutUrl
    } catch {
      setIsCreatingCheckout(false)
      alert('Erro ao redirecionar para o checkout')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Header>
          <div>
            <Dialog.Title>Sacola de compras</Dialog.Title>
            <Dialog.Description>
              Revise seus produtos antes de finalizar a compra
            </Dialog.Description>
          </div>

          <Close>
            <X size={24} />
          </Close>
        </Header>

        <Items>
          {items.map(item => (
            <Item key={item.priceId}>
            <Image
              src={item.imageUrl}
              alt=""
              width={120}
              height={100}
              style={{ objectFit: 'cover' }}
            />


              <div>
                <p>{item.name}</p>
                <strong>R$ {(item.price ?? 0).toFixed(2)}</strong>
                <span>Quantidade: {item.quantity} unidades</span>
                <button onClick={() => removeItem(item.id, item.priceId)}>
                    Remover
                </button>
              </div>
            </Item>
          ))}
        </Items>

        <Footer>
          <div>
            <span>Quantidade</span>
            <span>{totalItems} itens</span>
          </div>

           <div>
            <span>Valor Total</span>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={isCreatingCheckout}
          >
            Finalizar compra
          </button>
        </Footer>
      </Content>
    </Dialog.Portal>
  )
}
