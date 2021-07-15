import { PanelProps, FileInput, Icon, IconSize } from "@blueprintjs/core";
import { useState } from "react";

import StepHeader from "../../StepHeader";
import StepNavigation from "../../StepNavigation";
import Card from "../../Card";
import AdditionalInformationStep from "../AdditionalInformationStep";

import { ViewProps } from "./interfaces";

const ImagesStep = (props: PanelProps<ViewProps>) => {
  const [inputFileRef, setInputFileRef] = useState<HTMLInputElement>();
  const [images, setImages] = useState<File[]>([]);

  const openPanel = () => props.openPanel({
    renderPanel: AdditionalInformationStep,
    title: 'AdditionalInformationStep',
    props: {
      ...props,
      images,
    },
  });

  const addImage = ({ target: { files, value } }: React.ChangeEvent<HTMLInputElement>) : void => {
    if(!files?.length) {
      return;
    }

    setImages([
      ...images,
      ...Array.from(files),
    ]);
  }

  const removeImage = (index: number): void => {
    const newImages = images.filter((_, currentIndex) => currentIndex !== index);

    setImages(newImages);
  };

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
          ref: ref => setInputFileRef(ref as HTMLInputElement),
          id: "add-image-field"
        }}
        onInputChange={addImage}
        hidden
      />

      <div className="images">
        {images.map((image, index) => (
          <Card className="images__item" onClick={() => removeImage(index)} key={index}>
            <img src={URL.createObjectURL(image)} alt={image.name} />
            <Icon icon="trash" iconSize={IconSize.LARGE} />
          </Card>
        ))}

        <Card
          className="images__item images__item--add"
         onClick={() => inputFileRef?.click()}
        >
          <Icon icon="media" iconSize={IconSize.LARGE} />
          <p>Click to add image(s)</p>
        </Card>
      </div>

      <StepNavigation
        nextText="Additional information"
        nextDisabled={!!!images.length}
        prevHandler={props.closePanel}
        nextHandler={openPanel}
      />
    </section>
  );
}

export default ImagesStep;
