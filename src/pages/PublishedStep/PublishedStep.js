import Button from '../../components/Button';

const PublishedStep = ({ state }) => {
  const publishAnotherProduct = () => {
    window.location = '/';
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
          text="Publish another product"
          type="secondary"
          onClick={publishAnotherProduct}
        />
      </div>
    </section>
  );
};

export default PublishedStep;
