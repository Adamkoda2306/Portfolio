import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyEvolution = ({ techStack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(techStack.map(tech => tech.category))];

  const filteredTech = selectedCategory === 'all' 
    ? techStack 
    : techStack?.filter(tech => tech?.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 md:gap-3">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium font-mono-cta transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredTech?.map((tech) => (
          <div
            key={tech?.id}
            className="card-elevated bg-card rounded-lg p-4 md:p-6 group hover:border-primary/50 border border-border transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={tech?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-foreground font-mono-heading">
                    {tech?.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-mono-code">
                    {tech?.yearsUsed} years
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="Briefcase" size={14} />
                <span>{tech?.projectsUsed} projects</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyEvolution;