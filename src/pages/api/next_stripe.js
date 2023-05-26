import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, count, customer } = req.body;

    // Create a new Checkout Session using the Stripe SDK
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Song NFT',
            },
            unit_amount: amount,
          },
          quantity: count,
        },
      ],
      mode: 'payment',
      customer: customer,
      success_url: `${req.headers.origin}/`,
      cancel_url: `${req.headers.origin}/`,
    });

    // Return the session ID to the client
    res.status(200).json({ sessionId: session.id });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}