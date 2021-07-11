import { Navbar, NavbarHeading, PanelStack2 } from "@blueprintjs/core";

import CategoryStep from "../CategoryStep";

const App = () => {
  return (
    <>
      <Navbar>
        <NavbarHeading>
          <strong>Stepy</strong> / Product Publisher
        </NavbarHeading>
      </Navbar>

      <PanelStack2 initialPanel={{ renderPanel: CategoryStep }} renderActivePanelOnly={true} showPanelHeader={false} />
    </>
  );
}

export default App;
