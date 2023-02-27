import React, { useState } from "react";

export const AppContext = React.createContext({});

export const AppContextWrapper = (
    props
) => {
    const [colorTheme, setColorTheme] = useState("light");
    return (
        <AppContext.Provider
            value={{
                colorTheme,
                setColorTheme
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

