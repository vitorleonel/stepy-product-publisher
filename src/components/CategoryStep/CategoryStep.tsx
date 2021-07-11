import { PanelProps } from "@blueprintjs/core";

import BasicInformationStep from "../BasicInformationStep";

import { ViewProps } from "./interfaces";

const CategoryStep = (props: PanelProps<ViewProps>) => {
  const openPanel = () => props.openPanel({
    renderPanel: BasicInformationStep
  })

  return <div>
    <p onClick={openPanel}>CategoryStep</p>
  </div>
}

export default CategoryStep;
