import React from 'react'

export default function Footer() {
    return (
        <footer className='md:px-20 md:py-10'>
            <div className="bg-black md:rounded-2xl text-white py-10">
                <div className="container mx-auto px-5 md:px-10 lg:px-20">
                    <img src="/logo-inverted.png" alt="Company Logo" className="h-12 w-auto mx-auto mb-1 md:mb-4" />
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-8 md:space-y-0">
                        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
                            <span className="inline-flex items-center space-x-2 mb-1 md:mb-4">
                                <img src="/cell_phone-grey.png" alt="Phone Icon" className="h-4 w-4" />
                                <span className="text-slate-400 font-semibold">Contact nums</span>
                            </span>
                            <span className="text-lg font-medium">+91 0000000000</span>
                        </div>
                        <div className="text-center md:text-left flex flex-col items-center md:items-start">
                            <span className="inline-flex items-center space-x-2 mb-1 md:mb-4">
                                <img src="/email-grey.png" alt="Email Icon" className="h-4 w-4" />
                                <span className="text-slate-400 font-semibold">Gmail</span>
                            </span>
                            <a href='mailto:demo@gmail.com' className="text-lg font-medium">demo@gmail.com</a>
                        </div>
                        <div className="text-center md:text-left flex flex-col items-center md:items-start">
                            <span className="inline-flex items-center space-x-2 mb-1 md:mb-4">
                                <img src="/location-grey.png" alt="Location Icon" className="h-4 w-4" />
                                <span className="text-slate-400 font-semibold">Address</span>
                            </span>
                            <span className="text-lg font-medium">Mumbai, India</span>
                        </div>
                        <div className="text-center md:text-left flex flex-col items-center md:items-start">
                            <span className="inline-flex items-center space-x-2 mb-1 md:mb-4">
                                <img src="/document.png" alt="Request Icon" className="h-4 w-4" />
                                <span className="text-slate-400 font-semibold">Leave a request</span>
                            </span>
                            <a href="#" className="text-lg font-medium underline">Leave a request</a>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <p className="text-sm text-gray-400">We work throughout the world</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
