import React from 'react'

export default function Footer() {
    return (
        <div className="bg-black text-white py-10">
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                    <img src="/logo.png" alt="Company Logo" className="h-12 w-auto mx-auto mb-4" />
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <span className="inline-flex items-center space-x-2 mb-4">
                            <img src="/cell_phone.png" alt="Phone Icon" className="h-6 w-6" />
                            <span>Contact nums</span>
                        </span>
                        <span className="text-lg font-medium">+91 0000000000</span>
                    </div>
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <span className="inline-flex items-center space-x-2 mb-4">
                            <img src="/email.png" alt="Email Icon" className="h-6 w-6" />
                            <span>Gmail</span>
                        </span>
                        <span className="text-lg font-medium">demo@gmail.com</span>
                    </div>
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <span className="inline-flex items-center space-x-2 mb-4">
                            <img src="/location.png" alt="Location Icon" className="h-6 w-6" />
                            <span>Address</span>
                        </span>
                        <span className="text-lg font-medium">Mumbai, India</span>
                    </div>
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <span className="inline-flex items-center space-x-2 mb-4">
                            <img src="/request-icon.png" alt="Request Icon" className="h-6 w-6" />
                            <span>Leave a request</span>
                        </span>
                        <a href="#" className="text-lg font-medium underline">Leave a request</a>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <p className="text-sm text-gray-400">We work throughout the world</p>
                </div>
            </div>
        </div>
    )
}
