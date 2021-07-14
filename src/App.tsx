import Banner from "./content/Banner";
import JobOffers from "./content/JobOffers";

export default function App() {
  return (
    <div>
      <Banner />
      <main className="container">
        <JobOffers />
      </main>
    </div>
  );
}
