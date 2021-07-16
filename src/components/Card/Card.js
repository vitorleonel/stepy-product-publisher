import { classMerge } from '../../utils';

const Card = ({ children, className = '', onClick }) => {
  const classes = classMerge(['card', className]);

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
