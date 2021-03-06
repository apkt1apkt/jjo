import Timer from "./Timer";
import { grayColor, primaryColor } from "../styles";

export default function JobOfferCard(props: JobOfferCardProps) {
  const { title, company, time, description, location } = props;
  return (
    <div className="offers-block">
      <div style={STYLES.heading}>
        <div>
          <div style={STYLES.title}>{title}</div>
          <span style={STYLES.company}>{company}</span>
          <span style={STYLES.location}>{location}</span>
        </div>
        <div style={STYLES.time}>
          <Timer start={time} />
        </div>
      </div>
      <div style={STYLES.description}>{description}</div>
      <button style={STYLES.iconButton}>
        <i className="fa fa-angle-right fa-2x" />
      </button>
    </div>
  );
}

type JobOfferCardProps = {
  title: string;
  company: string;
  location: string;
  time: string | Date;
  description: string;
};

const STYLES = {
  heading: {
    display: "flex",
    justifyContent: "space-between",
  },
  description: {
    display: "flex",
    justifyContent: "space-between",
    color: grayColor,
    fontSize: 13,
    marginTop: 15,
    marginRight: 30,
    fontWeight: 500,
    whiteSpace: "pre-wrap" as const,
  },
  iconButton: {
    padding: "5px 10px",
    float: "right" as const,
    fontSize: 8,
    position: "absolute" as const,
    bottom: 0,
    right: 0,
  },
  location: {
    marginLeft: 13,
    color: grayColor,
    fontSize: 13,
    fontWeight: 500,
  },
  title: {
    fontWeight: 700,
    color: primaryColor,
  },
  company: {
    fontSize: 13,
    fontWeight: 600,
  },
  time: {
    color: grayColor,
    fontSize: 12,
    fontWeight: 500,
  },
};
