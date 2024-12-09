export const MenuIcon = (props: { className?: string }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      {...props}
    >
      <line
        x1="16"
        y1="32"
        x2="48"
        y2="32"
      />
      <line
        x1="16"
        y1="20"
        x2="48"
        y2="20"
      />
      <line
        x1="16"
        y1="44"
        x2="48"
        y2="44"
      />
    </svg>
  );
};
