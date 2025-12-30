import React, { useState } from 'react';
import { ViewState } from '../types';
import { SITE_TITLE } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', view: ViewState.HOME },
    { label: 'Portfolio', view: ViewState.PORTFOLIO },
    { label: 'About', view: ViewState.ABOUT },
    { label: 'Research', view: ViewState.RESEARCH },
    { label: 'Contact', view: ViewState.CONTACT },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-stone-900/95 backdrop-blur-md py-4 shadow-lg border-b border-stone-800">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => setView(ViewState.HOME)}
          className="font-serif text-2xl tracking-widest uppercase hover:opacity-70 transition-opacity text-white"
        >
          {SITE_TITLE}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setView(item.view)}
              className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                currentView === item.view ? 'font-semibold text-white' : 'text-stone-400 font-light hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full ${currentView === item.view ? 'w-full' : ''}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-stone-900 z-[90] flex flex-col items-center justify-center space-y-8 animate-[fadeIn_0.3s_ease-out]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setView(item.view);
                setIsMobileOpen(false);
              }}
              className="text-3xl font-serif text-white hover:text-stone-300 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="absolute top-8 right-6 text-white"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;