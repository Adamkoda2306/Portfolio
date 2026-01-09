import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (category) => {
    const iconMap = {
      all: 'Grid',
      certification: 'Award',
      speaking: 'Mic',
      opensource: 'GitBranch',
      writing: 'FileText',
      recognition: 'Trophy'
    };
    return iconMap?.[category] || 'Star';
  };

  return (
    <div className="metric-card">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between lg:hidden mb-4"
      >
        <span className="text-sm font-semibold text-foreground font-mono-heading">
          Filter by Category
        </span>
        <Icon 
          name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
          size={20} 
          color="var(--color-muted-foreground)" 
        />
      </button>
      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block space-y-2`}>
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg transition-smooth ${
              selectedCategory === category?.id
                ? 'bg-primary/10 text-primary border border-primary/30' :'bg-muted text-muted-foreground hover:bg-primary/5 hover:text-foreground border border-transparent'
            }`}
          >
            <div className="flex items-center gap-3">
              <Icon 
                name={getCategoryIcon(category?.id)} 
                size={20} 
                color={selectedCategory === category?.id ? 'var(--color-primary)' : 'var(--color-muted-foreground)'} 
              />
              <span className="text-sm font-medium font-mono-cta">{category?.label}</span>
            </div>
            <span className="text-xs font-mono-code px-2 py-1 rounded-full bg-background">
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;