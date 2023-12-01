import { FC } from 'react';
import { ErrorTagProp } from '@/Types/ComponentTypes';


const ErrorTag: FC<ErrorTagProp> = ({ text }: ErrorTagProp) => {


    return (
        <span className='text-red-400 font-light'>{text}</span>
    )
}

export default ErrorTag;