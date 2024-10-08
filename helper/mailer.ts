import nodemailer from 'nodemailer';

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

export const sendMail = async (to: string, subject: string, data: DataType) => {
  try {
    // Step 1: Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.SMTP_HOST, // Your environment variable for the SMTP host
        port: 587,
        auth: {
        user: process.env.SMTP_USER, // Your environment variable for the SMTP user
        pass: process.env.SMTP_PASS, // Your environment variable for the SMTP pass
      },
    });
    // console.log(to, subject, data);

    // Step 2: Send email
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER, // Sending the email from the user defined in environment variables
      to: to,
      subject: subject,
      html: `
        <h1>Order Details</h1>
        <p>Name: ${data.name}</p>
        <p>Address: ${data.address}</p>
        <p>City: ${data.city}</p>
        <p>Contact Number: ${data.contact}</p>
        <p>Email Address: ${data.email}</p>
        <h2>Products</h2>
        <ul>
          ${data.product
            .map(
              (item) => `
                <div>
                <p>item id : ${item.id}</p> 
                <p>quantiy : ${item.quantity}</p>  
                <p>total price: ${item.price}</p>
                </div>
              `
            )
            .join('')} 
        </ul>
        <h3>Total: $${data.total}</h3>
      `,
    });

    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    // Error handling
    console.error('Error occurred while sending the email:', error);
    throw error;
  }
};
