export default function Header(props: HeaderProps) {
  return <div style={STYLES.header}>{props.heading}</div>;
}

type HeaderProps = {
  heading: string;
};

const STYLES = {
  header: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 10,
  },
};
