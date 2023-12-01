"use client";
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Success, Error } from '@/utils/ReactToastHelpers';
import TextField from '@/components/PublicComponents/TextField';
import Button from '@/components/ReusableComponents/Button';

export default function Form() {
    const router = useRouter();

    const [username, setUserName] = useState<undefined | string>("");
    const [password, setPassword] = useState<undefined | string>("");


    const handleChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {

        if (name === 'username') {
            setUserName(e.target.value)
            return;
        }
        if (name === 'password') {
            setPassword(e.target.value)
            return;
        }
        return;
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const res = await fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({ username, password })
        })
        if (res.ok) {
            Success('Login Sucessful')
            router.push('/feed')
        } else {
            Error('Login Unsucessful')
        }
    }



    return (
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 rounded-lg w-full max-w-md'>
            <div className='w-full text-center'>
                <h3>Sign In</h3>
            </div>
            <div className='mt-3 mb-3'>
                <hr />
            </div>
            <div className='w-full flex flex-col gap-5'>

                <TextField label='Username' type='text' value={username} id='username' name='username' placeholder='Username' className='text-black w-full rounded-lg p-3' onChange={handleChange} />

                <TextField label='Password' type='password' value={password} id='password' name='password' placeholder='Password' className='text-black w-full rounded-lg p-3' onChange={handleChange} />
                <div className='w-full'>

                    <Button type='submit' text='sign in' className='rounded-lg bg-slate-500 w-full p-4' />

                </div>

            </div>
            <div className='flex w-full items-end justify-end mt-6'>
                <Link href='/signup'>
                    <span className='text-white font-bold hover:text-blue-500'>Not have account Sign Up ?</span>
                </Link>
            </div>

        </form>
    )
}