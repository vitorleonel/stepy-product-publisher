const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__indicator"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
