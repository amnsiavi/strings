import { FC } from 'react';
import { ButtonProps } from '@/Types/ComponentTypes';

const Button: FC<ButtonProps> = ({ text, type, style, className }: ButtonProps) => {

    return (
        <button style={style} className={`${className}`} type={type}> {text}</button>
    )
}

export default Button;
