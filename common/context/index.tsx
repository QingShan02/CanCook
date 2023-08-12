'use client'

import React, { useState } from 'react'

export interface CountViewContext {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const DEFAULT_COUNTER: CountViewContext = {
    counter: 0,
    setCounter: () => {},
};

// Provide Context
const ViewContext = React.createContext<CountViewContext>(DEFAULT_COUNTER);

export const ViewProvider: React.FC<{ children: any }>  = ({ children }) => {

    const [counter, setCounter] = useState(0);

    const values: CountViewContext = React.useMemo(
        () => ({
            counter,
            setCounter,
        }),
        [counter, setCounter]
    );

    return <ViewContext.Provider value={values}>{children}</ViewContext.Provider>
}

export default ViewContext;
