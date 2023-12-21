import './App.scss';

function App() {
  return (
    <section className='main-container' >
      {/* nav
          hero
          benefits
          integrated services
          pricing model
          faq
          footer
          */}

      <nav>
        <img className="logo" src='images/asset1.svg' alt='logo' />
        <div class="hamburger" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </section >
  )

}

export default App;
