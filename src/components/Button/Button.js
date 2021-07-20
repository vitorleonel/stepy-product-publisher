import { classMerge } from '../../utils';

const Button = ({
  text,
  type,
  disabled,
  className = '',
  leftIcon,
  rightIcon,
  onClick,
  ...rest
}) => {
  const disabledClass = disabled ? 'button--disabled' : '';
  const typeClass = type ? `button--${type}` : '';

  const classes = classMerge(['button', typeClass, disabledClass, className]);

  return (
    <button className={classes} disabled={disabled} onClick={onClick} {...rest}>
      {leftIcon && (
        <ion-icon
          class="button__icon-left"
          name={leftIcon}
          size="small"
        ></ion-icon>
      )}
      {text}
      {rightIcon && (
        <ion-icon
          class="button__icon-right"
          name={rightIcon}
          size="small"
        ></ion-icon>
      )}
    </button>
  );
};

export default Button;
