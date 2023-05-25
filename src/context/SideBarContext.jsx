import { useMemo, createContext, useContext, useState } from "react";

// It is better to split the value and dispatch into 2 contexts
// We get a small performance boost + more control over component subscriptions
const SideBarContextValue = createContext(null);
const SideBarContextDispatchValue = createContext(null);

const SideBarContextProvider = ({ children }) => {
  const [sideBarValue, setSideBarValue] = useState("Home");

  return (
    <SideBarContextDispatchValue.Provider value={setSideBarValue}>
      <SideBarContextValue.Provider value={sideBarValue}>
        {children}
      </SideBarContextValue.Provider>
    </SideBarContextDispatchValue.Provider>
  );
};

export const useSideBarValue = () => {
  const context = useContext(SideBarContextValue);

  if (context === undefined) {
    throw new Error(
      "useSideBarValue must be used within SideBarContextProvider"
    );
  }

  return context;
};

export const useSideBarDispatch = () => {
  const context = useContext(SideBarContextDispatchValue);

  if (context === undefined) {
    throw new Error(
      "useSideBarDispatch must be used within SideBarContextProvider"
    );
  }

  return context;
};

export const useSideBar = () => {
  const value = useSideBarValue();
  const dispatch = useSideBarDispatch();

  // eslint is useless dispatch's value will never change
  // but to remove annoying warning let's include it into the dep array
  return useMemo(() => [value, dispatch], [dispatch, value]);
};

export default SideBarContextProvider;
