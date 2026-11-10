function InstructorExperience() {
  return (
    <section className="split-section instructor-section">
      <div className="section-copy">
        <h2>Instructor Experience</h2>

        <p>
          Instructor tools cover assignment setup, preview validation,
          performance trends, and student search. From authoring to intervention,
          Kaizen gives teaching teams the visibility they need to support
          students before deadlines pass.
        </p>

        <p>
          Course staff can validate the student journey, monitor assignment
          health, and jump directly into individual submissions, all without
          leaving the workflow they already use in Canvas.
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
          Configure question structure, language options, and grading setup in
          one editor. Autograder controls and question management are built for
          fast iteration as assignments evolve.
        </p>

        <ul className="purple-list">
          <li>One editor for assignment setup</li>
          <li>Autograder controls and question management</li>
          <li>Built for fast iteration</li>
        </ul>
      </div>
    </section>
  );
}

export default InstructorExperience;