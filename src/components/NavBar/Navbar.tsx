import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className="fixed top-4 bg-transparent w-full flex z-50 px-8 py-4 rounded-lg">
            <div className="container rounded-xl p-2 mx-auto bg-white flex justify-between items-center">
                <div className='w-3/6 flex'>
                    <img className='w-2/5' src="/logo.png" alt="Company logo" />
                    <div className='flex w-3/5 items-center justify-around font-bold'>
                        <Link href={''}>Services</Link>
                        <Link href={''}>Media</Link>
                        <Link href={''}>Cases</Link>
                        <Link href={''}>FAQ</Link>
                        <Link href={''}>Contacts</Link>
                    </div>
                </div>
                <div className='w-3/6 text-green-600 flex gap-2 items-center justify-end font-bold me-5'>
                    <Link className='flex items-center gap-1 justify-between' href={''}>
                        <img className='h-4 w-4' src="/cell_phone.png" alt="" />
                        <span>+91 00000000</span>
                    </Link>
                    <Link className='flex items-center gap-1 justify-between' href={''}>
                        <img className='h-4 w-4' src="/email.png" alt="" />
                        <span>demo@gmail.com</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
