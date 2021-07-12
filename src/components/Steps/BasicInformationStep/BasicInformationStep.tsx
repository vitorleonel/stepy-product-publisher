import { PanelProps, FormGroup, InputGroup, TextArea, NumericInput } from "@blueprintjs/core";
import { useEffect, useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
import ImagesStep from "../ImagesStep";

import { ViewProps } from "./interfaces";

const BasicInformationStep = (props: PanelProps<ViewProps>) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const [nextButtonIsDisabled, setNextButtonIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if(!title || !description || !price) {
      setNextButtonIsDisabled(true);
    } else {
      setNextButtonIsDisabled(false);
    }
  }, [title, description, price])

  const openPanel = () => props.openPanel({
    renderPanel: ImagesStep,
    props: {
      ...props,
      title,
      description,
      price,
    },
  });

  return (
    <section className="steps-item">
      <StepHeader
        title="Basic product information"
        description="Take care in the title and description of the product as this is a very important factor when the user will decide for your product."
      />

      <FormGroup label="Título" labelFor="title-input">
        <InputGroup
          id="title-input"
          placeholder="The title of your product"
          large
          fill
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </FormGroup>

      <FormGroup label="Description" labelFor="description-input">
        <TextArea
          id="description-input"
          placeholder="The description of your product"
          rows={5}
          large
          fill
          growVertically
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </FormGroup>

      <FormGroup label="Price" labelFor="price-input">
        <NumericInput
          id="price-input"
          placeholder="The price of your product"
          leftIcon="dollar"
          min={0}
          stepSize={1}
          buttonPosition="none"
          large
          fill
          value={price}
          onValueChange={setPrice}
        />
      </FormGroup>

      <StepNavigation
        nextText="Product images"
        nextDisabled={nextButtonIsDisabled}
        prevHandler={props.closePanel}
        nextHandler={openPanel}
      />
    </section>
  );
}

export default BasicInformationStep;
