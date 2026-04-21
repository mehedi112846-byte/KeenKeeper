import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import friendsData from './friends.json';
import { useFilter } from '../../context/filterContext';

const Hompage = () => {
    const [friends, setFriends] = useState([]);
    const { filter } = useFilter();

    useEffect(() => {
        // dealing with json data 
        setFriends(friendsData);
    }, []);

    // filtering logic
    const filteredFriends = friends.filter(friend => {
        if (filter === 'all') return true; 
        return friend.type === filter; 
    });

    // dynamic status count 
    const stats = [
        { label: "Total Friends", count: friends.length },
        { label: "On Track", count: friends.filter(friends => friends.type === 'on-track').length },
        { label: "Need Attention", count: friends.filter(friends => friends.type === 'overdue' || friends.type === 'almost-due').length },
        { label: "Interactions This Month", count: 12 }, 
    ];

    // dynamic color setting according to logic
    const getStatusStyles = (type) => {
        switch (type) {
            case 'overdue': return 'bg-red-500 text-white';
            case 'almost-due': return 'bg-orange-100 text-orange-600';
            case 'on-track': return 'bg-[#1e463a] text-white';
            default: return 'bg-slate-100 text-slate-600';
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FBFC] py-12 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* --- Top Title or header section --- */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base mb-8">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="bg-[#2D4A3E] hover:bg-[#233b31] text-white px-8 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 mx-auto shadow-sm">
                        <span className="text-xl">+</span> Add a Friend
                    </button>
                </header>

                {/* --- card's status and count section --- */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                            <h2 className="text-4xl font-black text-slate-800 mb-1">{item.count}</h2>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                        </div>
                    ))}
                </section>

                {/* --- Friends Grid --- */}
                <section>
                    <div className="border-b border-slate-200 pb-4 mb-10">
                        <h3 className="text-xl font-extrabold text-slate-800">Your Friends</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* modified part: filteredFriends.map has used here */}
                        {filteredFriends.map((friend) => (
                            <Link to={`/details/${friend.id}`} key={friend.id} className="block">
                                <div className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col items-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                                    
                                    {/* Image Holder */}
                                    <div className="mb-5 relative">
                                        <div className="absolute inset-0 bg-emerald-100 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                                        <img 
                                            src={friend.image} 
                                            alt={friend.name} 
                                            className="w-24 h-24 rounded-full object-cover relative z-10 border-4 border-white shadow-sm"
                                        />
                                    </div>

                                    {/* Person's Details */}
                                    <h4 className="text-xl font-bold text-slate-800">{friend.name}</h4>
                                    <span className="text-slate-400 text-xs mb-5">{friend.lastSeen}</span>

                                    {/* Categories Dynamic Tags */}
                                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                                        {friend.category.map((cat, i) => (
                                            <span key={i} className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Status Dynamic Tag */}
                                    <span className={`text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest mt-auto ${getStatusStyles(friend.type)}`}>
                                        {friend.status}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* if didn't found dynamic friends */}
                    {filteredFriends.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
                            <p className="text-slate-400 font-medium">No friends found in this category.</p>
                        </div>
                    )}
                </section>
                
            </div>
        </div>
    );
};

export default Hompage;