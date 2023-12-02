// export default function ContactPage() {
//     return (
//         <div className="pa4 pv3 mt0 bg-light-green">
//         <h2 className="sans-serif f2 lh-copy">Contact</h2>
//         <h6 className="sans-serif f4 lh-copy ma2">Name:</h6>
//         <input type="text" className="w-40"/>
//         <h6 className="sans-serif f4 lh-copy ma2">Email address:</h6>
//         <input type="text" className="w-40" />
//         <h6 className="sans-serif f4 lh-copy ma2">message:</h6>
//         <input type="text" className="border-box hover-black w-40 h5"/>
//         <br></br>
//         <button className="w-10 h2 br3 ma1 bg-blue white link dim black b">Submit</button>
//         </div>
//     );
//   }

import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const validateEmail = (email) => {
    // Regular expression to check for a valid email format
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (value.trim() === '') {
      setEmailError('Email is required');
    } else if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    if (value.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  return (
    <div className="pa4 pv3 mt0 bg-light-green">
      <h2 className="sans-serif f2 lh-copy">Contact</h2>
      <h6 className="sans-serif f4 lh-copy ma2">Name:</h6>
      <input
        type="text"
        className="w-40"
        value={name}
        onChange={handleNameChange}
      />
      {nameError && <p>{nameError}</p>}

      <h6 className="sans-serif f4 lh-copy ma2">Email address:</h6>
      <input
        type="text"
        className="w-40"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p>{emailError}</p>}

      <h6 className="sans-serif f4 lh-copy ma2">Message:</h6>
      <input
        type="text"
        className="border-box hover-black w-40 h5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button className="w-10 h2 br3 ma1 bg-blue white link dim black b">Submit</button>
    </div>
  );
};

export default ContactPage;