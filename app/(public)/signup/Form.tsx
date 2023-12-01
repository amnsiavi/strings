"use client";

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Success, Error } from '@/utils/ReactToastHelpers';
import InputField from '@/components/ReusableComponents/InputField';
import Button from '@/components/ReusableComponents/Button';
import ErrorTag from '@/components/ReusableComponents/ErrorTag';

export default function Form() {
    const router = useRouter();

    const [username, setUserName] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
    const [confirmPassword, setConfirmPassword] = useState<string | undefined>('')
    const [error, setError] = useState<boolean>(false);
    const [userNameError, setUserNameError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        if (username?.trim().length === 0) {
            setUserNameError(true);
            return;
        } else {
            setUserNameError(false);
        }
        if (password?.trim().length === 0) {
            setPasswordError(true);
            return;
        } else {
            setPasswordError(false);
        }


        const res = await fetch('/api/signup', {
            method: 'post',
            body: JSON.stringify({ username, password })
        })
        if (res.ok) {
            Success('Registered sucessfully')
            router.push('/signin')
        } else {
            Error('Failed to Register')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 rounded-lg w-full max-w-md'>
            <div className='w-full text-center'>
                <h3>Sign Up</h3>

            </div>
            <div className='mt-3 mb-3'>
                <hr />


            </div>
            <div className='w-full flex flex-col gap-5'>
                <InputField
                    label='Username'
                    name='username'
                    id='username'
                    placeholder='Username'
                    className='text-black w-full rounded-lg p-3'
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}

                />
                {userNameError ? <ErrorTag text='Email is required' /> : null}
                <InputField
                    label='Password'
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    className='text-black w-full rounded-lg p-3'
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}

                />
                {error ? <ErrorTag text='Passwords did not matched' /> : null}
                <InputField
                    label='Confirm Password'
                    name='confirmPassword'
                    id='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    className='text-black w-full rounded-lg p-3'
                    value={confirmPassword}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}

                />

            </div>
            <Button text='register' type='submit' className='bg-slate-600 w-full rounded-lg mt-5 p-2' />

        </form>
    )
}