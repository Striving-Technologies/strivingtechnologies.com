const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const SEO = {
  title: "Striving Technologies",
  description:
    "StriTech is a digital product and innovation agency focused on giving you extrinsic design and functional web and mobile applications.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://stritech.co/",
    siteName: "Striving Technologies",
    title: "Striving Technologies",
    description:
      "StriTech is a digital product and innovation agency focused on giving you extrinsic design and functional web and mobile applications.",
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
