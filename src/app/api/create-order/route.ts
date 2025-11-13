// src/app/api/create-order/route.ts
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { randomBytes } from 'crypto';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET_KEY!,
});

export async function POST(request: Request) {
  try {
    const { amount, name, email, phone } = await request.json();

    if (!amount || !name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const options = {
      amount: amount * 100, // Amount in paise (e.g., 9999 -> 999900)
      currency: 'INR',
      receipt: `receipt_${randomBytes(10).toString('hex')}`,
      notes: {
        name: name,
        email: email,
        phone: phone,
        course: "GrowInSTYL - Batch 1"
      }
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
    }

    return NextResponse.json({ order }, { status: 200 });

  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Internal server error', details: errorMessage }, { status: 500 });
  }
}