import { Navbar, NavbarHeading, PanelStack2 } from "@blueprintjs/core";

import CategoryStep from "../CategoryStep";

const App = () => {
  return (
    <>
      <Navbar>
        <NavbarHeading>
          <img src="/images/brand.svg" alt="Stepy" />
          <h1>Product Publisher</h1>
        </NavbarHeading>
      </Navbar>

      <PanelStack2 initialPanel={{ renderPanel: CategoryStep }} renderActivePanelOnly={true} showPanelHeader={false} />
    </>
  );
}

export default App;
