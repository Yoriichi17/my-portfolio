import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,  
        {
          email, 
          subject,
          message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_RECEIVER_EMAIL
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID    
      );

      console.log('Email sent successfully:', response);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
