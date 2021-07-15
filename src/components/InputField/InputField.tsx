import { IInputFieldProps } from "./interfaces";

const InputField = (props: IInputFieldProps) => {
  const {
    id,
    label,
    name,
    onChange,
    placeholder,
    type = 'text',
    value
  } = props;

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>

      <input
        className="field__input"
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
}

export default InputField;
