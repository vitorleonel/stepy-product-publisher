// @ts-ignore
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";

import Button from "../../Button";

import animationData from './animationData.json'
import { IPublishedStepProps } from "./interfaces";

const PublishedStep = ({ state }: IPublishedStepProps) => {
  const history = useHistory();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const resetRouteHistory = () => {
    const calculatedInitialPoint = (history.length - 2) * -1;

    history.go(calculatedInitialPoint);
  };

  return (
    <section className="steps-item">
      <Lottie options={defaultOptions} height={208} width={208} />

      <div className="published">
        <h2 className="bp3-heading">Congratulations!</h2>
        <p>You have just published your product <strong>{state.title}</strong>.</p>

        <Button
          leftIcon="fas fa-plus"
          text="Add another product"
          type="secondary"
          onClick={resetRouteHistory}
        />
      </div>
    </section>
  );
};

export default PublishedStep;
