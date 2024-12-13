import { ProjectList } from "@/components/landing";
import MainLayout from "@/components/mainlayout";
import { BarcodeIcon } from "@/icons";
import { NextSeo } from "next-seo";

function ClientWorkPage() {
  return (
    <MainLayout>
      <NextSeo title="Client Work — StriTech" />
      <section
        className="px-[4.5rem] py-20 tab:pt-10 tab:px-8 phone:px-4"
        id="work"
      >
        <div className="mb-20">
          <h2 className="bruno-ace text-primary flex items-center h-min gap-2 justify-center mb-10 whitespace-nowrap">
            <BarcodeIcon className="w-5 h-auto" /> Client Work
          </h2>
          <h3 className="text-8xl text-center text-white mb-5 lg-tab:text-7xl">
            <span className="arapey-regular-italic font-semibold">
              Featured
            </span>{" "}
            Projects!
          </h3>
          <p className="text-center text-sm">
            Discover our range of innovative products carefully crafted for each
            of our customers to unlock their potential. <br />
            Each product is thoughtfully designed to deliver outstanding
            results.
          </p>
        </div>
        <div className="w-full mb-20">
          <ProjectList />
        </div>
      </section>
    </MainLayout>
  );
}

export default ClientWorkPage;
