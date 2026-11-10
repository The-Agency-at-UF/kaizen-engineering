function Comparison() {
  return (
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
  );
}

export default Comparison;