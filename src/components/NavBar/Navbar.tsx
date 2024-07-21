import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className="fixed top-4 bg-transparent w-full flex z-50 px-8 py-4 rounded-lg">
            <div className="container rounded-xl p-2 mx-auto bg-white flex flex-col md:flex-row justify-center md:justify-between items-center">
                <div className='w-full md:w-3/6 flex flex-col md:flex-row justify-center'>
                    <img className='w-24 h-18 md:w-2/5  mx-auto' src="/logo.png" alt="Company logo" />
                    <div className='flex w-full md:w-3/5 items-center gap-2 justify-center md:justify-around font-bold'>
                        <Link className='text-sm md:text-lg' href={'/services'}>Services</Link>
                        <Link className='text-sm md:text-lg' href={'/media'}>Media</Link>
                        <Link className='text-sm md:text-lg' href={'cases'}>Cases</Link>
                        <Link className='text-sm md:text-lg' href={'faqs'}>FAQ</Link>
                        <Link className='text-sm md:text-lg' href={'contacts'}>Contacts</Link>
                    </div>
                </div>
                <div className='w-full md:w-3/6 text-green-600 flex flex-col md:flex-row pt-3 md:pt-0 md:gap-2 items-center justify-center md:justify-end font-bold md:me-5'>
                    <Link className='flex items-center gap-1 justify-between' href={''}>
                        <img className='h-4 w-4' src="/cell_phone.png" alt="Cell phone icon" />
                        <span>+91 00000000</span>
                    </Link>
                    <a className='flex items-center gap-1 justify-between' href={'mailto:demo@gmail.com'}>
                        <img className='h-4 w-4' src="/email.png" alt="Email icon" />
                        <span>demo@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
