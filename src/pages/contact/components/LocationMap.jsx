import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const locationDetails = {
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    timezone: 'PST (UTC-8)',
    coordinates: { lat: 37.7749, lng: -122.4194 }
  };

  const workingLocations = [
    {
      type: 'Primary Office',
      location: 'San Francisco, CA',
      icon: 'Building',
      description: 'Main workspace for local collaborations'
    },
    {
      type: 'Remote Work',
      location: 'Global',
      icon: 'Wifi',
      description: 'Available for remote projects worldwide'
    },
    {
      type: 'Travel',
      location: 'On Request',
      icon: 'Plane',
      description: 'Open to on-site consultations for major projects'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
              <Icon name="MapPin" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground font-mono-heading">Location</h2>
              <p className="text-sm text-muted-foreground font-mono-code">Based in {locationDetails?.city}, {locationDetails?.state}</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-80 bg-muted">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title={`${locationDetails?.city}, ${locationDetails?.state}`}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${locationDetails?.coordinates?.lat},${locationDetails?.coordinates?.lng}&z=12&output=embed`}
            className="border-0"
          />
        </div>

        <div className="p-6 bg-muted/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Icon name="MapPin" size={20} color="var(--color-primary)" className="mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">City</p>
              <p className="text-sm font-bold text-foreground font-mono-code">{locationDetails?.city}</p>
            </div>
            <div className="text-center">
              <Icon name="Flag" size={20} color="var(--color-accent)" className="mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">Country</p>
              <p className="text-sm font-bold text-foreground font-mono-code">{locationDetails?.country}</p>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={20} color="var(--color-warning)" className="mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">Timezone</p>
              <p className="text-sm font-bold text-foreground font-mono-code">{locationDetails?.timezone}</p>
            </div>
            <div className="text-center">
              <Icon name="Globe" size={20} color="var(--color-success)" className="mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">Remote</p>
              <p className="text-sm font-bold text-foreground font-mono-code">Available</p>
            </div>
          </div>
        </div>
      </div>
      {/* Working Locations */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg">
            <Icon name="Briefcase" size={20} color="var(--color-accent)" />
          </div>
          <h3 className="text-lg font-bold text-foreground font-mono-heading">Work Arrangements</h3>
        </div>

        <div className="space-y-3">
          {workingLocations?.map((location, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                <Icon name={location?.icon} size={20} color="var(--color-primary)" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-bold text-foreground font-mono-cta">{location?.type}</h4>
                  <span className="text-xs text-primary font-mono-code">{location?.location}</span>
                </div>
                <p className="text-xs text-muted-foreground">{location?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Travel Policy */}
      <div className="bg-muted/50 rounded-lg border border-border p-4">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={20} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground font-mono-cta">Travel & On-site Work</p>
            <p className="text-xs text-muted-foreground mt-1">Available for on-site consultations and project kickoffs. Travel expenses and accommodation to be covered by client for projects requiring physical presence. Minimum 2-week advance notice preferred.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;