// app/layout.tsx
import {globalStyles} from '../app/styles/global'
import { Roboto_Condensed } from 'next/font/google'
import { getCssText } from './styles'
import { Container} from './styles/pages/layout'
import { Header } from './components/Header'
import { CartProvider } from './context/CartContext'

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['100','300','400','700','900'],
})

globalStyles();

export default function RootLayout({ children }:{
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
      <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />

      </head>
      <body className={roboto.className}>
        <CartProvider>
          <Container>

            <Header />

            {children}
          </Container>
        </CartProvider>

      </body>
    </html>
  )
}
