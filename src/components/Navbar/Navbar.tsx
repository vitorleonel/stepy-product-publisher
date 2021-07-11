import { Navbar as NavbarContainer, NavbarHeading, Button } from "@blueprintjs/core";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarHeading>
        <img src="/images/brand.svg" alt="Stepy" />
        <h1>Product Publisher</h1>
      </NavbarHeading>

      <a href="https://github.com/vitorleonel/stepy-product-publisher" target="_blank" rel="noopener noreferrer">
        <Button icon="git-repo" text="GitHub Repository" minimal large />
      </a>
    </NavbarContainer>
  );
}

export default Navbar;
