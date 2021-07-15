import dayjs from "dayjs";

export const JOB_OFFERS = [
  {
    title: "Junior Java Developer",
    company: "PickSaaS",
    location: "Wrclaw, Polska",
    time: dayjs().subtract(2, "hours").toDate(),
    description:
      "I am currently looking or a Java Developer, Project for Public Sector Location: Wroclaw (during the pandemic remote work)\n$ up to PLN 550 net / MD B2B",
  },
  {
    title: "Junior Project Manager",
    company: "Frontkom",
    location: "Lublin, Polska",
    time: dayjs().subtract(3, "hours").toDate(),

    description: `Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!`,
  },
  {
    title: "Junior Project Manager",
    company: "Fontkom",
    location: "Lublin, Polksa",
    time: dayjs().subtract(1, "day").toDate(),
    description:
      "I am currently looking for a Java Developer. Project for Public Sector Location: Wroclaw (during the pandemic remote work)\n$ up to PLN 550 net / MD B2B",
  },
];
