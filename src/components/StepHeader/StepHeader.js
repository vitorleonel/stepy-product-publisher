const StepHeader = ({ title, description }) => {
  return (
    <div className="steps-item__header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StepHeader;
