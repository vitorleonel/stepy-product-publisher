import { PanelProps } from "@blueprintjs/core";
import { useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
import TextAreaField from "../../TextAreaField";
import PublishedStep from "../PublishedStep";

import { ViewProps } from "./interfaces";

const AdditionalInformationStep = (props: PanelProps<ViewProps>) => {
  const [additionalInformation, setAdditionalInformation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const openPanel = () => {
    setLoading(true);

    setTimeout(() => {
      props.openPanel({
        renderPanel: PublishedStep,
        title: 'PublishedStep',
        props: {
          ...props,
          additionalInformation,
        },
      });
    }, 1000);
  };

  return (
    <section className="steps-item">
      <StepHeader
        title="Additional information"
        description="If the product needs it, you can enter extra information below."
      />

      <TextAreaField
        rows={5}
        name="description"
        label="Description (Optional)"
        placeholder="Your product's extra information"
        id="description-input"
        value={additionalInformation}
        onChange={(event) => setAdditionalInformation(event.target.value)}
      />

      <StepNavigation
        nextText="Publish product"
        nextIcon="fas fa-check"
        nextDisabled={loading}
        prevHandler={props.closePanel}
        nextHandler={openPanel}
      />
    </section>
  );
}

export default AdditionalInformationStep;
