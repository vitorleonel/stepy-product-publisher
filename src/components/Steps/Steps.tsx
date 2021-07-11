import { PanelStack2, Panel } from "@blueprintjs/core";

import CategoryStep from './CategoryStep';

const Steps = (): JSX.Element => {
  const initialPanel: Panel<{}> = {
    renderPanel: CategoryStep,
  };

  return (
    <PanelStack2
      className="steps"
      initialPanel={initialPanel}
      showPanelHeader={false}
    />
  );
}

export default Steps;
