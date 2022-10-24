import React, { useState, createContext, useContext } from "react";

interface AppContextProps {
  activeBlogIdCtx: number;
  setActiveBlogIdCtx: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextProps | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [activeBlogIdCtx, setActiveBlogIdCtx] = useState(0);
  const value = { activeBlogIdCtx, setActiveBlogIdCtx };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
