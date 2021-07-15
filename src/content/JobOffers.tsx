import Header from "../components/Header";
import JobOfferCard from "../components/JobOfferCard";
import { JOB_OFFERS } from "../data/job-offers";
import { primaryColor } from "../styles";

export default function JobOffers() {
  return (
    <div style={STYLES.container}>
      <div style={STYLES.top}>
        <Header heading="Newest Job Offers" />
        <div style={STYLES.viewAll}>
          View all job offers
          <i style={STYLES.icon} className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
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
    marginTop: 40,
  },
  jobOffers: {
    marginTop: 10,
    display: "grid",
    gridTemplateColumns: "33.3% 33.40% 33.3%",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAll: {
    color: primaryColor,
    fontSize: 10,
    fontWeight: 800,
    cursor: "pointer",
  },
  icon: {
    paddingLeft: 3,
  },
};
