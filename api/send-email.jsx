const sendEmail = async (req, res) => {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      // Form validation and submission logic
      // ...
  
      // Send the email using your preferred email library or service
      // ...
  
      res.status(200).json({ message: 'Email sent successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };
  
  export default sendEmail;
  