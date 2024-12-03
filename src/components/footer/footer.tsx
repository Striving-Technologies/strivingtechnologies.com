import { ArrowIcon } from "@/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { InteractiveLink } from "../shared";

const Footer = () => {
  const companyLinks = [
    {
      text: "About",
      link: "/#about",
    },
    {
      text: "Services",
      link: "/#services",
    },
    {
      text: "Contact",
      link: "/#contact",
    },
    {
      text: "Careers",
      link: "https://www.linkedin.com/company/striving-technologies/jobs/",
      external: true,
    },
  ];

  const socialLinks = [
    {
      text: "X (Twitter)",
      link: "https://x.com/StriTechHQ",
      external: true,
    },
    {
      text: "LinkedIn",
      link: "https://www.linkedin.com/company/striving-technologies",
      external: true,
    },
  ];

  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <footer className="px-[4.5rem] pt-20 w-full">
      <div className="w-full grid grid-cols-3">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h4 className="uppercase">Company</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link, index) => (
                <li
                  key={index}
                  className="nav-link w-min relative text-white hover:text-primary"
                >
                  <InteractiveLink
                    href={link.link}
                    className="flex items-center uppercase gap-2"
                    target={link.external ? "_blank" : ""}
                    rel="noopener noreferrer"
                  >
                    <ArrowIcon className="h-4 w-auto" /> {link.text}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Striving Technologies. <br />
            All Rights Reserved
          </p>
        </div>
        <div>
          <h3 className="uppercase mx-auto w-min whitespace-nowrap">
            Reach Out To Us
          </h3>
          <p className="nav-link text-3xl relative w-min whitespace-nowrap mx-auto text-white mt-5 hover:text-primary">
            <InteractiveLink href="tel:(+234) 0906 201 8396">
              (+234) 0906 201 8396
            </InteractiveLink>
          </p>
          <p className="nav-link text-3xl relative w-min whitespace-nowrap mx-auto text-white mt-5 hover:text-primary">
            <InteractiveLink href="mailto:stritechng@gmail.com">
              stritechng@gmail.com
            </InteractiveLink>
          </p>
          <div className="mt-20">
            <p className="flex justify-center">
              <InteractiveLink
                href="/#contact"
                className="px-4 py-3 flex gap-4 items-center max-w-min whitespace-nowrap rounded-full text-xl border border-white bg-black hover:bg-primary hover:border-black hover:text-black"
              >
                Let's connect
                <ArrowIcon className="h-6 w-auto" />
              </InteractiveLink>
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div>
            <h4 className="uppercase">Socials</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="nav-link w-min relative text-white hover:text-primary"
                >
                  <InteractiveLink
                    href={link.link}
                    className="flex items-center uppercase gap-2 whitespace-nowrap"
                    target={link.external ? "_blank" : ""}
                    rel="noopener noreferrer"
                  >
                    <ArrowIcon className="h-4 w-auto" /> {link.text}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-20">
        <Image
          src="/images/logo-3x.png"
          width={2928}
          height={768}
          alt="Striving Technologies Logo"
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
