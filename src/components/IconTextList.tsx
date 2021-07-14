import Header from "./Header";
import IconText from "./IconText";

export default function IconTextList(props: IconTextListProps) {
  const { heading, list } = props;
  return (
    <>
      <Header heading={heading} />
      <div style={STYLES.list}>
        {list.map((v, i) => (
          <IconText key={i} {...v} />
        ))}
      </div>
    </>
  );
}

type IconTextListProps = {
  heading: string;
  list: { label: string; icon: string }[];
};

const STYLES = {
  list: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap" as const,
  },
};
