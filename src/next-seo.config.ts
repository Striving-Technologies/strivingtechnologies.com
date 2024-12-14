const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const SEO = {
  title: "StriTech — Digital Product & Innovation Agency",
  description:
    "At Striving Technologies, we provide excellent services in design consultation, machine learning / artificial intelligence, UI/UX design, and software engineering to bring the ideas of forward-thinking clients to life.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://stritech.co/",
    siteName: "StriTech — Digital Product & Innovation Agency",
    title: "StriTech — Digital Product & Innovation Agency",
    description:
      "At Striving Technologies, we provide excellent services in design consultation, machine learning / artificial intelligence, UI/UX design, and software engineering to bring the ideas of forward-thinking clients to life.",
    images: [
      {
        url: `${BASE_URL}/images/logo.png`,
        width: 207,
        height: 60,
        alt: "OG StriTech Logo",
      },
    ],
  },
  twitter: {
    handle: "@StriTechHQ",
    site: "@StriTechHQ",
    cardType: "summary_large_image",
  },
};

export default SEO;
