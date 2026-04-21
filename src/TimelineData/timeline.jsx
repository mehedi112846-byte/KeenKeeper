import React from 'react';
import { useTimeline } from '../Timeline/timelineContext'; // context er path check koro
import { FiPhone, FiMessageSquare, FiVideo, FiUsers } from "react-icons/fi";

const Timeline = () => {
    const { timelineData } = useTimeline();

    // Type onujayi icon select korar jonno function
    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <FiPhone className="text-blue-500" />;
            case 'Text': return <FiMessageSquare className="text-emerald-500" />;
            case 'Video': return <FiVideo className="text-purple-500" />;
            default: return <FiUsers className="text-orange-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FBFC] py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-extrabold text-[#1F2937] mb-8">Timeline</h1>
                
                {timelineData.length === 0 ? (
                    <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300">
                        <p className="text-slate-400">No activity logged yet. Start a check-in!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {timelineData.map((item) => (
                            <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-3 bg-slate-50 rounded-full text-xl">
                                    {getIcon(item.type)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800">
                                        {item.type} with <span className="text-emerald-700">{item.name}</span>
                                    </h3>
                                    <p className="text-slate-400 text-xs mt-1">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;