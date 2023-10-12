"use client"
import React, { FormEvent, useState } from 'react';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const isSubmitDisabled = !email || !email.includes('@');


  const handleSubmit = (e: FormEvent) => {
    // e.preventDefault();
    // Handle form submission here using 'email' state.
  };

  return (
    <div className='bg-forest-100 p-4'>
      <h2 className='text-2xl font-semibold text-gray-800'>
        Subscribe to My Newsletter
      </h2>
      <p className='text-gray-600 mt-2'>
        Get the latest articles and exclusive content straight to your inbox.
      </p>
      <form action="https://connordphillips.us10.list-manage.com/subscribe/post?u=46d4ca194e984dd223cf8f4b0&amp;id=07980a6312&amp;f_id=00f4a6e5f0" onSubmit={handleSubmit} id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className='mt-4'>
        <input type="hidden" name="u" value="46d4ca194e984dd223cf8f4b0" />
        <input type="hidden" name="id" value="07980a6312" />
        <div className='flex flex-col'>
          <label htmlFor='email' className='text-gray-600'>
            Email Address
          </label>
          <input
            type='email'
            id="mce-EMAIL"
            name="MERGE0"
            placeholder='Your email address'
            className='py-2 px-3 border rounded-md mt-1 focus:ring focus:ring-aqua-400'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div aria-hidden="true" className='hidden'>
        { /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */ }
        <input type="text" name="b_46d4ca194e984dd223cf8f4b0_07980a6312" tabindex="-1" value="" />
        </div>
        <button
          type='submit'
          className={`bg-aqua-500 text-white py-2 rounded-md mt-4 p-3 hover:bg-aqua-600 focus:outline-none focus:ring focus:ring-aqua-400 ${
            isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitDisabled}
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
