import React, { createContext, useState, useContext } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([
    // some primary dumy data
    //{ id: 1, type: 'Meetup', name: 'Tom Baker', date: 'March 29, 2026' },
  ]);

  const addActivity = (type, name) => {
    const newActivity = {
      id: Date.now(),
      type: type, // Call, Text, Video
      name: name,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setTimelineData([newActivity, ...timelineData]);
  };

  return (
    <TimelineContext.Provider value={{ timelineData, addActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);