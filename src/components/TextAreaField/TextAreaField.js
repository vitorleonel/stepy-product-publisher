const TextareaField = ({
  id,
  label,
  name,
  onChange,
  placeholder,
  value,
  rows = 5,
}) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>

      <textarea
        className="field__textarea"
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        rows={rows}
      ></textarea>
    </div>
  );
};

export default TextareaField;
