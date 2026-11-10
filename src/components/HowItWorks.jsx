function HowItWorks() {
  return (
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
  );
}

export default HowItWorks;