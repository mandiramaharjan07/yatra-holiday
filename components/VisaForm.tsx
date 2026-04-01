'use client';

import { useState } from 'react';

export default function VisaForm() {
  const [formData, setFormData] = useState({
    destination: '',
    adults: '1',
    children: '0',
    date: '',
    duration: '',
    name: '',
    email: '',
    contact: ''
  });

  const destinations = [
    "China",
    "Europe (Schengen)",
    "Japan",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Vietnam"
  ];

  const labelStyle = "block font-headline font-bold text-sm uppercase tracking-widest mb-3 text-on-surface border-l-4 border-primary pl-3";
  const inputStyle = "w-full bg-surface-container-low border border-surface-variant/30 px-4 py-4 focus:outline-none focus:border-primary transition-colors font-body rounded-none text-on-surface";

  return (
    <div className="bg-white p-8 md:p-14 shadow-2xl border border-surface-variant/50 rounded-none h-full">
      <div className="mb-12">
        <h2 className="font-headline font-extrabold text-4xl text-on-background mb-4 uppercase tracking-tighter">
          Inquiry Form
        </h2>
        <div className="h-1.5 w-24 bg-primary mb-4"></div>
        <p className="text-secondary font-body">Submit your details for expert Visa services in Kathmandu.</p>
      </div>

      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        {/* DESTINATION */}
        <div>
          <label className={labelStyle}>Destination:</label>
          <select 
            className={inputStyle}
            value={formData.destination}
            onChange={(e) => setFormData({...formData, destination: e.target.value})}
          >
            <option value="">Select Destination</option>
            {destinations.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        {/* TRAVELERS */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Adults:</label>
            <input 
              type="number" 
              min="1" 
              className={inputStyle}
              value={formData.adults}
              onChange={(e) => setFormData({...formData, adults: e.target.value})}
            />
          </div>
          <div>
            <label className={labelStyle}>Children:</label>
            <input 
              type="number" 
              min="0" 
              className={inputStyle}
              value={formData.children}
              onChange={(e) => setFormData({...formData, children: e.target.value})}
            />
          </div>
        </div>

        {/* DATES */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Travel Date:</label>
            <input 
              type="date" 
              className={inputStyle}
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div>
            <label className={labelStyle}>Duration (Days):</label>
            <input 
              type="number" 
              placeholder="Days" 
              className={inputStyle}
              value={formData.duration}
              onChange={(e) => setFormData({...formData, duration: e.target.value})}
            />
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <div className="space-y-6">
          <label className={labelStyle}>Personal Details:</label>
          <input 
            type="text" 
            placeholder="Full Name" 
            className={inputStyle}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className={inputStyle}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="tel" 
            placeholder="Contact Number" 
            className={inputStyle}
            value={formData.contact}
            onChange={(e) => setFormData({...formData, contact: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-primary text-white py-6 font-headline font-extrabold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all rounded-none shadow-lg mt-8"
        >
          Request Visa Assistance
        </button>
      </form>
    </div>
  );
}
