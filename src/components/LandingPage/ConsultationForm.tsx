import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

interface FormData {
  fullName: string;
  phoneNumber: string;
  businessName: string;
  businessEmail: string;
}

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    businessName: '',
    businessEmail: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phoneNumber: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className="w-4/6 mt-10 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">
        Leave your contacts and we will call you back within 30 minutes
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-3">
        <div className="col-span-9 grid grid-cols-12 gap-3">
          <div className="mb-4 col-span-6">
            <label className="block text-gray-700">Full name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:border-blue-300"
            />
          </div>
          <div className="mb-4 col-span-6">
            <label className="block text-gray-700">Phone number</label>
            <PhoneInput
              country={'us'}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              inputClass="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:border-blue-300"
              containerClass="block w-full border-0"
              inputStyle={{ width: '100%', border: 0, borderBottom: "1px solid" }}
              enableSearch={false}
            />
          </div>
          <div className="mb-4 col-span-6">
            <label className="block text-gray-700">Business name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Business name"
              required
              className="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:border-blue-300"
            />
          </div>
          <div className="mb-4 col-span-6">
            <label className="block text-gray-700">Business mail</label>
            <input
              type="email"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="Business mail"
              required
              className="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:border-blue-300"
            />
          </div>
        </div>
        <button
          type="submit"
          className="h-14 mt-auto col-span-3 py-2 px-4 bg-lime-600 text-white rounded-md hover:bg-lime-700 focus:outline-none"
        >
          Get consultation
        </button>
      </form>
    </div>
  );
};
