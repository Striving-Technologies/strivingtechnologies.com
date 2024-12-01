import { InteractiveLink } from "@/components/shared";
import work from "@/data/workpages.json";
import { EmailIcon } from "@/icons";
import Image from "next/image";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects", extra: work.length },
  { href: "/#services", label: "Services" },
];

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-[4.5rem]">
      <InteractiveLink
        href="/"
        wrapperType="link"
      >
        <Image
          src="/images/logo.png"
          alt="StriTech Logo"
          className="h-9 w-auto"
          width={976}
          height={256}
        />
      </InteractiveLink>
      <ul className="flex gap-16 uppercase text-sm">
        {links.map((link) => (
          <li
            key={link.href}
            className="nav-link relative group hover:text-primary"
          >
            <InteractiveLink
              href={link.href}
              className="flex items-end"
              wrapperType="link"
            >
              {link.label}
              {link.extra && (
                <>
                  &nbsp;
                  <span className="text-xs mb-0.5 group-hover:text-white">
                    ({link.extra})
                  </span>
                </>
              )}
            </InteractiveLink>
          </li>
        ))}
      </ul>
      <ul className="flex gap-16">
        <li className="nav-link relative text-sm hover:text-primary">
          <InteractiveLink href="tel:(+234) 906 201 8396">
            (+234) 906 201 8396
          </InteractiveLink>
        </li>
        <li>
          <InteractiveLink href="mailto:stritechng@gmail.com">
            <EmailIcon className="w-6" />
          </InteractiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
