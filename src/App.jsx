import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">Kaizen</div>

        <nav>
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#compare">Compare</a>
        </nav>

        <button className="launch-button">
          Launch <span>→</span>
        </button>
      </header>

      <main>
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
      </main>

        <section className="how-it-works" id="how-it-works">
    <div className="section-heading">
      <h2>How Kaizen Works</h2>
      <p>
        Kaizen is built around a simple loop: code inside Canvas, pre-check
        testcases before submit, then learn from report feedback and iterate.
      </p>
    </div>

    <div className="code-workspace-card">
      <div className="window-bar">
        <div className="window-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>STEP 1: CODE</p>
      </div>

      <div className="coding-layout">
        <div className="file-sidebar">
          <div className="question-label">Question 2 / 4</div>

          <p>Files</p>
          <span className="selected-file">main.py</span>
          <span>graph.py</span>
          <span>helpers.py</span>
        </div>

        <div className="editor-preview">
          <div className="editor-line long"></div>
          <div className="editor-line medium"></div>
          <div className="editor-line purple"></div>
          <div className="editor-line long"></div>
        </div>
      </div>
    </div>

    <div className="code-description">
      <h3>Code in Kaizen</h3>

      <p>
        Students open questions, edit files, and iterate in a clean coding
        workspace with instructions and file structure always in view.
      </p>

      <div className="workflow">
        <span className="active-workflow">Code</span>
        <b>→</b>
        <span>Test + Submit</span>
        <b>→</b>
        <span>Review</span>
      </div>
    </div>
</section>
    </div>
  );
}

export default App;