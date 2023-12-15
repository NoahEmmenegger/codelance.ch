import { useState } from 'react';

type RadioButtonProps = {
    items: string[];
    onChange: (value: string) => void;
    defaultValue: string;
};

export default function RadioButton({ items, onChange, defaultValue }: RadioButtonProps) {
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState(defaultValue);

    return (
        <div className="flex items-center">
            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <input
                        data-hj-allow
                        type="radio"
                        name="radio"
                        id={item}
                        value={item}
                        checked={value === item}
                        onChange={(e) => {
                            const newVal = e.target.value;
                            setValue(newVal);
                            onChange(newVal);
                        }}
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    );
}
