import React, { createContext, useState } from "react";

type InitialState = "/" | "/add" | "/register";

type InitialContextValue = {
  path: InitialState;
  setPath: React.Dispatch<React.SetStateAction<InitialState>>;
};

export const PageRouterContext =
  createContext<InitialContextValue | null>(null);

const initialState = "/";

const PageRouterProvider = ({ children }: { children: React.ReactNode }) => {
  const [path, setPath] = useState<InitialState>(initialState);

  return (
    <PageRouterContext.Provider value={{ path, setPath }}>
      {children}
    </PageRouterContext.Provider>
  );
};

export default PageRouterProvider;
