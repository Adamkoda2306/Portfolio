import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ArchitectureDiagram = ({ architecture }) => {
  const [selectedLayer, setSelectedLayer] = useState(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {architecture?.layers?.map((layer, index) => (
          <div
            key={layer?.id}
            className={`card-elevated bg-card rounded-lg p-4 md:p-6 cursor-pointer transition-all duration-300 ${
              selectedLayer === layer?.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedLayer(selectedLayer === layer?.id ? null : layer?.id)}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${
                selectedLayer === layer?.id ? 'bg-primary' : 'bg-muted'
              }`}>
                <Icon 
                  name={layer?.icon} 
                  size={28} 
                  color={selectedLayer === layer?.id ? 'var(--color-primary-foreground)' : 'var(--color-primary)'} 
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h4 className="text-lg md:text-xl font-bold text-foreground font-mono-heading">
                    {layer?.name}
                  </h4>
                  <span className="text-xs md:text-sm text-muted-foreground font-mono-code whitespace-nowrap">
                    Layer {index + 1}
                  </span>
                </div>

                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                  {layer?.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {layer?.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 md:px-3 py-1 bg-muted text-accent text-xs md:text-sm rounded font-mono-code"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedLayer === layer?.id && (
                  <div className="mt-4 pt-4 border-t border-border space-y-3 animate-in fade-in duration-300">
                    <h5 className="text-sm font-semibold text-foreground font-mono-heading">
                      Key Responsibilities:
                    </h5>
                    <ul className="space-y-2">
                      {layer?.responsibilities?.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="CheckCircle2" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Icon 
                name={selectedLayer === layer?.id ? 'ChevronUp' : 'ChevronDown'} 
                size={20} 
                className="text-muted-foreground flex-shrink-0" 
              />
            </div>
          </div>
        ))}
      </div>
      <div className="card-elevated bg-card rounded-lg p-4 md:p-6">
        <h4 className="text-base md:text-lg font-bold text-foreground font-mono-heading mb-4">
          Architecture Highlights
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {architecture?.highlights?.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Zap" size={16} color="var(--color-accent)" />
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold text-accent font-mono-heading">
                  {highlight?.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {highlight?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;