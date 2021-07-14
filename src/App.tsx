import Banner from "./content/Banner";
import FeaturedCompanies from "./content/FeaturedCompanies";
import JobOffers from "./content/JobOffers";

export default function App() {
  return (
    <div>
      <Banner />
      <main className="container">
        <JobOffers />
        <FeaturedCompanies />
      </main>
    </div>
  );
}
