import { PanelProps } from "@blueprintjs/core";
// @ts-ignore
import Lottie from "react-lottie";

import Button from "../../Button";
import CategoryStep from "../CategoryStep";

import animationData from './animationData.json'
import { ViewProps } from "./interfaces";

const PublishedStep = (props: PanelProps<ViewProps>) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const openPanel = () => props.openPanel({
    renderPanel: CategoryStep,
    title: 'CategoryStep',
  });

  return (
    <section className="steps-item">
      <Lottie options={defaultOptions} height={208} width={208} />

      <div className="published">
        <h2 className="bp3-heading">Congratulations!</h2>
        <p>You have just published your product <strong>{props.title}</strong>.</p>

        <Button
          leftIcon="fas fa-plus"
          text="Add another product"
          type="secondary"
          onClick={openPanel}
        />
      </div>
    </section>
  );
};

export default PublishedStep;
