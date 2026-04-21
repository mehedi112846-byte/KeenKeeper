import React, { createContext, useState, useContext } from 'react';

// ১. কনটেক্সট তৈরি
const FilterContext = createContext();

// ২. প্রোভাইডার কম্পোনেন্ট
export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState('all'); // ডিফল্টভাবে সব ফ্রেন্ড দেখাবে

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

// ৩. কাস্টম হুক (যাতে সহজে ব্যবহার করা যায়)
export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};