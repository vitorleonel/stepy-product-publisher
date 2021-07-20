import Button from '../Button';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src="/images/brand.svg" alt="Stepy" />
        <h1>Product Publisher</h1>
      </div>

      <nav className="navbar-menu">
        <a
          href="https://github.com/vitorleonel/stepy-product-publisher"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="GitHub Repository" leftIcon="logo-github" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
