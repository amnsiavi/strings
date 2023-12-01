import React from 'react';
import { ToastContainer } from 'react-toastify'



export default function PublicLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className='min-h-screen  bg-black text-white flex items-center justify-center m-auto'>
            <ToastContainer />
            {children}
        </main>
    )

}