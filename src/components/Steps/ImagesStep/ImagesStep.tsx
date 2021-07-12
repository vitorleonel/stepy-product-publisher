import { PanelProps, FileInput, Card } from "@blueprintjs/core";
import { useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
import AdditionalInformationStep from "../AdditionalInformationStep";

import { ViewProps } from "./interfaces";

const ImagesStep = (props: PanelProps<ViewProps>) => {
  const [inputFileRef, setInputFileRef] = useState<HTMLElement>();
  const [images, setImages] = useState<File[]>([]);

  const openPanel = () => props.openPanel({
    renderPanel: AdditionalInformationStep,
    props: {
      ...props,
      images,
    },
  });

  const addImage = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) : void => {
    if(!files?.length) {
      return;
    }

    setImages([
      ...images,
      ...Array.from(files),
    ]);
  }

  return (
    <section className="steps-item">
      <StepHeader
        title="Product images"
        description="Choose the best images to always make your product stand out. Do not insert watermarked images."
      />

      <FileInput
        inputProps={{
          accept: 'image/*',
          multiple: true,
          ref: ref => setInputFileRef(ref as HTMLElement)
        }}
        onInputChange={addImage}
        hidden
      />

      {images.map((_, index) => (
        <Card key={index}>
          asas
        </Card>
      ))}

      <Card onClick={() => inputFileRef?.click()}>
        <p>Click here to add a image</p>
      </Card>

      <StepNavigation
        nextText="Define additional information"
        nextDisabled={!!!images.length}
        prevHandler={props.closePanel}
        nextHandler={openPanel}
      />
    </section>
  );
}

export default ImagesStep;
