'use client';

import { useState, useRef } from 'react';

interface LeadFormProps {
  className?: string;
}

export default function LeadForm({ className = '' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    consultationType: '',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  // Spam-gate metadata (matches CRM expectations)
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
          company_website: (document.getElementById('company_website') as HTMLInputElement)?.value ?? '',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', consultationType: '', address: '', message: '' });
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500';

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
      <input
        type="text"
        id="company_website"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] w-px h-px opacity-0"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
          placeholder="(404) 555-0123"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Interested In
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={inputClass}
        >
          <option value="">Select a service</option>
          <option value="home-organization">Home Organization</option>
          <option value="office-organization">Office Organization</option>
          <option value="move-in-out">Move-In / Move-Out</option>
          <option value="custom-closet">Custom Closet Design</option>
          <option value="decluttering">Decluttering</option>
        </select>
      </div>

      <div>
        <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-1">
          Will this appointment be Zoom or in-person? *
        </label>
        <select
          id="consultationType"
          required
          value={formData.consultationType}
          onChange={(e) => setFormData({ ...formData, consultationType: e.target.value, address: '' })}
          className={inputClass}
        >
          <option value="">Select an option</option>
          <option value="in-person">In-Person Consultation</option>
          <option value="zoom">Zoom Consultation</option>
        </select>
      </div>

      {formData.consultationType === 'in-person' && (
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Your Address *
          </label>
          <textarea
            id="address"
            required
            rows={2}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className={inputClass}
            placeholder="Street address, city, ZIP"
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass}
          placeholder="Tell us about your organization needs..."
        />
      </div>

      <p className="text-xs text-gray-500">
        We offer a free 15-minute consultation.
      </p>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Schedule Consultation'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center font-medium">
          Thank you! We&apos;ll be in touch soon.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-center font-medium">
          Something went wrong. Please call us at (404) 737-9453.
        </p>
      )}
    </form>
  );
}
