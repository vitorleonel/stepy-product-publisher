import { classMerge } from "../../utils";
import { ICardProps } from "./interfaces";

const Card = ({ children, className = '', onClick }: ICardProps): JSX.Element => {
  const classes = classMerge(['card', className]);

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
