type IButtonType = 'primary' | 'secondary';

export interface IButtonProps {
  text: string;
  type?: IButtonType;
  className?: string;
  disabled?: boolean;
  rightIcon?: string;
  leftIcon?: string;
  onClick?: () => void;
}
