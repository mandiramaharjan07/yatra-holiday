'use client';

import { useState, FormEvent } from 'react';

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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const destinations = [
    "China",
    "Europe (Schengen)",
    "Japan",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Vietnam"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("access_key", "550dc829-d72f-4081-b765-6da444df2c52");
    formDataToSubmit.append("subject", "New Inquiry: Yaatra Holiday Website (Visa)");
    formDataToSubmit.append("from_name", formData.name || "Yaatra Website User");
    
    // Add all form fields
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Submission failed", data);
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Submission error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const labelStyle = "block text-sm font-body font-bold text-secondary uppercase tracking-widest mb-2";
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

      {submitted ? (
        <div className="py-20 text-center">
          <span className="material-symbols-outlined text-primary text-7xl mb-6 block">check_circle</span>
          <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Thank you!</h3>
          <p className="text-secondary font-body text-lg">Your message has been sent to our team.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-10 text-primary font-headline font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* DESTINATION */}
          <div>
            <label htmlFor="destination" className={labelStyle}>Select Destination</label>
            <select 
              id="destination"
              name="destination"
              required
              aria-label="Select your destination"
              className={inputStyle}
              value={formData.destination}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
            >
              <option value="">Select Destination...</option>
              <option value="china">China</option>
              <option value="vietnam">Vietnam</option>
              <option value="london">London England Scotland</option>
              <option value="europe">Europe</option>
              <option value="japan">Japan Osaka</option>
              <option value="bali">Bali</option>
              <option value="southeast-asia">Thailand + Singapore + Malaysia</option>
              <option value="thailand">Thailand</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* TRAVELERS */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="adults" className={labelStyle}>Adults</label>
              <input 
                id="adults"
                name="adults"
                type="number" 
                min="1" 
                required
                aria-label="Number of adults"
                className={inputStyle}
                value={formData.adults}
                onChange={(e) => setFormData({...formData, adults: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="children" className={labelStyle}>Children</label>
              <input 
                id="children"
                name="children"
                type="number" 
                min="0" 
                required
                aria-label="Number of children"
                className={inputStyle}
                value={formData.children}
                onChange={(e) => setFormData({...formData, children: e.target.value})}
              />
            </div>
          </div>

          {/* DATES */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="travel-date" className={labelStyle}>Travel Date</label>
              <input 
                id="travel-date"
                name="travel-date"
                type="date" 
                required
                aria-label="Preferred travel date"
                className={inputStyle}
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="duration" className={labelStyle}>Duration (Days)</label>
              <input 
                id="duration"
                name="duration"
                type="number" 
                min="1"
                required
                placeholder="Number of days" 
                aria-label="Trip duration in days"
                className={inputStyle}
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
              />
            </div>
          </div>

          {/* PERSONAL DETAILS */}
          <div className="space-y-6">
            <div>
              <label htmlFor="full-name" className={labelStyle}>Full Name</label>
              <input 
                id="full-name"
                name="full-name"
                type="text" 
                required
                placeholder="Your Full Name" 
                aria-label="Your full name"
                className={inputStyle}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="visa-email" className={labelStyle}>Email Address</label>
              <input 
                id="visa-email"
                name="email"
                type="email" 
                required
                placeholder="Your Email Address" 
                aria-label="Your email address"
                className={inputStyle}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelStyle}>Contact Number</label>
              <input 
                id="phone"
                name="phone"
                type="tel" 
                required
                placeholder="Your Phone Number" 
                aria-label="Your contact number"
                className={inputStyle}
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white py-6 font-headline font-extrabold uppercase tracking-[0.2em] transition-all rounded-none shadow-lg mt-8 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`}
          >
            {loading ? 'Sending...' : 'Request Visa Assistance'}
          </button>
        </form>
      )}
    </div>
  );
}
