import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

interface FormData {
  fullName: string;
  phoneNumber: string;
  businessName: string;
  businessEmail: string;
}

export const Form = ({isDiscussionForm, buttonText, handleSubmit} : {isDiscussionForm: boolean, buttonText: string, handleSubmit: (e:any)=>void}) => {
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

  return (
    <div className={`w-full ${isDiscussionForm ? "md:w-full" : "md:w-4/6"} mt-10 p-6 bg-white rounded-lg shadow-md`}>
      {!isDiscussionForm && (<h3 className="text-xl font-semibold mb-4">
        Leave your contacts and we will call you back within 30 minutes
      </h3>)}
      <form onSubmit={handleSubmit} className={`${isDiscussionForm ? "justify-end" : ""} grid grid-cols-12 gap-3`}>
        <div className={`${isDiscussionForm ? "col-span-12" : "col-span-9"} grid grid-cols-12 gap-3`}>
          <div className="mb-4 col-span-12 sm:col-span-6">
            <label className="block text-gray-700">Full name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="My Name" required className="mt-1 block text-xl text-black font-bold w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:border-blue-300" />
          </div>
          <div className="mb-4 col-span-12 sm:col-span-6">
            <label className="block text-gray-700">Phone number</label>
            <PhoneInput country={'us'} placeholder='+91 000000000' value={formData.phoneNumber} onChange={handlePhoneChange} inputClass="mt-1 block text-xl text-black font-bold w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:border-blue-300" containerClass="block w-full border-0" inputStyle={{ width: '100%', border: 0, borderBottom: "1px solid" }} enableSearch={false}
            />
          </div>
          <div className="mb-4 col-span-12 sm:col-span-6">
            <label className="block text-gray-700">Business name</label>
            <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="ABC Technologies PVT LTD" required className="mt-1 block text-xl text-black font-bold w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:border-blue-300" />
          </div>
          <div className="mb-4 col-span-12 sm:col-span-6">
            <label className="block text-gray-700">Business mail</label>
            <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} placeholder="demoaccount@gmail.com" required className="mt-1 block text-xl text-black font-bold w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:border-blue-300" />
          </div>
        </div>
        <button
          type="submit"
          className={`${isDiscussionForm ? "col-span-6 text-sm justify-self-end bg-yellow-400 hover:bg-yellow-500" : "col-span-7 sm:col-span-5 text-sm md:text-lg md:col-span-3"} h-auto mt-auto py-2 px-4 bg-lime-600 text-white rounded-md hover:bg-lime-700 focus:outline-none`}
        >{buttonText}
        </button>
      </form>
    </div>
  );
};
