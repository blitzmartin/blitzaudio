import { send } from 'emailjs-com';
import React, { useState } from 'react'

export default function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_aw96jtb',
      'template_d6u6m5y',
      toSend,
      'Da8JZcAKED34WQhbQ'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '',
          message: '',
          reply_to: '',
        })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({
      ...toSend, [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <div className="section">
        <h1 className='newPosth1'>Contact me</h1>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='from_name'
            placeholder='Your name'
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <textarea
            rows="18" col="20"
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
            required
          />
          <button className="submitBtn" type='submit'>Submit</ button>
        </form>
      </div>
    </div>
  )
}
