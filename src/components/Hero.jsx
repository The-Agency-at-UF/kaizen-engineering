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
        <button className="primary-button">Get Started →</button>
        <button className="secondary-button">See how it works</button>
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