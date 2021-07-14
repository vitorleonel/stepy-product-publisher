const Navbar = (): JSX.Element => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <img src="/images/brand.svg" alt="Stepy" />
        <h1>Product Publisher</h1>
      </div>

      <nav className="navbar-menu">
        <a href="https://github.com/vitorleonel/stepy-product-publisher" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          <span>Github Repository</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
