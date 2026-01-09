import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CodeSnippetCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const codeSnippets = [
    {
      title: "Microservice Architecture",
      language: "Python",
      code: `from fastapi import FastAPI, HTTPException
from redis import Redis
from typing import Optional

app = FastAPI()
cache = Redis(host='localhost', port=6379)

@app.get("/api/users/{user_id}")
async def get_user(user_id: int):
    # Check cache first
    cached = cache.get(f"user:{user_id}")
    if cached:
        return {"data": cached, "source": "cache"}
    
    # Fetch from database
    user = await db.fetch_user(user_id)
    if not user:
        raise HTTPException(404, "User not found")
    
    # Cache for 5 minutes
    cache.setex(f"user:{user_id}", 300, user)
    return {"data": user, "source": "database"}`
    },
    {
      title: "Database Optimization",
      language: "SQL",
      code: `-- Optimized query with proper indexing
CREATE INDEX idx_orders_user_date 
ON orders(user_id, created_at DESC);

-- Efficient pagination with cursor
SELECT o.id, o.total, u.name
FROM orders o
INNER JOIN users u ON o.user_id = u.id
WHERE o.created_at < $cursor
  AND o.status = 'completed'
ORDER BY o.created_at DESC
LIMIT 20;

-- Materialized view for analytics
CREATE MATERIALIZED VIEW daily_revenue AS
SELECT DATE(created_at) as date,
       SUM(total) as revenue,
       COUNT(*) as order_count
FROM orders
WHERE status = 'completed'
GROUP BY DATE(created_at);`
    },
    {
      title: "API Rate Limiting",
      language: "Node.js",
      code: `const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');

const limiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'rate_limit:'
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Rate limit exceeded',
      retryAfter: req.rateLimit.resetTime
    });
  }
});

app.use('/api/', limiter);`
    }
  ];

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeSnippets?.[activeTab]?.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-elevated bg-card rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
            <Icon name="Code2" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold font-mono-heading text-foreground">
              Code Showcase
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground font-mono-code">
              Production-ready implementations
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-border overflow-x-auto">
        <div className="flex gap-1 p-2 min-w-max">
          {codeSnippets?.map((snippet, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-xs md:text-sm font-mono-cta rounded-lg transition-smooth whitespace-nowrap ${
                activeTab === index
                  ? 'bg-primary/10 text-primary border border-primary/20' :'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {snippet?.title}
            </button>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 bg-muted rounded-lg text-xs font-mono-code text-muted-foreground">
            {codeSnippets?.[activeTab]?.language}
          </span>
          <button
            onClick={handleCopy}
            className="p-2 bg-muted hover:bg-primary/10 rounded-lg transition-smooth"
            aria-label="Copy code"
          >
            <Icon 
              name={copied ? "Check" : "Copy"} 
              size={16} 
              color={copied ? "var(--color-success)" : "var(--color-muted-foreground)"} 
            />
          </button>
        </div>

        <div className="code-block p-4 md:p-6 overflow-x-auto">
          <pre className="text-xs md:text-sm font-mono-code text-accent leading-relaxed">
            {codeSnippets?.[activeTab]?.code}
          </pre>
        </div>
      </div>
      <div className="p-4 md:p-6 border-t border-border bg-muted/30">
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground font-mono-code">
          <div className="flex items-center gap-2">
            <Icon name="Star" size={14} className="text-warning" />
            <span>Production-tested</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={14} className="text-success" />
            <span>Security-hardened</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={14} className="text-primary" />
            <span>Performance-optimized</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetCard;