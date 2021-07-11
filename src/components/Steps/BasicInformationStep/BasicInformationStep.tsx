import { PanelProps, FormGroup, InputGroup, TextArea, NumericInput } from "@blueprintjs/core";
import { useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
import ImagesStep from "../ImagesStep";

import { ViewProps } from "./interfaces";
import { CategoryItem } from "../CategoryStep/interfaces";

const BasicInformationStep = (props: PanelProps<ViewProps>) => {
  const category: CategoryItem = props.category;

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

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

      <FormGroup label="Category" labelFor="category-input">
        <InputGroup
          id="category-input"
          placeholder="The category of your product"
          large
          fill
          value={category.name}
          disabled
        />
      </FormGroup>

      <FormGroup label="Price" labelFor="price-input">
        <NumericInput
          id="price-input"
          placeholder="The price of your product"
          large
          fill
          defaultValue={price}
          onChange={(event) => setPrice(parseInt(event.target.value))}
        />
      </FormGroup>

      <StepNavigation
        nextText="Define product images"
        prevHandler={props.closePanel}
        nextHandler={openPanel}
      />
    </section>
  );
}

export default BasicInformationStep;
