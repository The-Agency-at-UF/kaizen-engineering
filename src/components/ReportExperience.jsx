function ReportExperience() {
  return (
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
  );
}

export default ReportExperience;