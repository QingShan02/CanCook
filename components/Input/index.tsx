import { InputProps } from "@/util/Props/InputProps";

const Input = ({ ...props }: InputProps) => {
    // let isChecked = false;

    // if (props.type === "checkbox") {
    //     isChecked = props.checkedValue.includes(props.value);
    // } else if (props.type === "radio") {
    //     isChecked = props.value === props.checkedValue;
    // }
    return (
        <>
            <input type={props.type} className={props.className} id={props.id} name={props.name}
                placeholder={props.placeholder} value={props.value}
                onClick={props.onClick} onChange={props.onChange} {...props.register} defaultValue={...props.defaultValue} />
        </>
    );
}

export default Input;