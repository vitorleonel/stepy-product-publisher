import { PanelStack2, Panel, ProgressBar } from "@blueprintjs/core";
import { useState } from "react";

import CategoryStep from './CategoryStep';

const Steps = (): JSX.Element => {
  const panelOptions: Record<string, number> = {
    'CategoryStep': 1,
    'BasicInformationStep': 2,
    'ImagesStep': 3,
    'AdditionalInformationStep': 4,
    'PublishedStep': 5,
  }

  const totalOfPanel: number = Object.keys(panelOptions).length;
  const [currentStep, setCurrentStep] = useState<number>(1);

  const initialPanel: Panel<{}> = {
    renderPanel: CategoryStep,
    title: 'CategoryStep',
  };

  const handleOpenPanel = ({ title }: Panel<{}>) => {
    setCurrentStep(panelOptions[title as string] || 1);
  };

  const handleClosePanel = () => {
    if(currentStep < 1) {
      return;
    }

    setCurrentStep(currentStep - 1);
  }

  return (
    <>
      <ProgressBar
        intent="success"
        animate={false}
        stripes={false}
        value={currentStep / totalOfPanel}
      />

      <PanelStack2
        className="steps"
        initialPanel={initialPanel}
        showPanelHeader={false}
        renderActivePanelOnly
        onOpen={handleOpenPanel}
        onClose={handleClosePanel}
      />
    </>
  );
}

export default Steps;
