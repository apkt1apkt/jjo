export default function Banner() {
  return (
    <header>
      <div className="container" style={STYLES.container}>
        <h1 style={STYLES.heading}>Juniors make IT work.</h1>
        <p style={STYLES.catchPhrase}>Hire and invest in highly skilled junior now.</p>
        <button>Post Offer Now</button>
      </div>
    </header>
  );
}

const STYLES = {
  container: {
    color: "white",
    paddingTop: 160,
  },
  heading: {
    marginBottom: -10,
    marginTop: 0,
  },
  catchPhrase: {
    fontSize: 14,
  },
};
