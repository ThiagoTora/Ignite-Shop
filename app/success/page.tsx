import Link from "next/link"
import Image from "next/image"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { ImageContainer, ImagesList, SuccessContainer } from "../styles/pages/success"
import { redirect } from "next/navigation"
import Head from "next/head"

interface SuccessPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Success({ searchParams }: SuccessPageProps) {
  const resolvedParams = await searchParams
  const sessionId = resolvedParams.session_id as string

  if (!sessionId) {
    redirect("/")
  }

  
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  
  const products = session.line_items?.data.map(item => {
      return item.price?.product as Stripe.Product
  })

  return (
    <>      
      <Head>
        <title>Compra efetuada | Ignite shop</title>
        <meta name='robots' content="noindex"/>
      </Head>

      <SuccessContainer>
        

        <ImagesList>
        {products?.map((product, i) => (
          <ImageContainer key={i}>
             <Image 
               src={product.images[0]} 
               width={120} 
               height={110} 
               alt="" 
             />
          </ImageContainer>
        ))}
      </ImagesList>

       <h1>Compra Efetuada!</h1>

        <p>
        Uhuul <strong>{customerName}</strong>, 
        sua compra de {products?.length}{" "} 
        camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}