function Community() {
  return (
    <section className="community-section">
      <div className="community-content">
        <h2>Join the Kaizen community</h2>

        <p>
          Find out what others are building with Kaizen, share feedback with
          the team, and connect with educators and students using the platform
          in real courses.
        </p>

        <div className="community-socials">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>

        <form
          className="newsletter"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            placeholder="name@example.com"
            aria-label="Email address"
          />

          <button type="submit">Join Our Newsletter</button>
        </form>
      </div>
    </section>
  );
}

export default Community;