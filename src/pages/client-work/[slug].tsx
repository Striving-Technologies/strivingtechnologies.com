import { E404 } from "@/components/error/404";
import MainLayout from "@/components/mainlayout";
import { InteractiveLink } from "@/components/shared";
import work from "@/data/work-pages.json";
import { BarcodeIcon, CloseIcon } from "@/icons";
import { IImage, IWork } from "@/types";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";

function ClientWorkPage({ foundWork }: { foundWork: IWork }) {
  if (!foundWork) {
    return (
      <MainLayout>
        <NextSeo title="Page Not Found — StriTech" />
        <E404 />
      </MainLayout>
    );
  }

  const [selectedImage, setSelectedImage] = useState<IImage | undefined>(
    undefined
  );

  const modelCloseRef = useRef<HTMLButtonElement>(null);

  return (
    <MainLayout>
      <NextSeo
        title={`${foundWork.title} — StriTech"`}
        description={foundWork.clip}
        openGraph={{
          title: `${foundWork.title} — StriTech`,
          description: foundWork.clip,
          images: foundWork.images.map((image) => ({
            url: image.url,
            width: image.width,
            height: image.height,
            alt: image.alt,
          })),
        }}
      />
      <section className="py-20 text-white relative sm-tab:pt-10">
        <MarginWrapper className="mb-14">
          <h1 className="bruno-ace flex items-start gap-4 text-6xl lg-tab:text-4xl">
            <BarcodeIcon className="w-16 h-auto mt-2 lg-tab:w-10" />{" "}
            {foundWork.title}
          </h1>
        </MarginWrapper>
        <div
          className="aspect-[10/3] bg-center bg-cover bg-no-repeat bg-fixed tab:aspect-[16/9]"
          style={{
            backgroundImage: `url(${foundWork.images[0].url})`,
          }}
        ></div>
        <MarginWrapper className="flex gap-20 border-b border-mono-grey-dark py-10 lg-tab:flex-wrap tab:gap-10 tab:flex-col">
          <div>
            <h2 className="text-mono-grey">Description</h2>
            <p className="text-2xl lg-tab:text-lg">{foundWork.clip}</p>
          </div>
          <div>
            <h2 className="text-mono-grey">Service</h2>
            <p
              className="text-2xl whitespace-nowrap w-min lg-tab:text-lg tab:whitespace-normal tab:w-full"
              dangerouslySetInnerHTML={{ __html: foundWork.service }}
            ></p>
          </div>
          <div>
            <h2 className="text-mono-grey">Release Date</h2>
            <p className="text-2xl whitespace-nowrap lg-tab:text-lg">
              {foundWork.releaseDate}
            </p>
          </div>
        </MarginWrapper>
        <MarginWrapper className="border-b border-mono-grey-dark py-10 grid grid-cols-8 tab:grid-cols-1 tab:gap-6">
          <div className="col-span-2 flex items-start gap-2">
            <BarcodeIcon className="w-6 h-auto mt-1.5" />
            <h2 className="text-white">The Problem</h2>
          </div>
          <div className="col-span-6">
            <p className="text-2xl w-full sm-tab:text-xl">
              {foundWork.problem}
            </p>
          </div>
        </MarginWrapper>
        <MarginWrapper className="border-b border-mono-grey-dark py-10 grid grid-cols-8 tab:grid-cols-1 tab:gap-6">
          <div className="col-span-2 flex items-start gap-2">
            <BarcodeIcon className="w-6 h-auto mt-1.5" />
            <h2 className="text-white">Research</h2>
          </div>
          <div className="col-span-6">
            <p
              className="text-2xl w-full whitespace-pre-wrap sm-tab:text-xl"
              dangerouslySetInnerHTML={{ __html: foundWork.steps.research }}
            ></p>
          </div>
        </MarginWrapper>
        <MarginWrapper className="border-b border-mono-grey-dark py-10 grid grid-cols-8 tab:grid-cols-1 tab:gap-6">
          <div className="col-span-2 flex items-start gap-2">
            <BarcodeIcon className="w-6 h-auto mt-1.5" />
            <h2 className="text-white">Design</h2>
          </div>
          <div className="col-span-6">
            <p
              className="text-2xl w-full whitespace-pre-wrap sm-tab:text-xl"
              dangerouslySetInnerHTML={{ __html: foundWork.steps.design }}
            ></p>
          </div>
        </MarginWrapper>
        {foundWork.steps.development && (
          <MarginWrapper className="border-b border-mono-grey-dark py-10 grid grid-cols-8 tab:grid-cols-1 tab:gap-6">
            <div className="col-span-2 flex items-start gap-2">
              <BarcodeIcon className="w-6 h-auto mt-1.5" />
              <h2 className="text-white">Development</h2>
            </div>
            <div className="col-span-6">
              <p
                className="text-2xl w-full whitespace-pre-wrap sm-tab:text-xl"
                dangerouslySetInnerHTML={{
                  __html: foundWork.steps.development,
                }}
              ></p>
            </div>
          </MarginWrapper>
        )}
        <div className="py-10 border-b border-mono-grey-dark">
          <Marquee
            gradient={false}
            pauseOnHover={true}
          >
            {foundWork.images.map((image, index) => (
              <div
                key={index}
                className="relative"
              >
                <InteractiveLink className="cursor-pointer">
                  <button
                    onClick={() => {
                      setSelectedImage(image);
                      modelCloseRef.current?.focus();
                    }}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-[30rem] w-auto ml-2 tab:h-72 sm-tab:h-56"
                    />
                  </button>
                </InteractiveLink>
              </div>
            ))}
          </Marquee>
          <div
            className={`fixed top-0 z-10 h-screen w-screen p-4 bg-black bg-opacity-90 flex justify-center items-center ${
              selectedImage != undefined
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 not-sr-only pointer-events-none"
            } transition-all duration-300`}
            aria-hidden={selectedImage != undefined ? "false" : "true"}
          >
            <div className="relative">
              <button
                className="absolute -top-14 right-2 text-white text-2xl rounded-full border border-transparent hover:border-white focus:border-white"
                onClick={() => setSelectedImage(undefined)}
                ref={modelCloseRef}
              >
                <CloseIcon className="w-10 h-auto" />
                <span className="sr-only">Close Image</span>
              </button>
              <Image
                src={selectedImage?.url || ""}
                alt={selectedImage?.alt || ""}
                width={selectedImage?.width}
                height={selectedImage?.height}
                className="w-full h-auto max-w-5xl"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

const MarginWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`${className} px-[4.5rem] tab:pt-10 tab:px-8 phone:px-4`}>
    {children}
  </div>
);

export default ClientWorkPage;

export async function getStaticPaths() {
  const paths = work.map((project) => ({
    params: { slug: project.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const foundWork = work.find((project) => project.slug === params.slug);

  return {
    props: { foundWork },
  };
}
