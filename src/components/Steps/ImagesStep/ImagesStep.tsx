import { PanelProps } from "@blueprintjs/core";
import { useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
import AdditionalInformationStep from "../AdditionalInformationStep";

import { ViewProps } from "./interfaces";

const ImagesStep = (props: PanelProps<ViewProps>) => {
  const [images, setImages] = useState<File[]>([]);

  const openPanel = () => props.openPanel({
    renderPanel: AdditionalInformationStep,
    props: {
      ...props,
      images,
    },
  })

  return (
    <section className="steps-item">
      <StepHeader
        title="Product images"
        description="Choose the best images to always make your product stand out. Do not insert watermarked images."
      />

      <StepNavigation
        nextText="Define additional information"
        prevHandler={props.closePanel}
        nextHandler={openPanel}
      />
    </section>
  );
}

export default ImagesStep;
