import { FC } from 'react';
import { InputFieldProp } from '@/Types/ComponentTypes';

const InputField: FC<InputFieldProp> = ({ name, value, onChange, type, id, label, className }: InputFieldProp) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>{label}</label>
            <input name={name} type={type} id={id} onChange={onChange} value={value} className={`${className}`} />

        </div>
    )
}
export default InputField;
