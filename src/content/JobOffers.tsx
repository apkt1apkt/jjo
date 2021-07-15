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
          <span className="off-sm">View all job offers</span>
          <i style={STYLES.icon} className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <div>
        <div className="offers-container">
          <div className="offers-content">
            {JOB_OFFERS.map((v, i) => (
              <JobOfferCard key={i} {...v} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const STYLES = {
  container: {
    marginTop: 40,
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
