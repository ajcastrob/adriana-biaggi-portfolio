import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  const handleClick = () => {
    if (project.videoUrl) {
      window.open(project.videoUrl, '_blank');
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative overflow-hidden cursor-pointer mb-12 ${isEven ? 'mt-0' : 'md:mt-24'}`}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-stone-200">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 filter grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
        
        {/* Play Icon if Video */}
        {project.videoUrl && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
            <PlayCircle className="w-16 h-16 text-white/80" strokeWidth={1} />
          </div>
        )}
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
           <div className="flex justify-between items-end text-white">
             <div>
               <p className="text-xs tracking-widest uppercase mb-1">{project.category}</p>
               <h3 className="text-2xl font-serif italic">{project.title}</h3>
               {project.videoUrl && <p className="text-[10px] uppercase tracking-wider mt-2 flex items-center gap-1"><PlayCircle size={10} /> Watch Video</p>}
             </div>
             <ArrowUpRight className="w-6 h-6" />
           </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-baseline md:hidden">
         <h3 className="text-lg font-serif text-stone-900">{project.title}</h3>
         <span className="text-xs text-stone-500 uppercase tracking-wider">{project.year}</span>
      </div>
    </div>
  );
};

export default ProjectCard;