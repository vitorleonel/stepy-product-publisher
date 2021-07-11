import { PanelProps, Button } from "@blueprintjs/core";

import ImagesStep from "../ImagesStep";

import { ViewProps } from "./interfaces";

const BasicInformationStep = (props: PanelProps<ViewProps>) => {
  const openPanel = () => props.openPanel({
    renderPanel: ImagesStep
  })

  return (
    <>
      <p>BasicInformationStep</p>

      <Button text="Next" onClick={openPanel} />
    </>
  );
}

export default BasicInformationStep;
