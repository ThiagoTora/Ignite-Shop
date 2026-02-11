import { NextResponse } from 'next/server'
import { stripe } from '@/app/lib/stripe'

export async function POST(req: Request) {
  try {
    const { items } = await req.json()

    console.log('ITEMS RECEBIDOS:', items)
    console.log('NEXT_URL:', process.env.NEXT_URL)

      const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_URL}/`,
      line_items: items.map((item: any) => ({
        price: item.priceId,
        quantity: item.quantity,
      })),
    })

    return NextResponse.json({ checkoutUrl: checkoutSession.url })
  } catch (err: any) {
    console.error('🔥 STRIPE ERROR:', err.message)
    console.error(err)

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}
