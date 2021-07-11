import { PanelProps, Button } from "@blueprintjs/core";

import AdditionalInformationStep from "../AdditionalInformationStep";

import { ViewProps } from "./interfaces";

const ImagesStep = (props: PanelProps<ViewProps>) => {
  const openPanel = () => props.openPanel({
    renderPanel: AdditionalInformationStep
  })

  return (
    <>
      <p>ImagesStep</p>

      <Button text="Next" onClick={openPanel} />
    </>
  );
}

export default ImagesStep;
