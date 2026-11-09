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
{/* REPORT EXPERIENCE */}
<section className="split-section report-section">
  <div className="feature-card">
    <h3>▱ &nbsp; Question Feedback Summary</h3>

    <div className="mini-window">
      <div className="window-header">
        <span>● ● ●</span>
        <span>FEEDBACK SUMMARY</span>
      </div>

      <div className="feedback-box purple-box">
        <strong>Question Feedback</strong>
        <p>Strong decomposition. Improve loop complexity.</p>
      </div>

      <div className="feedback-box">
        <strong>Recommendation</strong>
        <p>Use a hash map to avoid nested scans.</p>
      </div>
    </div>

    <p>
      Feedback highlights what passed, what failed, and where to improve.
      Each question gets a readable summary focused on next actions, so
      students know exactly what to fix before their next attempt.
    </p>

    <ul className="purple-list">
      <li>Readable summary per question</li>
      <li>Focused on next actions</li>
      <li>Supports revision planning</li>
    </ul>
  </div>

  <div className="section-copy">
    <h2>Report Experience</h2>

    <p>
      Rich reports connect test outcomes to code, guidance, and next actions.
      Instead of a single score, students see what passed, what failed, and
      why, making it easier to turn feedback into a concrete revision plan.
    </p>

    <p>
      Reports stay tied to the question students were working on, so every
      summary, testcase result, and AI follow-up points back to the code they
      actually submitted.
    </p>

    <div className="three-features">
      <div>
        <strong>▱ Per-question</strong>
        <span>Feedback summaries</span>
      </div>

      <div>
        <strong>▣ Granular</strong>
        <span>Testcase pass/fail detail</span>
      </div>

      <div>
        <strong>□ Follow-up</strong>
        <span>AI coaching from reports</span>
      </div>
    </div>

    <div className="vertical-links">
      <button className="active-tab">Question Feedback Summary</button>
      <button>Detailed Testcase Results</button>
      <button>Code + Submission History</button>
      <button>Context-aware AI</button>
    </div>
  </div>
</section>


{/* INSTRUCTOR EXPERIENCE */}
<section className="split-section instructor-section">
  <div className="section-copy">
    <h2>Instructor Experience</h2>

    <p>
      Instructor tools cover assignment setup, preview validation, performance
      trends, and student search. From authoring to intervention, Kaizen gives
      teaching teams the visibility they need to support students before
      deadlines pass.
    </p>

    <p>
      Course staff can validate the student journey, monitor assignment health,
      and jump directly into individual submissions, all without leaving the
      workflow they already use in Canvas.
    </p>

    <div className="three-features">
      <div>
        <strong>♙ Preview</strong>
        <span>Validate before publish</span>
      </div>

      <div>
        <strong>☷ Stats</strong>
        <span>Assignment health at a glance</span>
      </div>

      <div>
        <strong>⌕ Search</strong>
        <span>Jump to any student report</span>
      </div>
    </div>

    <div className="vertical-links">
      <button className="active-tab">Assignment Authoring</button>
      <button>Preview as Student</button>
      <button>Stats Dashboard</button>
      <button>Student Search</button>
    </div>
  </div>

  <div className="feature-card">
    <h3>◇ &nbsp; Assignment Authoring</h3>

    <div className="mini-window">
      <div className="window-header">
        <span>● ● ●</span>
        <span>ASSIGNMENT EDITOR</span>
      </div>

      <div className="setting-row">
        <span>Autograder Enabled</span>
        <strong>ON</strong>
      </div>

      <div className="assignment-grid">
        <div>
          <span>Language</span>
          <strong>Python</strong>
        </div>

        <div>
          <span>Questions</span>
          <strong>4 configured</strong>
        </div>
      </div>

      <button className="save-button">Save Assignment</button>
    </div>

    <p>
      Configure question structure, language options, and grading setup in one
      editor. Autograder controls and question management are built for fast
      iteration as assignments evolve.
    </p>

    <ul className="purple-list">
      <li>One editor for assignment setup</li>
      <li>Autograder controls and question management</li>
      <li>Built for fast iteration</li>
    </ul>
  </div>
</section>
{/* COMPARISON */}
<section className="comparison-section" id="compare">
  <div className="comparison-heading">
    <h2>Why not just use X?</h2>
    <p>
      Kaizen is not another IDE tab or chat window. It connects coding,
      grading, and feedback inside Canvas, so students iterate faster and
      instructors see where support is needed.
    </p>
  </div>

  <div className="comparison-grid">
    <div className="comparison-card">
      <h3>Canvas file upload only</h3>

      <span className="comparison-label">THE PROBLEM</span>
      <p>
        Students code elsewhere, upload files, and wait for opaque autograder
        results with little context.
      </p>

      <span className="comparison-label purple-label">WITH KAIZEN</span>
      <p>
        Code, pre-check, submit, and review feedback inside one Canvas-native
        loop.
      </p>

      <span className="comparison-label">OUTCOME</span>
      <p>
        Less context switching and clearer next steps after each attempt.
      </p>
    </div>

    <div className="comparison-card">
      <h3>External IDE + generic AI</h3>

      <span className="comparison-label">THE PROBLEM</span>
      <p>
        Chatbots don't know the assignment, testcases, or latest submission,
        so advice is often too generic to act on.
      </p>

      <span className="comparison-label purple-label">WITH KAIZEN</span>
      <p>
        Context-aware AI tied to the active question, code, and report
        outcomes.
      </p>

      <span className="comparison-label">OUTCOME</span>
      <p>
        Guidance that points to real failures instead of textbook examples.
      </p>
    </div>

    <div className="comparison-card">
      <h3>Manual instructor review</h3>

      <span className="comparison-label">THE PROBLEM</span>
      <p>
        Staff spend hours opening submissions one-by-one with no aggregate
        view of class-wide struggles.
      </p>

      <span className="comparison-label purple-label">WITH KAIZEN</span>
      <p>
        Stats, preview-as-student, and student search for targeted
        intervention.
      </p>

      <span className="comparison-label">OUTCOME</span>
      <p>
        Support the students who need it before deadlines pass.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;