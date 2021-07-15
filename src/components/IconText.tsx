import BorderedIcon from "./BorderedIcon";

export default function IconText(props: IconTextProps) {
  const { label, icon } = props;
  return (
    <div style={STYLES.container}>
      <div style={STYLES.center}>
        <BorderedIcon icon={icon} />
      </div>
      <div style={STYLES.text}>
        <div style={STYLES.breakWord}>{label}</div>
      </div>
    </div>
  );
}

type IconTextProps = { label: string; icon: string };

const STYLES = {
  container: {
    margin: "10px 5px",
    width: 90,
    cursor: "pointer",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  breakWord: {
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 750,
    marginTop: 5,
    fontSize: 14,
  },
};
