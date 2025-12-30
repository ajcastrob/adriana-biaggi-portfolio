import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import AIAssistant from './components/AIAssistant';
import { ViewState } from './types';
import { PROJECTS, ABOUT_TEXT, ROLE_TITLE, CONTACT_EMAIL, SITE_TITLE, SOCIAL_LINKS } from './constants';
import { ArrowDown, Mail, Instagram, Linkedin, Globe, Music, Youtube, BookOpen, ExternalLink } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  // Reset scroll to top when view changes
  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHome = () => (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6">
       {/* Piano Keys Background with Effects */}
       <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2000&auto=format&fit=crop"
            alt="Piano Keys"
            className="w-full h-full object-cover object-center scale-110 animate-[slowZoom_25s_ease-in-out_infinite_alternate] brightness-[0.85] contrast-[1.1] saturate-[0.9]"
         />
         {/* Elegant Vignette Effect */}
         <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60"></div>
         {/* Soft Light Overlay */}
         <div className="absolute inset-0 bg-gradient-to-br from-amber-50/10 via-transparent to-stone-900/40"></div>
         {/* Bottom Fade */}
         <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent"></div>
       </div>
       
       <div className="z-10 text-center animate-[fadeIn_1s_ease-out] relative max-w-3xl">
         <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 text-stone-200 font-medium bg-black/30 inline-block px-3 sm:px-4 py-1 backdrop-blur-sm rounded-full">{ROLE_TITLE}</p>
         <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6 sm:mb-8 drop-shadow-2xl px-2">
           {SITE_TITLE.split(' ')[0]} <br className="sm:hidden" />
           <span className="italic font-light">{SITE_TITLE.split(' ')[1]}</span>
         </h1>
         <p className="max-w-md mx-auto text-sm sm:text-base text-stone-100 font-medium leading-relaxed mb-8 sm:mb-12 drop-shadow-lg bg-black/30 backdrop-blur-md p-3 sm:p-4 rounded-xl">
            Piano performance uniting classical technique with deep emotion.
         </p>
         <button 
           onClick={() => handleViewChange(ViewState.PORTFOLIO)}
           className="border-2 border-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-widest uppercase text-white hover:bg-white hover:text-stone-900 transition-all duration-300 bg-black/20 backdrop-blur-md shadow-xl"
         >
           View Career
         </button>
       </div>

       <div className="absolute bottom-8 sm:bottom-12 animate-bounce cursor-pointer z-10" onClick={() => handleViewChange(ViewState.PORTFOLIO)}>
         <ArrowDown className="text-white/80 font-thin" size={28} />
       </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Carnegie Hall Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514306191717-45224512c2d0?q=80&w=2000&auto=format&fit=crop"
          alt="Carnegie Hall Concert Hall"
          className="w-full h-full object-cover object-center brightness-[0.35] contrast-[1.1] scale-105 animate-[slowZoom_30s_ease-in-out_infinite_alternate] sepia-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/75 via-stone-900/85 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"></div>
      </div>
      
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 container mx-auto page-transition">
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mb-3 sm:mb-4 text-white drop-shadow-lg">Repertoire & Events</h2>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop"
          alt="Music Background"
          className="w-full h-full object-cover object-center brightness-[0.25] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-stone-900/90 to-black/95"></div>
      </div>
      
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 container mx-auto flex items-center page-transition">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center w-full">
          <div className="relative aspect-[16/9] md:aspect-[4/3] bg-stone-200 overflow-hidden shadow-2xl md:rotate-1 rounded-sm border-4 sm:border-8 border-white">
            <img 
              src="https://static.wixstatic.com/media/159480_ab3db14c117b480abe3ed147442db114~mv2.jpg/v1/crop/x_0,y_186,w_1000,h_468/fill/w_940,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5565_JPG.jpg"
              alt="Adriana Piano Portrait" 
              className="w-full h-full object-cover sepia-[0.15] contrast-[0.95] hover:sepia-0 transition-all duration-700"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 leading-tight text-white drop-shadow-2xl">
              Passion for <br/> <span className="italic text-stone-300">Piano</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-stone-200 font-light leading-relaxed text-sm sm:text-base md:text-lg text-justify">
               {ABOUT_TEXT.split('\n').map((paragraph, idx) => (
                 <p key={idx}>{paragraph}</p>
               ))}
            </div>
            <div className="mt-8 sm:mt-12">
               <div className="flex items-center gap-3 sm:gap-4 opacity-80">
                  <Music className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <span className="font-serif italic text-lg sm:text-xl text-white">Adriana B.</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResearch = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000&auto=format&fit=crop"
          alt="Books and Research"
          className="w-full h-full object-cover object-center brightness-[0.25] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/85 via-stone-900/90 to-black/95"></div>
      </div>
      
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 container mx-auto page-transition">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic mb-3 sm:mb-4 text-white drop-shadow-lg">Research & Publications</h2>
          <div className="w-12 h-[1px] bg-stone-400 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Book Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <BookOpen className="text-white" size={28} />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">Books</h3>
              </div>
              <h4 className="text-xl sm:text-2xl font-serif italic text-stone-200 mb-3 sm:mb-4">Una Lengua, una forma de Ver el Mundo</h4>
              <p className="text-xs sm:text-sm text-stone-400 mb-4 sm:mb-6">(One Language, one Way to See the World)</p>
              
              <div className="space-y-3 sm:space-y-4 text-stone-200 leading-relaxed text-sm sm:text-base">
                <p>
                  Written in 2022, this book became a <span className="text-white font-semibold">Best Seller on Amazon</span> on its first day of publication in the categories of Linguistics and Deconstructionism.
                </p>
                <p>
                  Through a question-answer format, Adriana explores how the language we speak influences the way we see the world, and vice versa. The book presents data from important cognitive scientists and researchers, offering analysis and reflection on the language-worldview relationship.
                </p>
                <p className="text-stone-400 italic text-sm">English version coming soon.</p>
              </div>
              
              <a 
                href="https://www.amazon.com/Una-Lengua-una-forma-Mundo/dp/B0BCRTLWR1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 border-2 border-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-widest uppercase text-white hover:bg-white hover:text-stone-900 transition-all duration-300"
              >
                <span>Purchase on Amazon</span>
                <ExternalLink size={14} />
              </a>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative aspect-[2/3] max-w-xs sm:max-w-sm mx-auto">
                <img 
                  src="https://static.wixstatic.com/media/159480_16f6ca04791f4b4da4ea38af7748d25d~mv2.jpg/v1/fill/w_400,h_599,al_c,lg_1,q_80,enc_avif,quality_auto/41afbZPVr4L__SX331_BO1%2C204%2C203%2C200_.jpg"
                  alt="Una Lengua, una forma de Ver el Mundo Book Cover"
                  className="w-full h-full object-cover shadow-2xl rounded-sm hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Translation Section */}
          <div className="border-t border-stone-700 pt-12 sm:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="relative aspect-[2/3] max-w-xs sm:max-w-sm mx-auto">
                  <img 
                    src="https://static.wixstatic.com/media/159480_d4cbe10a0f624d2c8251d30f79aa7f24~mv2.jpg/v1/fill/w_321,h_510,al_c,lg_1,q_80,enc_avif,quality_auto/41VTYTrCRgL__SX312_BO1%2C204%2C203%2C200_.jpg"
                    alt="Le Langage Musical Book Cover"
                    className="w-full h-full object-cover shadow-2xl rounded-sm hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Globe className="text-white" size={28} />
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">Translations</h3>
                </div>
                <h4 className="text-xl sm:text-2xl font-serif italic text-stone-200 mb-2">Le Langage Musical</h4>
                <p className="text-base sm:text-lg text-stone-300 mb-4 sm:mb-6">by André Boucourechliev</p>
                <p className="text-xs sm:text-sm text-stone-400 mb-4 sm:mb-6">Translated into Spanish by Adriana Biaggi</p>
                
                <div className="space-y-3 sm:space-y-4 text-stone-200 leading-relaxed text-sm sm:text-base">
                  <p>
                    A profound exploration of the musical phenomenon from the inside, highlighting its intimate mechanisms in constitution, functioning, and perception.
                  </p>
                  <p>
                    André Boucourechliev (1925-1997) was a renowned composer, writer, and professor at the National Conservatory of Paris and the University of Aix-en-Provence.
                  </p>
                </div>
                
                <a 
                  href="https://8d28926e-242d-4bac-824a-82ce1543008f.filesusr.com/ugd/159480_e67e9acc07ec4b88a2d6ac4d7af2d3c7.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 sm:mt-8 border-2 border-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-widest uppercase text-white hover:bg-white hover:text-stone-900 transition-all duration-300"
                >
                  <span>View Translation (PDF)</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2000&auto=format&fit=crop"
          alt="Piano Keys Background"
          className="w-full h-full object-cover object-center brightness-[0.2] blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-black/85 to-black/95"></div>
      </div>
      
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 container mx-auto flex flex-col justify-center page-transition">
         <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 sm:mb-12 text-white drop-shadow-2xl">Contact</h2>
           <p className="text-base sm:text-lg md:text-xl font-light text-stone-200 mb-8 sm:mb-12 px-4">
             For recitals, masterclasses, or musical collaborations, please write to me.
           </p>
           
           <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic underline decoration-1 underline-offset-8 hover:text-stone-300 transition-colors text-white drop-shadow-lg break-all px-4">
             {CONTACT_EMAIL}
           </a>

           <div className="mt-16 sm:mt-20 md:mt-24 flex flex-wrap justify-center gap-8 sm:gap-12">
             <a href={SOCIAL_LINKS.find(l => l.platform === 'Instagram')?.url || '#'} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 sm:gap-4 group">
               <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-stone-400 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                 <Instagram className="text-stone-300 group-hover:text-white transition-colors" size={20} />
               </div>
               <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-white transition-colors">Instagram</span>
             </a>
             <a href="#" className="flex flex-col items-center gap-3 sm:gap-4 group">
               <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-stone-400 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                 <Linkedin className="text-stone-300 group-hover:text-white transition-colors" size={20} />
               </div>
               <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-white transition-colors">LinkedIn</span>
             </a>
             {/* YouTube Link */}
             {SOCIAL_LINKS.find(l => l.platform === 'YouTube') && (
               <a href={SOCIAL_LINKS.find(l => l.platform === 'YouTube')?.url} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 sm:gap-4 group">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-stone-400 rounded-full flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                   <Youtube className="text-stone-300 group-hover:text-white transition-colors" size={20} />
                 </div>
                 <span className="text-xs uppercase tracking-widest text-stone-400 group-hover:text-white transition-colors">YouTube</span>
               </a>
             )}
           </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="bg-stone-900 min-h-screen text-stone-900 font-sans selection:bg-stone-700 selection:text-white overflow-hidden">
      <Navigation currentView={currentView} setView={handleViewChange} />
      
      <main>
        {currentView === ViewState.HOME && renderHome()}
        {currentView === ViewState.PORTFOLIO && renderPortfolio()}
        {currentView === ViewState.ABOUT && renderAbout()}
        {currentView === ViewState.RESEARCH && renderResearch()}
        {currentView === ViewState.CONTACT && renderContact()}
      </main>

      <AIAssistant />

      <footer className="relative z-20 py-8 text-center text-xs text-stone-500 uppercase tracking-widest border-t border-stone-800 mt-12 bg-stone-900/50 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} {SITE_TITLE}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;