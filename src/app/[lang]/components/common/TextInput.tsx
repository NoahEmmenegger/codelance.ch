import { useEffect, useState } from 'react';
import useTranslation from '../../hooks/useTranslations';
import { Validator } from '../../types/Validation';
import validate from '../../utils/validation';

type TextInputProps = {
    id: string;
    label: string;
    placeholder?: string;
    value: any;
    type?: 'text' | 'email' | 'password';
    onError?: (error: boolean) => void;
    onChange: (value: any) => void;
    validations: Validator[];
};

export default function TextInput({
    id,
    label,
    value,
    placeholder = '',
    type = 'text',
    onChange,
    onError,
    validations,
}: TextInputProps) {
    const { t } = useTranslation('common');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (onError) {
            onError(errorMessage == undefined);
        }
    }, [errorMessage, onError]);

    return (
        <div className="my-3">
            <label className="mb-10" htmlFor={id}>
                {label}
            </label>
            <input
                data-hj-allow
                placeholder={placeholder}
                className="border border-gray-300 rounded-md p-2 w-full mt-2"
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
