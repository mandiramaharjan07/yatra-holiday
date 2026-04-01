'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const labelStyle = "font-headline font-bold text-xs uppercase tracking-widest text-secondary mb-2 block";
  const inputStyle = "w-full bg-white border border-surface-variant/30 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-body rounded-none text-on-surface";

  return (
    <div className="bg-surface-container-low p-10 md:p-16 rounded-none shadow-sm h-full">
      <div className="mb-12">
        <h2 className="font-headline font-extrabold text-4xl text-on-background mb-4 uppercase tracking-tighter">
          Get in Touch
        </h2>
        <p className="text-secondary font-body">Send us a message and our specialists will curate a response within 24 hours.</p>
      </div>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className={labelStyle}>First Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className={inputStyle}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className={labelStyle}>Contact Number</label>
            <input 
              type="tel" 
              placeholder="+977-98..." 
              className={inputStyle}
              value={formData.contact}
              onChange={(e) => setFormData({...formData, contact: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className={labelStyle}>Email Address</label>
          <input 
            type="email" 
            placeholder="example@mail.com" 
            className={inputStyle}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className={labelStyle}>Message</label>
          <textarea 
            rows={4} 
            placeholder="How can our travel experts assist you?" 
            className={inputStyle}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-primary text-white font-headline font-black uppercase tracking-[0.2em] py-5 hover:bg-primary/90 transition-colors shadow-xl rounded-none text-sm"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  );
}
