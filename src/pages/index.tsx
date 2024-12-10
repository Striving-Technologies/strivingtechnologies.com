import {
  AboutStats,
  ContactForm,
  ProjectList,
  ServicesList,
} from "@/components/landing";
import MainLayout from "@/components/mainlayout";
import { AnimatedText, InteractiveLink } from "@/components/shared";
import { ArrowIcon, BarcodeIcon } from "@/icons";
import Head from "next/head";
import Image from "next/image";
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
      <div className="px-[4.5rem] py-20 min-h-screen flex flex-col justify-between relative overflow-hidden tab:px-8">
        <div className="w-full flex justify-between z-[2] tab:flex-grow">
          <section className="max-w-[500px] w-full lg-tab:max-w-xs">
            <p className="text-sm">
              “ At Striving Technologies, we see creativity as the driving force
              behind innovation. As a full-service creative agency, we transform
              forward-thinking ideas into extraordinary solutions.
            </p>
            <p className="text-sm mt-2">
              In developing a brand identity, creating a user-friendly website,
              or In our journey of crafting brand identities, designing
              user-friendly websites, and launching dynamic marketing campaigns,
              we invest every project with unwavering dedication and a spirited
              enthusiasm that inspires greatness. ”
            </p>
            <div className="text-white italic mt-5">
              <p>Ochuko P</p>
              <p>Creative Director</p>
            </div>
          </section>
          <div>
            <Image
              className="max-w-xl service-image sm-laptop:max-w-lg lg-tab:max-w-md tab:absolute tab:-right-1/3 phone:-right-2/3"
              src="/images/dark-blob-tinted.avif"
              width={1024}
              height={986}
              alt="Dark Blob"
            />
          </div>
        </div>
        <section className="flex w-full justify-between items-end flex-wrap gap-4">
          <div className="text-8xl lg-tab:text-7xl">
            <div className="-mb-6 lg-tab:mb-5">
              <h1 className="arapey-regular-italic  italic text-secondary">
                Creativity
              </h1>
            </div>
            <div className="flex gap-4 -mb-10 flex-wrap">
              <h1>Meets</h1>
              <h1 className="text-primary italic">Innovation</h1>
            </div>
          </div>
          <div className="mt-20 ml-auto">
            <InteractiveLink
              href="/#contact"
              className="px-4 py-3 text-xl flex items-center gap-4 rounded-full border border-white bg-black hover:bg-primary hover:border-black hover:text-black"
            >
              Let's connect
              <ArrowIcon className="h-4 w-auto" />
            </InteractiveLink>
          </div>
        </section>
      </div>
      <section
        className="px-[4.5rem] py-20 grey-gradient"
        id="about-us"
      >
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
      <section
        className="py-20 mt-10"
        id="services"
      >
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
      <section
        className="px-[4.5rem] py-20"
        id="work"
      >
        <div className="mb-20">
          <h2 className="bruno-ace text-primary flex items-center h-min gap-2 justify-center mb-10">
            <BarcodeIcon className="w-5 h-auto" /> Client Work
          </h2>
          <h3 className="text-8xl text-center text-white mb-5">
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
          {/* <div className="flex justify-center">
            <InteractiveLink
              href="/projects"
              className="px-4 py-3 text-xl flex items-center gap-4 rounded-full border w-min whitespace-nowrap border-white bg-black hover:bg-primary hover:border-black hover:text-black"
            >
              View More
              <ArrowIcon className="h-4 w-auto" />
            </InteractiveLink>
          </div> */}
        </div>
      </section>
      <section
        className="px-[4.5rem] py-20 grey-gradient-reverse"
        id="contact"
      >
        <div className="w-full grid grid-cols-2 gap-10">
          <div>
            <h1 className="text-8xl text-primary mb-10">
              Let's{" "}
              <span className="arapey-regular-italic bg-gradient-to-r from-primary to-[#8C764A] text-transparent bg-clip-text">
                Connect
              </span>
            </h1>
            <p className="text-sm max-w-md italic text-white mb-10">
              Whether you have a question, or want to discuss a potential
              project, our team at StriTech is here to help. Please fill out the
              form below and we will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
          <div className="w-full flex items-center h-full justify-center">
            <Image
              className="max-w-lg service-image"
              src="/images/dark-blob.avif"
              width={1024}
              height={986}
              alt="Dark Blob"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
