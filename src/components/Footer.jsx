const footerColumns = [
  {
    topTitle: "DOCS",
    topLinks: [
      "Getting Started",
      "Reactivity",
      "Examples",
      "AI Integration",
      "FAQ",
    ],
    bottomTitle: "FEATURES",
    bottomLinks: [
      "AI-Powered",
      "Canvas-Native",
      "Deploy Anywhere",
      "SQL Integration",
      "Interactive Widgets",
    ],
  },
  {
    topTitle: "DEVELOPERS",
    topLinks: ["Ambassadors", "Release Notes", "Contributing", "GitHub"],
    bottomTitle: "USERS",
    bottomLinks: [
      "AI Engineers",
      "Educators",
      "Data Scientists",
      "Analytics Engineers",
      "Web Developers",
    ],
  },
  {
    topTitle: "COMPANY",
    topLinks: ["About", "Careers", "Blog", "Case Studies", "Gallery"],
    bottomTitle: "COMPARE",
    bottomLinks: [
      "vs. Jupyter",
      "vs. Colab",
      "vs. Streamlit",
      "vs. Papermill",
      "vs. Retool",
    ],
  },
  {
    topTitle: "RESOURCES & LEGAL",
    topLinks: ["Contact", "Privacy", "Terms", "Data requests", "Subprocessors"],
    bottomTitle: "JOIN & FOLLOW",
    bottomLinks: ["Discord", "Reddit", "Twitter", "YouTube", "LinkedIn"],
  },
];

function FooterLinks({ title, links }) {
  return (
    <div className="footer-link-group">
      <h3>{title}</h3>

      {links.map((link) => (
        <a href="#" key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="kaizen-footer">
      <div className="footer-heading">
        <div>
          <h2>Kaizen</h2>
          <p>
            Learning loops for students and instructors — from first draft to
            final feedback, with less friction and more clarity at every step.
          </p>
        </div>

        <div className="footer-socials">
          <span>GH</span>
          <span>X</span>
          <span>YT</span>
        </div>
      </div>

      <div className="footer-columns">
        {footerColumns.map((column) => (
          <div className="footer-column" key={column.topTitle}>
            <FooterLinks title={column.topTitle} links={column.topLinks} />
            <FooterLinks
              title={column.bottomTitle}
              links={column.bottomLinks}
            />
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;