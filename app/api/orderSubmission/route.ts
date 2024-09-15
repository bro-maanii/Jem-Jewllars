import { sendMail } from '@/helper/mailer';
import { NextRequest, NextResponse } from 'next/server'
interface ItemType {
    id: string;
    price: number;
    quantity: number;
  }
  
  interface DataType {
    name: string;
    address: string;
    city: string;
    contact: number;
    email: string;
    product: ItemType[];
    total: number;
  }
  

export async function POST(req: NextRequest) {
    try {
        const orderFormData: DataType = await req.json();
        // console.log(orderFormData);
        // Send mail
        await sendMail('jemjwellarofficial@gmail.com', 'Order Details', orderFormData);
        console.log('Mail sent');
        return NextResponse.json({message:"User Successfully Verified" , success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to sent' , success: false });
    }
}