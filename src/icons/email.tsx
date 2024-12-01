export const EmailIcon = (props: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M 5 9 L 9.5 12 L 14 9"
        fill="transparent"
        strokeWidth="1.5"
        stroke="rgb(255,255,255)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
      <path
        d="M 17 19 L 3 19 C 1.895 19 1 18.105 1 17 L 1 7 C 1 5.895 1.895 5 3 5 L 16 5 C 17.105 5 18 5.895 18 7 L 18 9"
        fill="transparent"
        strokeWidth="1.5"
        stroke="rgb(255,255,255)"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeDasharray=""
      ></path>
      <path
        d="M 17 14 L 23 14 M 23 14 L 20 11 M 23 14 L 20 17"
        fill="transparent"
        strokeWidth="1.5"
        stroke="rgb(255,255,255)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
    </svg>
  );
};
