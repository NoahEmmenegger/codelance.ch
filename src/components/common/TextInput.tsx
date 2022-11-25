import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Validator } from '../../types/Validation';
import validate from '../../utils/validation';

type TextInputProps = {
    id: string;
    label: string;
    value: any;
    type?: 'text' | 'email' | 'password';
    onChange: (value: any) => void;
    validations: Validator[];
};

export default function TextInput({ id, label, value, type = 'text', onChange, validations }: TextInputProps) {
    const { t } = useTranslation('common');
    const [errorMessage, setErrorMessage] = useState('');
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                value={value[id]}
                onChange={(event) => {
                    const newVal = event.target.value;
                    onChange({ ...value, [id]: newVal });
                    setErrorMessage(validate(newVal, validations)[0]);
                }}
                type={type}
                id={id}
                name={id}
            />
            {errorMessage && <p className="text-red-500">{t(errorMessage)}</p>}
        </div>
    );
}
