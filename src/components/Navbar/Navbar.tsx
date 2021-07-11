import { Navbar as NavbarContainer, NavbarHeading, Button } from "@blueprintjs/core";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHeading>
        <img src="/images/brand.svg" alt="Stepy" />
        <h1>Product Publisher</h1>
      </NavbarHeading>

      <Button icon="log-out" text="Log out" minimal  />
    </NavbarContainer>
  );
}

export default Navbar;
