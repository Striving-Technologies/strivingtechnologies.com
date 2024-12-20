export const CloseIcon = (props: { className?: string }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <line
        x1="16"
        y1="16"
        x2="48"
        y2="48"
      />
      <line
        x1="48"
        y1="16"
        x2="16"
        y2="48"
      />
    </svg>
  );
};
