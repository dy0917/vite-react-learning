import { useState } from 'react';
import { useFormInput } from '../utils/useFormInput';

export default function SubscribeForm({ userProfile }) {
  const [status, setStatus] = useState('');

  // similar state variables mapped to form inputs
  const [inputFirstNameProps, resetFirstName] = useFormInput('Mary');
  const [inputEmailProps, resetEmail] = useFormInput('mary@poppins.com');

  function handleSubscribe() {
    resetFirstName('');
    resetEmail('');
    setStatus('Thanks for subscribing!');
  }

  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name: {/* form inputs with similar props */}
        <input {...inputFirstNameProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input {...inputEmailProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
