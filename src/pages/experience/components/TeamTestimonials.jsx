import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamTestimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials?.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials?.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <div className="space-y-6">
      <div className="card-elevated bg-card rounded-lg p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-primary/10">
          <Icon name="Quote" size={80} />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
              <Image
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-1">
                {currentTestimonial?.name}
              </h4>
              <p className="text-sm md:text-base text-primary font-medium mb-1">
                {currentTestimonial?.role}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {currentTestimonial?.company}
              </p>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)]?.map((_, idx) => (
                <Icon
                  key={idx}
                  name="Star"
                  size={16}
                  className={idx < currentTestimonial?.rating ? 'text-accent fill-accent' : 'text-muted'}
                />
              ))}
            </div>
          </div>

          <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 italic">
            &ldquo;{currentTestimonial?.testimonial}&rdquo;
          </p>

          <div className="flex flex-wrap gap-2">
            {currentTestimonial?.skills?.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-accent/10 text-accent text-xs md:text-sm rounded-full font-mono-code"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
          aria-label="Previous testimonial"
        >
          <Icon 
            name="ChevronLeft" 
            size={24} 
            className="text-muted-foreground group-hover:text-primary transition-colors" 
          />
        </button>

        <div className="flex items-center gap-2">
          {testimonials?.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary w-8' : 'bg-muted'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group"
          aria-label="Next testimonial"
        >
          <Icon 
            name="ChevronRight" 
            size={24} 
            className="text-muted-foreground group-hover:text-primary transition-colors" 
          />
        </button>
      </div>
    </div>
  );
};

export default TeamTestimonials;