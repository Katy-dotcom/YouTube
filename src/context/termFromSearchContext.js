import { createContext, useState } from "react";

export const TermFromSearchContext = createContext(null);

export const TermFromSearchProvider = ({ children }) => {
  const [termFromSearch, setTermFromSearch] = useState("");

  return (
    <TermFromSearchContext.Provider
      value={{ termFromSearch, setTermFromSearch }}
    >
      {children}
    </TermFromSearchContext.Provider>
  );
};
