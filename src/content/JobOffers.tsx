import Header from "../components/Header";
import JobOfferCard from "../components/JobOfferCard";
import { JOB_OFFERS } from "../data/job-offers";

export default function JobOffers() {
  return (
    <div style={STYLES.container}>
      <Header heading="Newest Job Offers" />
      <div>
        <div style={STYLES.jobOffers}>
          {JOB_OFFERS.map((v, i) => (
            <JobOfferCard key={i} {...v} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

const STYLES = {
  container: {
    marginTop: 50,
  },
  jobOffers: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "33.3% 33.40% 33.3%",
  },
};
