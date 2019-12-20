import React from 'react';
import { GlobalContext } from './GlobalContext';

export const GlobalContextProvider = ({ children }: any) => {
    const [dummy, setDummy] = React.useState('');
    const setNewDummy = (newDummy: string) => setDummy(newDummy);

    return (
        <GlobalContext.Provider
            value={{
                dummy,
                setNewDummy,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
