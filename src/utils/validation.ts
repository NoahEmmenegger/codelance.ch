import { Validator } from '../types/Validation';

export default function validate(value: string, validators: Validator[] = []): string[] {
    const errors: string[] = [];

    validators.forEach((validator) => {
        switch (validator) {
            case 'REQUIRED':
                if (value.trim().length === 0) {
                    errors.push('validation_error_required');
                }
                break;
            case 'MIN_LENGTH':
                if (value.trim().length < 5) {
                    errors.push('validation_error_min_length');
                }
                break;
            case 'EMAIL':
                if (value.matchAll(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    errors.push('validation_error_email');
                }
            default:
                break;
        }
    });

    return errors;
}
