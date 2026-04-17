import React from 'react';
import { FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6"; // আইকনগুলোর জন্য react-icons ইন্সটল থাকতে হবে

const Footer = () => {
    return (
        <footer className="bg-[#2D4A3E] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                
                {/* Logo Section */}
                <h2 className="text-5xl font-bold mb-6 tracking-tight">
                    KeenKeeper
                </h2>

                {/* Tagline */}
                <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed mb-10 opacity-80">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links Section */}
                <div className="mb-12">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                        Social Links
                    </h4>
                    <div className="flex gap-4">
                        {/* Social Icon Buttons */}
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D4A3E] hover:bg-emerald-100 transition-all">
                            <FaYoutube size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D4A3E] hover:bg-emerald-100 transition-all">
                            <FaFacebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2D4A3E] hover:bg-emerald-100 transition-all">
                            <FaXTwitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-slate-400">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    
                    <div className="flex gap-8 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;