import IconTextList from "../components/IconTextList";
import { FEATURED_COMPANIES } from "../data/featured-companies";

export default function FeaturedCompanies() {
  return (
    <div style={{ marginTop: 40 }}>
      <IconTextList heading="Featured Companies" list={FEATURED_COMPANIES} />
    </div>
  );
}
