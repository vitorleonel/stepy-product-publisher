import { PanelProps, Button } from "@blueprintjs/core";

import { ViewProps } from "./interfaces";

const AdditionalInformationStep = (props: PanelProps<ViewProps>) => {
  return (
    <>
      <p>AdditionalInformationStep</p>

      <Button text="Publish" />
    </>
  );
}

export default AdditionalInformationStep;
