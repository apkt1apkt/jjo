export default function BorderedIcon(props: BorderedIconProps) {
  return (
    <span style={STYLES.container}>
      <i style={STYLES.icon} className={`fa ${props.icon}`}></i>
    </span>
  );
}

type BorderedIconProps = {
  icon: string;
};

const STYLES = {
  container: {
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: 1.5,
    padding: "14px 16px",
    borderColor: "#D5D8DC",
  },
  icon: {
    textShadow: "0px 0px 1px #000000, 0px 0px 1px #000000",
    color: "white",
  },
};
