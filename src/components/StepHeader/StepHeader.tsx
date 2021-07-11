import { ViewProps } from "./interfaces";

const StepHeader = ({ title, description }: ViewProps): JSX.Element => {
  return (
    <div className="steps-item__header">
      <h2 className="bp3-heading">{title}</h2>
      <p className="bp3-running-text bp3-text-large">{description}</p>
    </div>
  );
};

export default StepHeader;
