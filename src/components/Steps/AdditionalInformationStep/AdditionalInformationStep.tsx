import { PanelProps, FormGroup, TextArea } from "@blueprintjs/core";
import { useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
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

      <FormGroup label="Description" labelInfo="(Optional)" labelFor="description-input">
        <TextArea
          id="description-input"
          placeholder="Your product's extra information"
          rows={5}
          large
          fill
          growVertically
          value={additionalInformation}
          onChange={(event) => setAdditionalInformation(event.target.value)}
        />
      </FormGroup>

      <StepNavigation
        nextText="Publish product"
        nextIcon="tick"
        nextLoading={loading}
        prevHandler={props.closePanel}
        nextHandler={openPanel}
      />
    </section>
  );
}

export default AdditionalInformationStep;
