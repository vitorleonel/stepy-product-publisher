import { PanelStack2 } from "@blueprintjs/core";

import Navbar from "../Navbar";
import CategoryStep from "../Steps/CategoryStep";

const App = () => {
  return (
    <>
      <Navbar />

      <PanelStack2 initialPanel={{ renderPanel: CategoryStep }} renderActivePanelOnly={true} showPanelHeader={false} />
    </>
  );
}

export default App;
