import kaizenBird from "../assets/kaizen/kaizen-bird.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={kaizenBird} alt="Kaizen Bird" />
        Kaizen
      </div>

      <nav>
        <a href="#how-it-works">How it works</a>
        <a href="#features">Features</a>
        <a href="#compare">Compare</a>
      </nav>

      <button className="launch-button">
        Launch <span>→</span>
      </button>
    </header>
  );
}

export default Navbar;