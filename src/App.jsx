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
          <section className="monaco-section" id="features">
    <div className="monaco-content">
      <div className="monaco-copy">
        <h2>Monaco editor + diffs</h2>

        <p>
          Kaizen uses the same Monaco editor family as VS Code, embedded
          directly in the assignment workflow — syntax highlighting, multi-file
          editing, and a familiar feel for serious programming work.
        </p>

        <div className="feature-columns">
          <div>
            <span className="feature-icon">{"</>"}</span>
            <div>
              <h4>VS Code-grade</h4>
              <p>Monaco editing experience</p>
            </div>
          </div>

          <div>
            <span className="feature-icon">▣</span>
            <div>
              <h4>Side-by-side</h4>
              <p>Output diff inspection</p>
            </div>
          </div>

          <div>
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

  <section className="student-section">
    <div className="student-content">
      <div className="student-copy">
        <h2>Student Experience</h2>

        <p>
          Built for productive coding sessions with AI guidance, pre-submit
          testcase checks, and fast feedback loops. Kaizen keeps students in
          flow from first edit to final submit, with fewer context switches and
          clearer next steps when something breaks.
        </p>

        <p>
          Whether they are debugging logic, chasing edge cases, or iterating
          after a report, students work inside a single Canvas-native experience
          designed for real programming assignments — not isolated snippets or
          disconnected tools.
        </p>

        <div className="student-stats">
          <div>
            <span className="stat-icon">{"</>"}</span>
            <div>
              <h4>Multi-file</h4>
              <p>Workspace for real assignments</p>
            </div>
          </div>

          <div>
            <span className="stat-icon">☷</span>
            <div>
              <h4>Pre-submit</h4>
              <p>Testcase checks built in</p>
            </div>
          </div>

          <div>
            <span className="stat-icon">◷</span>
            <div>
              <h4>~5 sec</h4>
              <p>Typical submit-to-feedback loop</p>
            </div>
          </div>
        </div>

        <div className="student-links">
          <span className="active-student-link">k.ai.zen Chatbot</span>
          <span>Pre-Submit Testcase Checks</span>
          <span>Fast Submission + Report Loop</span>
          <span>Focused Multi-file Workspace</span>
        </div>
      </div>

      <div className="chatbot-card">
        <h3>▣ &nbsp; k.ai.zen Chatbot</h3>

        <div className="chat-window">
          <div className="window-bar">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>UPLOAD CHAT EXPERIENCE</p>
          </div>

          <div className="chat-body">
            <div className="chat-header">
              <span>k.ai.zen Chat</span>
              <span className="most-used">Most Used</span>
            </div>

            <div className="user-message">
              I keep failing an edge testcase. What should I inspect first?
            </div>

            <div className="ai-message">
              Start with empty-input guards and index bounds before loop
              execution.
            </div>

            <div className="quick-prompts">
              Quick prompts + context-aware responses
            </div>
          </div>
        </div>

        <p className="chat-description">
          Students use the chatbot to debug faster while staying in assignment
          context. k.ai.zen understands the active question and recent code
          changes, so responses stay grounded in what the student is actually
          working on.
        </p>

        <ul>
          <li>Question-aware chat context</li>
          <li>Quick prompts for common coding tasks</li>
          <li>Persistent per-question conversation flow</li>
        </ul>
      </div>
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