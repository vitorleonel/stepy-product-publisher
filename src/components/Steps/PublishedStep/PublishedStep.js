import { useHistory } from 'react-router-dom';

import Button from '../../Button';

const PublishedStep = ({ state }) => {
  const history = useHistory();

  const resetRouteHistory = () => {
    const calculatedInitialPoint = (history.length - 2) * -1;

    history.go(calculatedInitialPoint);
  };

  return (
    <section className="steps-item">
      <div className="published">
        <h2 className="bp3-heading">Congratulations!</h2>
        <p>
          You have just published your product <strong>{state.title}</strong>.
        </p>

        <Button
          leftIcon="add-outline"
          text="Add another product"
          type="secondary"
          onClick={resetRouteHistory}
        />
      </div>
    </section>
  );
};

export default PublishedStep;
