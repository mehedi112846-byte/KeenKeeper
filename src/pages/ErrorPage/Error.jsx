import React from 'react';

const Error = () => {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-mono antialiased text-[#00ff9f] selection:bg-[#00ff9f] selection:text-black overflow-hidden relative">
            
            {/* Background Tech Grid */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="max-w-5xl w-full flex flex-col items-center relative z-10">
                
                {/* Status Scanner Bar */}
                <div className="w-full max-w-xs h-1 bg-white/5 rounded-full mb-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff9f] to-transparent w-1/2 animate-[shimmer_2s_infinite] shadow-[0_0_15px_#00ff9f]" />
                </div>

                {/* Main Content */}
                <div className="text-center relative">
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-10 blur-xl select-none pointer-events-none whitespace-nowrap">
                        <h1 className="text-[12rem] font-black uppercase tracking-[0.2em] italic">SYSTEM_CRASH</h1>
                    </div>

                    <h1 className="text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#94a3b8] to-[#334155] drop-shadow-[0_0_35px_rgba(255,255,255,0.1)] select-none italic">
                        404
                    </h1>

                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9f] via-[#3399ff] to-[#ff0055]">
                            PROTOCOL_NOT_FOUND
                        </h2>
                        
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md max-w-xl mx-auto shadow-2xl">
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                <span className="text-[#ff0055] font-bold">[FATAL_ERROR]:</span> Our hyper-intelligent squirrels failed to locate this coordinate. Have you tried turning the universe off and on again?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tactical Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-6 w-full justify-center">
                    <button 
                        onClick={() => window.location.href = '/'}
                        className="group relative px-10 py-4 bg-[#00ff9f] text-black font-black text-xs uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(0,255,159,0.3)]"
                    >
                        <span className="relative z-10">Back OFF</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>
                    
                    <button 
                        onClick={() => window.history.back()}
                        className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-black text-xs uppercase tracking-[0.2em] rounded-sm hover:border-[#00ff9f] hover:text-[#00ff9f] transition-all"
                    >
                        FALL BACK
                    </button>
                </div>

                {/* International Tech Footer */}
                <div className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-[9px] font-bold uppercase tracking-widest text-slate-600 border-t border-white/5 pt-8">
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-slate-800">Connection</span>
                        <span className="text-[#00ff9f]">SECURE_TUNNEL</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-slate-800">Coordinates</span>
                        <span className="text-white">VOID_SECTOR_0x99</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-slate-800">Status</span>
                        <span className="text-[#ff0055] animate-pulse">SENTIENT_AI_CRITICAL</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center md:items-end">
                        <span className="text-slate-800">Language</span>
                        <span className="text-white">EN_US_INTL</span>
                    </div>
                </div>
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff0055]/5 rounded-full blur-[120px] -z-10" />
        </div>
    );
};

export default Error;