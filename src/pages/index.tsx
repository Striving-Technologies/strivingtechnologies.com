import { AboutStats, ServicesList } from "@/components/landing";
import MainLayout from "@/components/mainlayout";
import { AnimatedText, InteractiveLink } from "@/components/shared";
import { ArrowIcon, BarcodeIcon } from "@/icons";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const isBrowser = typeof document !== "undefined";
    const AOS = isBrowser ? require("aos") : undefined;

    AOS.init({
      once: true,
      mirror: false,
      duration: 1000,
    });
  });

  return (
    <MainLayout>
      <Head>
        <title>Home | StriTech</title>
      </Head>
      <div className="px-[4.5rem] py-20 min-h-screen flex flex-col justify-between">
        <section className="max-w-[500px]">
          <p className="text-sm">
            “ At Striving Technologies, we see creativity as the driving force
            behind innovation. As a full-service creative agency, we transform
            forward-thinking ideas into extraordinary solutions.
          </p>
          <p className="text-sm mt-2">
            In developing a brand identity, creating a user-friendly website, or
            In our journey of crafting brand identities, designing user-friendly
            websites, and launching dynamic marketing campaigns, we invest every
            project with unwavering dedication and a spirited enthusiasm that
            inspires greatness. ”
          </p>
          <div className="text-white italic mt-5">
            <p>Ochuko P</p>
            <p>Creative Director</p>
          </div>
        </section>
        <section className="flex w-full justify-between items-end">
          <div className="text-[6rem]">
            <h1 className="arapey-regular-italic -mb-12 italic text-secondary">
              Creativity
            </h1>
            <div className="flex gap-4 -mb-10">
              <h1>Meets</h1>
              <h1 className="text-primary italic">Innovation</h1>
            </div>
          </div>
          <div>
            <InteractiveLink
              href="/#contact"
              className="px-4 py-3 rounded-3xl border border-white bg-black hover:bg-primary hover:border-black hover:text-black"
            >
              Let's connect
            </InteractiveLink>
          </div>
        </section>
      </div>
      <section className="px-[4.5rem] py-20 grey-gradient">
        <div className="flex gap-10 justify-between">
          <h2 className="bruno-ace text-primary flex items-center h-min gap-2">
            <BarcodeIcon className="w-5 h-auto" /> About Us
          </h2>
          <AnimatedText
            text="Driven by creativity, innovation, and excellence, Striving
            Technologies brings together a team of industry experts, dedicated
            to crafting the extraordinary."
            className="max-w-5xl text-5xl urbanist text-white"
          />
        </div>
        <AboutStats />
      </section>
      <section className="py-20 mt-10">
        <div className="flex gap-10 justify-between px-[4.5rem]">
          <h2 className="bruno-ace text-primary flex items-center h-min gap-2">
            <BarcodeIcon className="w-5 h-auto" /> Our Services
          </h2>
          <AnimatedText
            text="At Striving Technologies we provide creative solutions designed to elevate your brand and drive success. Our team of experts go above and beyond to surpass expectations, empowering your brand to thrive."
            className="max-w-5xl text-5xl urbanist text-white"
          />
        </div>
        <div className="border-t border-white my-20 pt-2">
          <div className="w-full mb-10">
            <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto px-16">
              <div className="flex gap-4 items-center text-white">
                <ArrowIcon className="w-4 h-auto rotate-[135deg]" />
                <p>Service</p>
              </div>
              <div className="col-span-2 flex gap-4 items-center text-white">
                <ArrowIcon className="w-4 h-auto rotate-[135deg]" />
                <p>Features</p>
              </div>
            </div>
          </div>
          <ServicesList />
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
