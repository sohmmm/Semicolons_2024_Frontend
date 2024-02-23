import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    const [balance, setBalance] = useState(0);

    return (
        <AppContext.Provider
          value={{
            balance,
            setBalance
          }}
        >
          {children}
        </AppContext.Provider>
      );
}

export default AppProvider;
export { AppContext };