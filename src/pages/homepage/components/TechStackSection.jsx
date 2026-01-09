import Icon from '../../../components/AppIcon';

const TechStackSection = () => {
  const techCategories = [
    {
      category: "Backend & APIs",
      icon: "Server",
      color: "var(--color-primary)",
      technologies: [
        { name: "Python", proficiency: 95 },
        { name: "Node.js", proficiency: 90 },
        // { name: "Go", proficiency: 85 },
        { name: "FastAPI", proficiency: 92 },
        { name: "Express.js", proficiency: 88 }
      ]
    },
    {
      category: "Databases",
      icon: "Database",
      color: "var(--color-accent)",
      technologies: [
        // { name: "PostgreSQL", proficiency: 93 },
        { name: "MongoDB", proficiency: 88 },
        // { name: "Redis", proficiency: 90 },
        // { name: "ClickHouse", proficiency: 82 },
        // { name: "Elasticsearch", proficiency: 85 }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "Cloud",
      color: "var(--color-primary)",
      technologies: [
        // { name: "AWS", proficiency: 91 },
        { name: "Docker", proficiency: 94 },
        // { name: "Kubernetes", proficiency: 87 },
        // { name: "Terraform", proficiency: 83 },
        { name: "CI/CD", proficiency: 89 }
      ]
    },
    {
      category: "Message Queues",
      icon: "Workflow",
      color: "var(--color-accent)",
      technologies: [
        // { name: "Kafka", proficiency: 88 },
        { name: "RabbitMQ", proficiency: 86 },
        // { name: "Redis Pub/Sub", proficiency: 90 },
        // { name: "AWS SQS", proficiency: 84 },
        // { name: "gRPC", proficiency: 82 }
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Icon name="Code" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-mono-cta text-primary uppercase tracking-wider">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono-heading text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Battle-tested tools and frameworks for building scalable, reliable systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {techCategories?.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-elevated bg-card rounded-lg p-6 md:p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <Icon name={category?.icon} size={24} color={category?.color} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-mono-heading text-foreground">
                  {category?.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category?.technologies?.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base font-mono-code text-foreground">
                        {tech?.name}
                      </span>
                      <span className="text-xs md:text-sm font-mono-code text-muted-foreground">
                        {tech?.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${tech?.proficiency}%`,
                          backgroundColor: category?.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-base text-muted-foreground font-mono-code mb-6">
            Continuously learning and adapting to emerging technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GraphQL", "WebSockets", "Microservices", "Event-Driven", "CQRS", "DDD"]?.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted text-foreground text-xs md:text-sm font-mono-code rounded-lg border border-border hover:border-primary/30 transition-smooth"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;