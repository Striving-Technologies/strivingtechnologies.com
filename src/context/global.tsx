import { createContext, ReactNode, useState } from "react";

export const GlobalContext = createContext({
  overInteractive: false,
  setOverInteractive: (value: boolean) => {},
  clickingInteractive: false,
  setClickingInteractive: (value: boolean) => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [overInteractive, setOverInteractive] = useState(false);
  const [clickingInteractive, setClickingInteractive] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        overInteractive,
        setOverInteractive,
        clickingInteractive,
        setClickingInteractive,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
