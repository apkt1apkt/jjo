import Timer from "./Timer";
import { grayColor, lightGrayColor, primaryColor } from "../styles";

export default function JobOfferCard(props: JobOfferCardProps) {
  const { title, company, time, description, location } = props;
  const index = (props.index ?? 2) + 1;
  const showDivider = index ? index % 3 !== 0 : false;
  return (
    <div style={STYLES.container}>
      <div>
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
      {showDivider && <div style={STYLES.showDivider} />}
      {!showDivider && <div style={STYLES.hideDivider} />}
    </div>
  );
}

type JobOfferCardProps = {
  title: string;
  company: string;
  location: string;
  time: string | Date;
  description: string;
  index?: number;
};

const STYLES = {
  container: {
    display: "flex",
    position: "relative" as const,
  },
  showDivider: {
    width: 5,
    margin: "0px 25px",
    backgroundColor: lightGrayColor,
  },
  hideDivider: {
    margin: "6px 12px",
  },
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
  },
  iconButton: {
    padding: "5px 10px",
    float: "right" as const,
    fontSize: 8,
    position: "absolute" as const,
    bottom: 0,
    right: 45,
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
