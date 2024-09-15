import { contactmail } from '@/helper/contact';
import { NextRequest, NextResponse } from 'next/server'
  
interface DataType {
    name: string;
    email: string;
    message: string;
  }
  

export async function POST(req: NextRequest) {
    try {
        const FormData: DataType = await req.json();
        // console.log(orderFormData);
        // Send mail
        await contactmail('jemjwellarofficial@gmail.com', 'FeedBack-Query', FormData);
        console.log('Mail sent');
        return NextResponse.json({message:"User Successfully send mail" , success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to sent' , success: false });
    }
}