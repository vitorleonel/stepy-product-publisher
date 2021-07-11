import { PanelProps, FormGroup, TextArea } from "@blueprintjs/core";
import { useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";

import { ViewProps } from "./interfaces";

const AdditionalInformationStep = (props: PanelProps<ViewProps>) => {
  const [additionalInformation, setAdditionalInformation] = useState<string>('');

  return (
    <section className="steps-item">
      <StepHeader
        title="Additional information"
        description="If the product needs it, you can enter extra information below."
      />

      <FormGroup label="Description" labelFor="description-input">
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
        prevHandler={props.closePanel}
        nextHandler={() => {}}
      />
    </section>
  );
}

export default AdditionalInformationStep;
