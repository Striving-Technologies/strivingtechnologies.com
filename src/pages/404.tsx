import { E404 } from "@/components/error/404";
import MainLayout from "@/components/mainlayout";
import { NextSeo } from "next-seo";

const Custom404 = () => {
  return (
    <MainLayout>
      <NextSeo title="Page Not Found — StriTech" />
      <E404 />
    </MainLayout>
  );
};

export default Custom404;
