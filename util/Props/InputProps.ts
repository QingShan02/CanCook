import { UseFormRegisterReturn } from 'react-hook-form';
export interface InputProps {
    type: string,
    className?: string,
    id?: any,
    name: string,
    placeholder?: string,
    value?: any,
    defaultValue?: any,
    disabled?: string,
    min?: number,
    max?: number,
    width?: number,
    onClick?: () => void,
    onChange?: (event: any) => void,
    register?: UseFormRegisterReturn;
    checkedValue?: any
}