import { GlobalContext } from "@/context/global";
import Link from "next/link";
import { AnchorHTMLAttributes, useContext } from "react";

export const InteractiveLink = ({
  children,
  href,
  className,
  wrapperType,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { wrapperType?: "link" }) => {
  const { setOverInteractive, setClickingInteractive } =
    useContext(GlobalContext);

  if (wrapperType === "link") {
    return (
      <Link
        href={href as string}
        className={className}
        onMouseEnter={() => setOverInteractive(true)}
        onMouseLeave={() => setOverInteractive(false)}
        onMouseDown={() => setClickingInteractive(true)}
        onMouseUp={() => setClickingInteractive(false)}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href as string}
      className={className}
      onMouseEnter={() => setOverInteractive(true)}
      onMouseLeave={() => setOverInteractive(false)}
      onMouseDown={() => setClickingInteractive(true)}
      onMouseUp={() => setClickingInteractive(false)}
      {...props}
    >
      {children}
    </a>
  );
};
