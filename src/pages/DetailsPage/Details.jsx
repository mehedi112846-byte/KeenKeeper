import React from 'react';
import { useParams } from 'react-router-dom';
import friendsData from '../hompage/friends.json'; 
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { BiArchiveIn } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";
import { toast } from 'react-toastify';
import { useTimeline } from '../../Timeline/timelineContext';

const Details = () => {
    const { id } = useParams(); 
    const { addActivity } = useTimeline(); // Context থেকে ফাংশনটি আনা হলো
    const friend = friendsData.find(f => f.id === parseInt(id)); 

    if (!friend) {
        return <div className="text-center py-20 text-2xl font-bold">Friend not found!</div>;
    }

    const getStatusStyles = (type) => {
        switch (type) {
            case 'overdue': return 'bg-red-500 text-white';
            case 'almost-due': return 'bg-orange-100 text-orange-600';
            case 'on-track': return 'bg-[#1e463a] text-white';
            default: return 'bg-slate-100 text-slate-600';
        }
    };

    // সব ধরনের অ্যাকশন (Call, Text, Video) হ্যান্ডেল করার ফাংশন
    const handleAction = (type, friendName) => {
        // টাইমলাইনে ডাটা অ্যাড করবে
        addActivity(type, friendName);
        
        // টোস্ট মেসেজ দেখাবে
        toast.success(`${type} with ${friendName} logged!`, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
        });
    };

    return (
        <div className="min-h-screen bg-[#F9FBFC] py-12 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* --- Left Profile Section --- */}
                <div className="md:col-span-4 space-y-4">
                    <div className="bg-white rounded-xl border border-slate-100 p-8 flex flex-col items-center text-center shadow-sm">
                        <img 
                            src={friend.image} 
                            alt={friend.name} 
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm mb-4"
                        />
                        <h2 className="text-2xl font-bold text-slate-800">{friend.name}</h2>
                        
                        <div className="flex flex-col items-center gap-2 mt-2">
                            <span className={`text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest ${getStatusStyles(friend.type)}`}>
                                {friend.status}
                            </span>
                            <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">
                                {friend.category[0]}
                            </span>
                        </div>

                        <p className="mt-6 text-slate-500 italic text-sm">
                            "Former colleague, great mentor"
                        </p>
                        <p className="text-slate-400 text-[10px] mt-2 font-medium">Preferred email: {friend.email}</p>
                    </div>

                    <div className="space-y-2">
                        <button className="w-full py-3 bg-white border border-slate-100 rounded-lg flex items-center justify-center gap-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                            <HiOutlineBellSnooze size={18} /> Snooze 2 Weeks
                        </button>
                        <button className="w-full py-3 bg-white border border-slate-100 rounded-lg flex items-center justify-center gap-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                            <BiArchiveIn size={18} /> Archive
                        </button>
                        <button className="w-full py-3 bg-white border border-slate-100 rounded-lg flex items-center justify-center gap-2 text-sm font-bold text-red-500 hover:bg-red-50 transition-all">
                            <RiDeleteBin6Line size={18} /> Delete
                        </button>
                    </div>
                </div>

                {/* --- Right Stats Section --- */}
                <div className="md:col-span-8 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
                            <h3 className="text-3xl font-bold text-slate-800">{friend.lastSeen}</h3>
                            <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">Days Since Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
                            <h3 className="text-3xl font-bold text-slate-800">{friend.goalDays}</h3>
                            <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">Goal (Days)</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-100 text-center shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800">{friend.nextDue}</h3>
                            <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm relative">
                        <button className="absolute right-6 top-6 text-[10px] font-bold uppercase bg-slate-50 px-3 py-1 rounded border border-slate-200">Edit</button>
                        <h4 className="text-emerald-800 font-bold mb-4">Relationship Goal</h4>
                        <p className="text-slate-600 text-sm">Connect every <span className="font-bold">30 days</span></p>
                    </div>

                    {/* Quick Check-In Section */}
                    <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
                        <h4 className="text-emerald-800 font-bold mb-6">Quick Check-In</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Call Button */}
                            <button 
                                onClick={() => handleAction('Call', friend.name)}
                                className="flex flex-col items-center justify-center py-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all border border-slate-100 group"
                            >
                                <FiPhone size={24} className="mb-2 text-slate-700 group-hover:text-emerald-700" />
                                <span className="text-xs font-bold text-slate-600">Call</span>
                            </button>

                            {/* Text Button */}
                            <button 
                                onClick={() => handleAction('Text', friend.name)}
                                className="flex flex-col items-center justify-center py-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all border border-slate-100 group"
                            >
                                <FiMessageSquare size={24} className="mb-2 text-slate-700 group-hover:text-emerald-700" />
                                <span className="text-xs font-bold text-slate-600">Text</span>
                            </button>

                            {/* Video Button */}
                            <button 
                                onClick={() => handleAction('Video', friend.name)}
                                className="flex flex-col items-center justify-center py-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all border border-slate-100 group"
                            >
                                <FiVideo size={24} className="mb-2 text-slate-700 group-hover:text-emerald-700" />
                                <span className="text-xs font-bold text-slate-600">Video</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;