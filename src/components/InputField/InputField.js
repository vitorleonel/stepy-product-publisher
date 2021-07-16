const InputField = ({
  id,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>

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
};

export default InputField;
