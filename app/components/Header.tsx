'use client'

import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import { ShoppingBagOpen } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'


import { Header as HeaderContainer, LinkLogo, LogoContainer } from '../styles/pages/layout'
import { useCart } from '../context/CartContext'
import { CartModal } from './CartModal'
import { usePathname } from 'next/navigation'


export function Header() {
  const { totalItems } = useCart()
  const pathname = usePathname()

  const isSuccessPage = pathname === '/success'

  return (
    <Dialog.Root>
      <HeaderContainer isSuccess={isSuccessPage}>

            <LinkLogo href="/">
              <LogoContainer>
                
                  <Image src={logoImg} alt="Logo da Ignite Shop" />

                  <div>
                    <h1>Ignite</h1>
                    <span>Shop</span>
                  </div>
              </LogoContainer>
            </LinkLogo>
          
      
        {!isSuccessPage && (
          <Dialog.Trigger asChild>
            <button>
              <ShoppingBagOpen size={30} />
              {totalItems > 0 && <span>{totalItems}</span>}
            </button>
          </Dialog.Trigger>
        )
        }
      </HeaderContainer>

      <CartModal />
    </Dialog.Root>
  )
}
