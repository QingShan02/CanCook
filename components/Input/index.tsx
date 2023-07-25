import {InputProps} from "@/util/Props/InputProps";

const Input = ({ ...props }: InputProps) => {
    return (
        <>
            <input type={props.type} className={props.className} id={props.id} name={props.name}
                placeholder={props.placeholder} value={props.value}
                onClick={props.onClick} onChange={props.onChange} {...props.register} />
        </>
    );
}

export default Input;