import { ChangeEvent, FC } from 'react';
import { TextFieldProps } from '@/Types/ComponentTypes';

const TextField: FC<TextFieldProps> = ({ label, type, value, id, placeholder, className, onChange, name }: TextFieldProps) => {


    return (
        <div className='flex flex-col gap-2 w-full'>
            <label>{label}</label>
            <input
                type={type}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    onChange(e, e.target.name)
                }}
                value={value}
                required
                id={id}
                placeholder={placeholder}
                className={`${className}`}
                name={name}

            />
        </div>
    )
}
export default TextField;