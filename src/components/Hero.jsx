import code42 from "../assets/kaizen/code-42.png";
import code39 from "../assets/kaizen/code-39.png";
import code38 from "../assets/kaizen/code-38.png";
import code37 from "../assets/kaizen/code-37.png";
import code40 from "../assets/kaizen/code-40.png";
import code41 from "../assets/kaizen/code-41.png";

function Hero() {
  return (
    <section className="hero">
      <h1>
        The fastest assignment
        <br />
        loop in <span>Kaizen</span>
      </h1>

      <p>
        Kaizen brings the full assignment workflow into Canvas: students
        code in context, run pre-submit testcase checks, submit in seconds,
        and improve with report-aware AI guidance — without bouncing
        between tabs, tools, and vague feedback.
      </p>

      <div className="hero-buttons">
        <a href="#features" className="primary-button">
          Get Started →
        </a>

        <a href="#how-it-works" className="secondary-button">
          See how it works
        </a>
      </div>

      <div className="workspace-stage">
        <div className="hero-code-decorations" aria-hidden="true">
      <img className="figma-code-decoration left-one" src={code42} alt="" />
      <img className="figma-code-decoration left-two" src={code39} alt="" />
      <img className="figma-code-decoration left-three" src={code38} alt="" />
      <img className="figma-code-decoration left-four" src={code37} alt="" />

      <img className="figma-code-decoration right-one" src={code40} alt="" />
      <img className="figma-code-decoration right-two" src={code41} alt="" />
      <img className="figma-code-decoration right-three" src={code42} alt="" />
    </div>

      <div className="workspace-card">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>WORKSPACE LAYOUT</p>
          </div>

          <div className="workspace-content">
            <div className="workspace-tabs">
              <span className="active-tab">Question 3/5</span>
              <span>graph.py</span>
              <span>helpers.py</span>
            </div>

            <div className="code-preview">
              <div className="code-line long"></div>
              <div className="code-line medium"></div>
              <div className="code-line purple"></div>
              <div className="code-line short"></div>
            </div>

            <div className="workspace-caption">
              Instructions + editor + tests in one flow
            </div>
          </div>
        </div>

      </div>
      

      <p className="hero-bottom-text">
        Students switch questions and files without losing coding momentum.
        Instructions, editor, and testcase context stay visible in one
        workspace, so they spend less time navigating and more time solving
        the problem.
      </p>

      <div className="feature-pills">
        <span>Code in Context</span>
        <span>Pre-check Testcases</span>
        <span>Submit in Seconds</span>
        <span>Context-aware AI</span>
      </div>
    </section>
  );
}

export default Hero;