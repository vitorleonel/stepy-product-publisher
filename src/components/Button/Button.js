import { classMerge } from '../../utils';

const Button = ({
  text,
  type,
  disabled,
  className = '',
  leftIcon,
  rightIcon,
  onClick,
}) => {
  const disabledClass = disabled ? 'button--disabled' : '';
  const typeClass = type ? `button--${type}` : '';

  const classes = classMerge(['button', typeClass, disabledClass, className]);

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {leftIcon && <i className={`button__icon-left ${leftIcon}`} />}
      {text}
      {rightIcon && <i className={`button__icon-right ${rightIcon}`} />}
    </button>
  );
};

export default Button;
