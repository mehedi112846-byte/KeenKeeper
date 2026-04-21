import React, { createContext, useState, useContext } from 'react';

// making context
const FilterContext = createContext();

// Provider component
export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState('all'); //all friends will show by default

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

// custom hook for using easily
export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};