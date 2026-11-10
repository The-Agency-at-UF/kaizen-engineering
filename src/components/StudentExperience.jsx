function StudentExperience() {
  return (
    <section className="student-section">
      <div className="student-content">
        <div className="student-copy">
          <h2>Student Experience</h2>

          <p>
            Built for productive coding sessions with AI guidance, pre-submit
            testcase checks, and fast feedback loops. Kaizen keeps students in
            flow from first edit to final submit, with fewer context switches
            and clearer next steps when something breaks.
          </p>

          <p>
            Whether they are debugging logic, chasing edge cases, or iterating
            after a report, students work inside a single Canvas-native
            experience designed for real programming assignments — not isolated
            snippets or disconnected tools.
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
  );
}

export default StudentExperience;