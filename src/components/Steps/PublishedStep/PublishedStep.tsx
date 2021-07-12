import { PanelProps } from "@blueprintjs/core";
// @ts-ignore
import Lottie from "react-lottie";

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

  return (
    <section className="steps-item">
      <Lottie options={defaultOptions} height={208} width={208} />

      <div className="published">
        <h2 className="bp3-heading">Congratulations!</h2>
        <p>You have just published your product <strong>{props.title}</strong>.</p>
      </div>
    </section>
  );
};

export default PublishedStep;
