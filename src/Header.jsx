import './App.css';

function Header() {
    return (
        <header>
            <img src='images/asset1.svg' alt='logo'/>
            <button class="nav-toggle" id="navToggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            {/* <nav>
                <ul>
                    <li>Home</li>
                    <li>Solutions</li>
                    <li>Estimator</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav> */}
        </header>
    );
}

export default Header