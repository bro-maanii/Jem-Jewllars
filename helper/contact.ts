import nodemailer from 'nodemailer';


interface DataType {
  name: string;
  email: string;
  message: string;
}

export const contactmail = async (to: string, subject: string, data: DataType) => {
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
        <h1>FeedBack - Query </h1>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Message: ${data.message}</p>
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
