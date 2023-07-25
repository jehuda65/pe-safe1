import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation and submission logic
    // ...

    // Send email using an API endpoint
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success or failure
        // ...
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
        // ...
      });
  };

  return (
    <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
      <div><input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        required
      /></div>
      <div><input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      /></div>
      <div><input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        required
      /></div>
      <div><textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        required
      ></textarea></div>
      <div><button className='hover:ring hover:ring-emerald-500 p-3 rounded' type="submit">Send</button></div>
    </form>
  );
};

export default ContactForm;
