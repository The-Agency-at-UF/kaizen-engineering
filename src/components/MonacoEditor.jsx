function MonacoEditor() {
  return (
    <section className="monaco-section" id="features">
      <div className="monaco-content">
        <div className="monaco-copy">
          <h2>Monaco editor + diffs</h2>

          <p className="monaco-description">
            Kaizen uses the same Monaco editor family as VS Code, embedded
            directly in the assignment workflow — syntax highlighting,
            multi-file editing, and a familiar feel for serious programming
            work.
          </p>

          <div className="feature-columns">
            <div className="monaco-feature">
              <span className="feature-icon">{"</>"}</span>
              <div>
                <h4>VS Code-grade</h4>
                <p>Monaco editing experience</p>
              </div>
            </div>

            <div className="monaco-feature">
              <span className="feature-icon">▣</span>
              <div>
                <h4>Side-by-side</h4>
                <p>Output diff inspection</p>
              </div>
            </div>

            <div className="monaco-feature">
              <span className="feature-icon">▱</span>
              <div>
                <h4>In Canvas</h4>
                <p>No external IDE required</p>
              </div>
            </div>
          </div>

          <div className="section-pills">
            <span className="selected-pill">Code Editor</span>
            <span>Output Diff</span>
          </div>
        </div>

        <div className="monaco-window">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>MONACO EDITOR</p>
          </div>

          <div className="fake-code">
            <div>
              <span className="line-number">1</span>
              <code>
                <span className="code-purple">def</span>{" "}
                <span className="code-blue">shortest_path</span>(graph, start):
              </code>
            </div>

            <div>
              <span className="line-number">2</span>
              <code>&nbsp;&nbsp;visited = set()</code>
            </div>

            <div>
              <span className="line-number">3</span>
              <code>&nbsp;&nbsp;queue = [(start, 0)]</code>
            </div>

            <div>
              <span className="line-number">4</span>
              <code>&nbsp;&nbsp;while queue:</code>
            </div>

            <div>
              <span className="line-number">5</span>
              <code>&nbsp;&nbsp;&nbsp;&nbsp;node, dist = queue.pop(0)</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MonacoEditor;