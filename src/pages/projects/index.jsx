import { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import ProjectStats from './components/ProjectStats';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    technology: '',
    teamSize: '',
    duration: '',
    status: ''
  });

  const projectsData = [
  {
    id: 1,
    title: "High-Performance E-Commerce Platform",
    description: "Architected and implemented a scalable microservices-based e-commerce platform handling 10M+ daily transactions with 99.99% uptime.",
    fullDescription: "Led the complete architectural redesign of a monolithic e-commerce system into a distributed microservices architecture. Implemented event-driven patterns using Apache Kafka for real-time inventory management, order processing, and payment reconciliation. Designed and optimized PostgreSQL database schemas with advanced indexing strategies, reducing query response times by 85%. Implemented Redis caching layer achieving 95% cache hit rate. Deployed on AWS using ECS Fargate with auto-scaling capabilities handling traffic spikes of 500% during flash sales.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd18e021-1764648555294.png",
    imageAlt: "Modern e-commerce platform dashboard showing real-time analytics graphs and transaction monitoring on multiple computer screens in dark themed interface",
    status: "Production",
    teamSize: "8",
    duration: "18 mo",
    performanceImprovement: "+320%",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes", "AWS", "GraphQL"],
    achievements: [
    "Reduced average API response time from 850ms to 120ms through query optimization and caching strategies",
    "Implemented horizontal scaling architecture supporting 50,000 concurrent users with zero downtime deployments",
    "Designed fault-tolerant payment processing system with automatic retry mechanisms and circuit breakers",
    "Reduced infrastructure costs by 40% through containerization and efficient resource allocation",
    "Achieved PCI DSS compliance for payment processing with comprehensive security audit"],

    metrics: [
    { label: "Daily Transactions", value: "10M+" },
    { label: "System Uptime", value: "99.99%" },
    { label: "API Response Time", value: "120ms" },
    { label: "Cost Reduction", value: "40%" }],

    architectureDescription: "Microservices architecture with API Gateway pattern, event-driven communication using Kafka message queues, CQRS pattern for read/write separation, and distributed caching with Redis Cluster. Database sharding implemented for horizontal scalability with PostgreSQL read replicas for load distribution.",
    databaseSchema: `CREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID NOT NULL REFERENCES users(id),\n  status VARCHAR(50) NOT NULL,\n  total_amount DECIMAL(10,2) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_user_status (user_id, status),\n  INDEX idx_created_at (created_at DESC)\n);\n\nCREATE TABLE order_items (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  order_id UUID NOT NULL REFERENCES orders(id),\n  product_id UUID NOT NULL REFERENCES products(id),\n  quantity INTEGER NOT NULL,\n  price DECIMAL(10,2) NOT NULL,\n  INDEX idx_order_id (order_id)\n);`,
    apiEndpoints: [
    { method: "POST", path: "/api/v1/orders", description: "Create new order with transaction management" },
    { method: "GET", path: "/api/v1/orders/:id", description: "Retrieve order details with caching" },
    { method: "PUT", path: "/api/v1/orders/:id/status", description: "Update order status with event publishing" },
    { method: "GET", path: "/api/v1/products/search", description: "Full-text search with Elasticsearch integration" }],

    scalabilityStory: [
    "Implemented database connection pooling reducing connection overhead by 75%",
    "Deployed CDN for static assets achieving 99% cache hit rate globally",
    "Implemented rate limiting and request throttling preventing DDoS attacks",
    "Designed auto-scaling policies based on CPU, memory, and custom business metrics"],

    uptime: "99.99%",
    codeSamples: [
    {
      title: "Order Processing Service",
      language: "JavaScript",
      code: `class OrderService {\n  async createOrder(orderData) {\n    const transaction = await db.transaction();\n    try {\n      const order = await Order.create(orderData, { transaction });\n      await this.reserveInventory(order.items, transaction);\n      await this.processPayment(order, transaction);\n      await this.publishOrderEvent('order.created', order);\n      await transaction.commit();\n      return order;\n    } catch (error) {\n      await transaction.rollback();\n      throw new OrderProcessingError(error.message);\n    }\n  }\n\n  async publishOrderEvent(eventType, order) {\n    await kafka.send({\n      topic: 'orders',\n      messages: [{\n        key: order.id,\n        value: JSON.stringify({ type: eventType, data: order })\n      }]\n    });\n  }\n}`
    },
    {
      title: "Caching Strategy Implementation",
      language: "JavaScript",
      code: `class CacheService {\n  async getOrSet(key, fetchFn, ttl = 3600) {\n    const cached = await redis.get(key);\n    if (cached) {\n      return JSON.parse(cached);\n    }\n    const data = await fetchFn();\n    await redis.setex(key, ttl, JSON.stringify(data));\n    return data;\n  }\n\n  async invalidatePattern(pattern) {\n    const keys = await redis.keys(pattern);\n    if (keys.length > 0) {\n      await redis.del(...keys);\n    }\n  }\n}`
    }],

    githubUrl: "https://github.com",
    liveDemo: "https://demo.example.com"
  },
  {
    id: 2,
    title: "Real-Time Analytics Engine",
    description: "Built a distributed analytics platform processing 5TB+ daily data with sub-second query response times using Apache Spark and ClickHouse.",
    fullDescription: "Designed and implemented a real-time analytics engine capable of processing massive data streams from multiple sources. Utilized Apache Spark for distributed data processing and ClickHouse as the columnar database for lightning-fast analytical queries. Implemented data pipeline orchestration using Apache Airflow with comprehensive monitoring and alerting. Created custom aggregation algorithms optimized for time-series data analysis. Integrated machine learning models for predictive analytics and anomaly detection.",
    image: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
    imageAlt: "Real-time analytics dashboard displaying multiple colorful data visualization charts including line graphs, bar charts, and pie charts on dark background with glowing blue accents",
    status: "Production",
    teamSize: "6",
    duration: "14 mo",
    performanceImprovement: "+450%",
    technologies: ["Python", "Apache Spark", "ClickHouse", "Kafka", "Airflow", "Redis", "Docker", "AWS"],
    achievements: [
    "Processed 5TB+ daily data with 99.9% accuracy and zero data loss",
    "Achieved sub-second query response times for complex analytical queries across billions of records",
    "Implemented real-time anomaly detection reducing incident response time by 85%",
    "Designed data retention policies reducing storage costs by 60% while maintaining compliance",
    "Built custom visualization dashboards serving 500+ concurrent users"],

    metrics: [
    { label: "Daily Data Processed", value: "5TB+" },
    { label: "Query Response Time", value: "<1s" },
    { label: "Data Accuracy", value: "99.9%" },
    { label: "Storage Savings", value: "60%" }],

    architectureDescription: "Lambda architecture combining batch and stream processing. Apache Kafka for real-time data ingestion, Spark Streaming for real-time processing, and batch jobs for historical analysis. ClickHouse cluster with distributed tables for horizontal scalability. Redis for caching frequently accessed aggregations.",
    databaseSchema: `CREATE TABLE events (\n  event_id UUID,\n  user_id UInt64,\n  event_type String,\n  event_data String,\n  timestamp DateTime,\n  date Date DEFAULT toDate(timestamp)\n) ENGINE = MergeTree()\nPARTITION BY toYYYYMM(date)\nORDER BY (user_id, timestamp)\nSETTINGS index_granularity = 8192;\n\nCREATE MATERIALIZED VIEW daily_metrics\nENGINE = SummingMergeTree()\nPARTITION BY toYYYYMM(date)\nORDER BY (date, event_type)\nAS SELECT\n  date,\n  event_type,\n  count() as event_count,\n  uniq(user_id) as unique_users\nFROM events\nGROUP BY date, event_type;`,
    apiEndpoints: [
    { method: "POST", path: "/api/v1/events/ingest", description: "Bulk event ingestion with validation" },
    { method: "GET", path: "/api/v1/analytics/query", description: "Execute analytical queries with caching" },
    { method: "GET", path: "/api/v1/metrics/realtime", description: "Real-time metrics streaming via WebSocket" },
    { method: "POST", path: "/api/v1/reports/generate", description: "Generate custom reports with scheduling" }],

    scalabilityStory: [
    "Implemented data partitioning strategy enabling linear scalability",
    "Designed distributed query execution reducing processing time by 80%",
    "Created adaptive sampling algorithms for real-time approximations",
    "Implemented tiered storage strategy with hot/warm/cold data classification"],

    uptime: "99.95%",
    codeSamples: [
    {
      title: "Spark Streaming Job",
      language: "Python",
      code: `from pyspark.sql import SparkSession\nfrom pyspark.sql.functions import window, col, count\n\ndef process_stream():\n    spark = SparkSession.builder.appName("EventProcessor").getOrCreate()\n    \n    events = spark.readStream \\\n        .format("kafka") \\\n        .option("kafka.bootstrap.servers", "localhost:9092") \\\n        .option("subscribe", "events") \\\n        .load()\n    \n    aggregated = events \\\n        .groupBy(window(col("timestamp"), "1 minute"), col("event_type")) \\\n        .agg(count("*").alias("count"))\n    \n    query = aggregated.writeStream \\\n        .outputMode("update") \\\n        .format("clickhouse") \\\n        .start()\n    \n    query.awaitTermination()`
    },
    {
      title: "Anomaly Detection Algorithm",
      language: "Python",
      code: `class AnomalyDetector:\n    def __init__(self, threshold=3.0):\n        self.threshold = threshold\n        self.baseline = {}\n    \n    def detect(self, metric_name, value):\n        if metric_name not in self.baseline:\n            self.baseline[metric_name] = {'mean': value, 'std': 0}\n            return False\n        \n        stats = self.baseline[metric_name]\n        z_score = abs((value - stats['mean']) / (stats['std'] + 1e-6))\n        \n        # Update baseline with exponential moving average\n        alpha = 0.1\n        stats['mean'] = alpha * value + (1 - alpha) * stats['mean']\n        stats['std'] = alpha * abs(value - stats['mean']) + (1 - alpha) * stats['std']\n        \n        return z_score > self.threshold`
    }],

    githubUrl: "https://github.com",
    liveDemo: null
  },
  {
    id: 3,
    title: "Distributed Task Queue System",
    description: "Developed a fault-tolerant distributed task processing system handling 1M+ jobs daily with priority queuing and automatic retry mechanisms.",
    fullDescription: "Created a robust distributed task queue system from scratch to replace existing solutions that couldn't meet our scalability requirements. Implemented priority-based job scheduling with fair queuing algorithms. Designed worker pool management with dynamic scaling based on queue depth and processing time metrics. Built comprehensive monitoring and alerting system tracking job success rates, processing times, and system health. Implemented dead letter queues and automatic retry logic with exponential backoff.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1534f1e36-1764671525611.png",
    imageAlt: "Abstract visualization of distributed computing network with interconnected nodes and data flow paths represented by glowing lines on dark blue background",
    status: "Production",
    teamSize: "5",
    duration: "12 mo",
    performanceImprovement: "+280%",
    technologies: ["Go", "Redis", "PostgreSQL", "RabbitMQ", "Prometheus", "Grafana", "Docker", "Kubernetes"],
    achievements: [
    "Processed 1M+ jobs daily with 99.95% success rate and automatic failure recovery",
    "Reduced average job processing time by 65% through optimization and parallel processing",
    "Implemented zero-downtime deployments with graceful worker shutdown and job migration",
    "Designed priority queuing system ensuring critical jobs processed within SLA requirements",
    "Built comprehensive monitoring dashboard with real-time metrics and alerting"],

    metrics: [
    { label: "Daily Jobs Processed", value: "1M+" },
    { label: "Success Rate", value: "99.95%" },
    { label: "Avg Processing Time", value: "2.3s" },
    { label: "Worker Efficiency", value: "92%" }],

    architectureDescription: "Distributed architecture with Redis as message broker and PostgreSQL for job persistence. Worker pools deployed across multiple availability zones with automatic failover. Job scheduling algorithm implements weighted fair queuing with priority levels. Prometheus for metrics collection and Grafana for visualization.",
    databaseSchema: `CREATE TABLE jobs (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  queue_name VARCHAR(100) NOT NULL,\n  priority INTEGER DEFAULT 0,\n  payload JSONB NOT NULL,\n  status VARCHAR(50) NOT NULL,\n  attempts INTEGER DEFAULT 0,\n  max_attempts INTEGER DEFAULT 3,\n  scheduled_at TIMESTAMP NOT NULL,\n  started_at TIMESTAMP,\n  completed_at TIMESTAMP,\n  error_message TEXT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_queue_priority (queue_name, priority DESC, scheduled_at),\n  INDEX idx_status_scheduled (status, scheduled_at)\n);\n\nCREATE TABLE job_history (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  job_id UUID NOT NULL REFERENCES jobs(id),\n  status VARCHAR(50) NOT NULL,\n  message TEXT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_job_id (job_id)\n);`,
    apiEndpoints: [
    { method: "POST", path: "/api/v1/jobs", description: "Enqueue new job with priority and scheduling" },
    { method: "GET", path: "/api/v1/jobs/:id", description: "Get job status and execution history" },
    { method: "DELETE", path: "/api/v1/jobs/:id", description: "Cancel pending job" },
    { method: "GET", path: "/api/v1/queues/stats", description: "Get queue statistics and health metrics" }],

    scalabilityStory: [
    "Implemented horizontal worker scaling based on queue depth and processing metrics",
    "Designed job partitioning strategy distributing load across worker pools",
    "Created circuit breaker pattern preventing cascade failures",
    "Implemented rate limiting per queue preventing resource exhaustion"],

    uptime: "99.97%",
    codeSamples: [
    {
      title: "Job Scheduler Implementation",
      language: "Go",
      code: `type JobScheduler struct {\n    redis    *redis.Client\n    db       *sql.DB\n    workers  int\n}\n\nfunc (s *JobScheduler) EnqueueJob(job *Job) error {\n    // Persist job to database\n    if err := s.db.SaveJob(job); err != nil {\n        return err\n    }\n    \n    // Add to Redis sorted set with priority score\n    score := float64(job.Priority)*1e9 + float64(job.ScheduledAt.Unix())\n    return s.redis.ZAdd(ctx, job.QueueName, &redis.Z{\n        Score:  score,\n        Member: job.ID,\n    }).Err()\n}\n\nfunc (s *JobScheduler) ProcessJobs(queueName string) {\n    for {\n        // Fetch highest priority job\n        results, err := s.redis.ZPopMin(ctx, queueName, 1).Result()\n        if err != nil || len(results) == 0 {\n            time.Sleep(100 * time.Millisecond)\n            continue\n        }\n        \n        jobID := results[0].Member.(string)\n        go s.executeJob(jobID)\n    }\n}`
    },
    {
      title: "Retry Logic with Exponential Backoff",
      language: "Go",
      code: `func (s *JobScheduler) executeJob(jobID string) error {\n    job, err := s.db.GetJob(jobID)\n    if err != nil {\n        return err\n    }\n    \n    maxRetries := job.MaxAttempts\n    for attempt := 0; attempt < maxRetries; attempt++ {\n        err := s.processJob(job)\n        if err == nil {\n            s.db.UpdateJobStatus(jobID, "completed")\n            return nil\n        }\n        \n        // Exponential backoff\n        backoff := time.Duration(math.Pow(2, float64(attempt))) * time.Second\n        time.Sleep(backoff)\n        \n        s.db.IncrementJobAttempts(jobID)\n    }\n    \n    // Move to dead letter queue\n    s.db.UpdateJobStatus(jobID, "failed")\n    s.redis.LPush(ctx, "dead_letter_queue", jobID)\n    return fmt.Errorf("job failed after %d attempts", maxRetries)\n}`
    }],

    githubUrl: "https://github.com",
    liveDemo: null
  },
  {
    id: 4,
    title: "Multi-Tenant SaaS Platform",
    description: "Architected a secure multi-tenant SaaS platform serving 500+ enterprise clients with data isolation, custom branding, and role-based access control.",
    fullDescription: "Led the development of a comprehensive multi-tenant SaaS platform from ground up. Implemented tenant isolation at database level using schema-per-tenant approach with connection pooling optimization. Designed flexible RBAC system supporting custom roles and permissions per tenant. Built white-label capabilities allowing complete UI customization per tenant. Implemented usage-based billing system with real-time metering and automated invoicing. Created comprehensive audit logging system for compliance requirements.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eacce442-1765399973269.png",
    imageAlt: "Modern cloud computing concept showing multiple connected devices and servers with glowing network connections on dark background representing multi-tenant architecture",
    status: "Production",
    teamSize: "10",
    duration: "24 mo",
    performanceImprovement: "+380%",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "Kubernetes", "AWS", "React"],
    achievements: [
    "Onboarded 500+ enterprise clients with zero data breach incidents",
    "Implemented tenant isolation achieving SOC 2 Type II compliance",
    "Reduced onboarding time from 2 weeks to 2 hours through automation",
    "Built usage metering system processing 100M+ events daily",
    "Achieved 99.98% uptime with multi-region deployment"],

    metrics: [
    { label: "Active Tenants", value: "500+" },
    { label: "Daily Active Users", value: "50K+" },
    { label: "System Uptime", value: "99.98%" },
    { label: "Avg Response Time", value: "180ms" }],

    architectureDescription: "Multi-tenant architecture with schema-per-tenant isolation. Shared application layer with tenant context injection. Redis for session management and caching. Elasticsearch for cross-tenant search with security filters. Kubernetes for container orchestration with namespace isolation per tenant.",
    databaseSchema: `-- Shared metadata database\nCREATE TABLE tenants (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name VARCHAR(255) NOT NULL,\n  subdomain VARCHAR(100) UNIQUE NOT NULL,\n  schema_name VARCHAR(100) UNIQUE NOT NULL,\n  plan_type VARCHAR(50) NOT NULL,\n  status VARCHAR(50) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_subdomain (subdomain),\n  INDEX idx_status (status)\n);\n\n-- Per-tenant schema template\nCREATE SCHEMA tenant_{{tenant_id}};\n\nCREATE TABLE tenant_{{tenant_id}}.users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  role_id UUID REFERENCES tenant_{{tenant_id}}.roles(id),\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE tenant_{{tenant_id}}.roles (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name VARCHAR(100) NOT NULL,\n  permissions JSONB NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`,
    apiEndpoints: [
    { method: "POST", path: "/api/v1/tenants", description: "Create new tenant with automated provisioning" },
    { method: "GET", path: "/api/v1/tenants/:id/users", description: "List tenant users with RBAC filtering" },
    { method: "PUT", path: "/api/v1/tenants/:id/branding", description: "Update tenant branding and customization" },
    { method: "GET", path: "/api/v1/tenants/:id/usage", description: "Get tenant usage metrics for billing" }],

    scalabilityStory: [
    "Implemented connection pooling per tenant reducing database connections by 80%",
    "Designed tenant sharding strategy for horizontal database scaling",
    "Created automated tenant provisioning reducing manual effort by 95%",
    "Implemented rate limiting per tenant preventing resource abuse"],

    uptime: "99.98%",
    codeSamples: [
    {
      title: "Tenant Context Middleware",
      language: "JavaScript",
      code: `class TenantMiddleware {\n  async resolveTenant(req, res, next) {\n    const subdomain = this.extractSubdomain(req.hostname);\n    \n    // Fetch tenant from cache or database\n    let tenant = await redis.get(\`tenant:\${subdomain}\`);\n    if (!tenant) {\n      tenant = await db.query(\n        'SELECT * FROM tenants WHERE subdomain = $1 AND status = $2',\n        [subdomain, 'active']\n      );\n      await redis.setex(\`tenant:\${subdomain}\`, 3600, JSON.stringify(tenant));\n    }\n    \n    if (!tenant) {\n      return res.status(404).json({ error: 'Tenant not found' });\n    }\n    \n    // Set tenant context for request\n    req.tenant = tenant;\n    req.db = this.getTenantDatabase(tenant.schema_name);\n    \n    next();\n  }\n  \n  getTenantDatabase(schemaName) {\n    return db.withSchema(schemaName);\n  }\n}`
    },
    {
      title: "Usage Metering System",
      language: "JavaScript",
      code: `class UsageMeter {\n  async recordUsage(tenantId, metric, value) {\n    const timestamp = Date.now();\n    const key = \`usage:\${tenantId}:\${metric}:\${this.getHourBucket(timestamp)}\`;\n    \n    // Increment usage in Redis\n    await redis.incrby(key, value);\n    await redis.expire(key, 86400 * 7); // 7 days retention\n    \n    // Async aggregation to database\n    await this.queueAggregation(tenantId, metric, timestamp);\n  }\n  \n  async getUsage(tenantId, metric, startDate, endDate) {\n    const usage = await db.query(\n      'SELECT date, SUM(value) as total FROM usage_metrics WHERE tenant_id = $1 AND metric = $2 AND date BETWEEN $3 AND $4 GROUP BY date ORDER BY date',\n      [tenantId, metric, startDate, endDate]\n    );\n    return usage;\n  }\n}`
    }],

    githubUrl: "https://github.com",
    liveDemo: "https://demo.example.com"
  },
  {
    id: 5,
    title: "API Gateway & Service Mesh",
    description: "Built a high-performance API gateway handling 100K+ requests/second with intelligent routing, rate limiting, and comprehensive observability.",
    fullDescription: "Designed and implemented a custom API gateway serving as the single entry point for microservices architecture. Implemented intelligent request routing with service discovery integration. Built rate limiting system with multiple strategies (fixed window, sliding window, token bucket). Created authentication and authorization layer supporting multiple protocols (OAuth2, JWT, API Keys). Implemented request/response transformation and protocol translation. Built comprehensive observability with distributed tracing, metrics collection, and log aggregation.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b9cfc75-1764651774193.png",
    imageAlt: "Futuristic digital network visualization showing data flowing through interconnected pathways with glowing blue and purple lights representing API gateway architecture",
    status: "Production",
    teamSize: "4",
    duration: "10 mo",
    performanceImprovement: "+520%",
    technologies: ["Go", "Nginx", "Redis", "Consul", "Prometheus", "Jaeger", "Envoy", "Kubernetes"],
    achievements: [
    "Handled 100K+ requests/second with p99 latency under 50ms",
    "Implemented circuit breaker pattern reducing cascade failures by 95%",
    "Built distributed tracing system providing end-to-end request visibility",
    "Reduced infrastructure costs by 35% through intelligent caching and request optimization",
    "Achieved zero-downtime deployments with blue-green deployment strategy"],

    metrics: [
    { label: "Requests/Second", value: "100K+" },
    { label: "P99 Latency", value: "48ms" },
    { label: "Cache Hit Rate", value: "87%" },
    { label: "Error Rate", value: "0.01%" }],

    architectureDescription: "API Gateway built with Go for high performance. Nginx as reverse proxy for SSL termination and load balancing. Consul for service discovery and health checking. Redis for rate limiting and caching. Envoy as service mesh sidecar for advanced traffic management. Prometheus for metrics and Jaeger for distributed tracing.",
    databaseSchema: `CREATE TABLE api_keys (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  key_hash VARCHAR(255) UNIQUE NOT NULL,\n  tenant_id UUID NOT NULL REFERENCES tenants(id),\n  name VARCHAR(255) NOT NULL,\n  rate_limit INTEGER NOT NULL,\n  allowed_endpoints TEXT[],\n  expires_at TIMESTAMP,\n  last_used_at TIMESTAMP,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_key_hash (key_hash),\n  INDEX idx_tenant_id (tenant_id)\n);\n\nCREATE TABLE request_logs (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  trace_id VARCHAR(255) NOT NULL,\n  api_key_id UUID REFERENCES api_keys(id),\n  method VARCHAR(10) NOT NULL,\n  path TEXT NOT NULL,\n  status_code INTEGER NOT NULL,\n  response_time_ms INTEGER NOT NULL,\n  request_size INTEGER,\n  response_size INTEGER,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_trace_id (trace_id),\n  INDEX idx_created_at (created_at DESC)\n);`,
    apiEndpoints: [
    { method: "POST", path: "/api/v1/keys", description: "Generate new API key with rate limits" },
    { method: "GET", path: "/api/v1/routes", description: "List configured routes and backends" },
    { method: "POST", path: "/api/v1/routes", description: "Configure new route with transformation rules" },
    { method: "GET", path: "/api/v1/metrics", description: "Get gateway performance metrics" }],

    scalabilityStory: [
    "Implemented connection pooling reducing backend connection overhead by 70%",
    "Designed request batching for downstream services reducing network calls by 60%",
    "Created adaptive rate limiting based on backend health and capacity",
    "Implemented request coalescing preventing duplicate requests to backends"],

    uptime: "99.99%",
    codeSamples: [
    {
      title: "Rate Limiter Implementation",
      language: "Go",
      code: `type RateLimiter struct {\n    redis *redis.Client\n}\n\nfunc (rl *RateLimiter) Allow(key string, limit int, window time.Duration) (bool, error) {\n    now := time.Now().Unix()\n    windowStart := now - int64(window.Seconds())\n    \n    pipe := rl.redis.Pipeline()\n    \n    // Remove old entries\n    pipe.ZRemRangeByScore(ctx, key, "0", strconv.FormatInt(windowStart, 10))\n    \n    // Count current requests\n    pipe.ZCard(ctx, key)\n    \n    // Add current request\n    pipe.ZAdd(ctx, key, &redis.Z{\n        Score:  float64(now),\n        Member: fmt.Sprintf("%d-%s", now, uuid.New().String()),\n    })\n    \n    // Set expiration\n    pipe.Expire(ctx, key, window)\n    \n    results, err := pipe.Exec(ctx)\n    if err != nil {\n        return false, err\n    }\n    \n    count := results[1].(*redis.IntCmd).Val()\n    return count < int64(limit), nil\n}`
    },
    {
      title: "Circuit Breaker Pattern",
      language: "Go",
      code: `type CircuitBreaker struct {\n    maxFailures  int\n    timeout      time.Duration\n    state        string\n    failures     int\n    lastFailTime time.Time\n    mu           sync.RWMutex\n}\n\nfunc (cb *CircuitBreaker) Call(fn func() error) error {\n    cb.mu.Lock()\n    defer cb.mu.Unlock()\n    \n    if cb.state == "open" {\n        if time.Since(cb.lastFailTime) > cb.timeout {\n            cb.state = "half-open"\n        } else {\n            return errors.New("circuit breaker is open")\n        }\n    }\n    \n    err := fn()\n    if err != nil {\n        cb.failures++\n        cb.lastFailTime = time.Now()\n        \n        if cb.failures >= cb.maxFailures {\n            cb.state = "open"\n        }\n        return err\n    }\n    \n    cb.failures = 0\n    cb.state = "closed"\n    return nil\n}`
    }],

    githubUrl: "https://github.com",
    liveDemo: null
  },
  {
    id: 6,
    title: "Blockchain-Based Supply Chain",
    description: "Developed a blockchain-powered supply chain tracking system ensuring transparency and immutability across 200+ partners in global logistics network.",
    fullDescription: "Architected and implemented a private blockchain solution for supply chain management using Hyperledger Fabric. Designed smart contracts for automated verification and validation of shipment milestones. Built integration layer connecting traditional ERP systems with blockchain network. Implemented consensus mechanism optimized for supply chain use case. Created comprehensive audit trail system with cryptographic proof of authenticity. Developed real-time tracking dashboard with IoT sensor integration.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a15e607b-1764643782417.png",
    imageAlt: "Abstract blockchain network visualization showing interconnected blocks and nodes with glowing golden chains on dark background representing distributed ledger technology",
    status: "Production",
    teamSize: "7",
    duration: "20 mo",
    performanceImprovement: "+290%",
    technologies: ["Hyperledger Fabric", "Go", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "IoT"],
    achievements: [
    "Onboarded 200+ partners across global logistics network with seamless integration",
    "Reduced shipment verification time from 48 hours to 15 minutes through automation",
    "Eliminated 99.8% of documentation fraud through cryptographic verification",
    "Processed 500K+ transactions with complete immutability and audit trail",
    "Achieved 100% traceability across entire supply chain from origin to destination"],

    metrics: [
    { label: "Network Partners", value: "200+" },
    { label: "Daily Transactions", value: "15K+" },
    { label: "Verification Time", value: "15min" },
    { label: "Fraud Reduction", value: "99.8%" }],

    architectureDescription: "Private blockchain network using Hyperledger Fabric with multiple organizations. Smart contracts (chaincode) written in Go for business logic execution. Off-chain storage using PostgreSQL for queryable data and MongoDB for document storage. REST API layer for external system integration. IoT gateway for sensor data ingestion.",
    databaseSchema: `-- Off-chain database for queryable data\nCREATE TABLE shipments (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  blockchain_tx_id VARCHAR(255) UNIQUE NOT NULL,\n  shipment_number VARCHAR(100) UNIQUE NOT NULL,\n  origin VARCHAR(255) NOT NULL,\n  destination VARCHAR(255) NOT NULL,\n  status VARCHAR(50) NOT NULL,\n  current_location VARCHAR(255),\n  estimated_delivery TIMESTAMP,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_shipment_number (shipment_number),\n  INDEX idx_status (status)\n);\n\nCREATE TABLE shipment_events (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  shipment_id UUID NOT NULL REFERENCES shipments(id),\n  blockchain_tx_id VARCHAR(255) NOT NULL,\n  event_type VARCHAR(100) NOT NULL,\n  location VARCHAR(255),\n  timestamp TIMESTAMP NOT NULL,\n  verified_by VARCHAR(255),\n  sensor_data JSONB,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  INDEX idx_shipment_id (shipment_id),\n  INDEX idx_timestamp (timestamp DESC)\n);`,
    apiEndpoints: [
    { method: "POST", path: "/api/v1/shipments", description: "Create new shipment with blockchain registration" },
    { method: "PUT", path: "/api/v1/shipments/:id/events", description: "Record shipment event with cryptographic proof" },
    { method: "GET", path: "/api/v1/shipments/:id/trace", description: "Get complete shipment history from blockchain" },
    { method: "GET", path: "/api/v1/shipments/:id/verify", description: "Verify shipment authenticity and integrity" }],

    scalabilityStory: [
    "Implemented off-chain storage reducing blockchain bloat by 85%",
    "Designed batch transaction processing improving throughput by 300%",
    "Created caching layer for frequently accessed blockchain data",
    "Implemented parallel transaction validation reducing confirmation time"],

    uptime: "99.96%",
    codeSamples: [
    {
      title: "Smart Contract - Shipment Tracking",
      language: "Go",
      code: `package main\n\nimport (\n    "encoding/json"\n    "github.com/hyperledger/fabric-contract-api-go/contractapi"\n)\n\ntype ShipmentContract struct {\n    contractapi.Contract\n}\n\ntype Shipment struct {\n    ID          string   \`json:"id"\`\n    Number      string   \`json:"number"\`\n    Origin      string   \`json:"origin"\`\n    Destination string   \`json:"destination"\`\n    Status      string   \`json:"status"\`\n    Events      []Event  \`json:"events"\`\n}\n\nfunc (s *ShipmentContract) CreateShipment(ctx contractapi.TransactionContextInterface, id string, number string, origin string, destination string) error {\n    shipment := Shipment{\n        ID:          id,\n        Number:      number,\n        Origin:      origin,\n        Destination: destination,\n        Status:      "created",\n        Events:      []Event{},\n    }\n    \n    shipmentJSON, err := json.Marshal(shipment)\n    if err != nil {\n        return err\n    }\n    \n    return ctx.GetStub().PutState(id, shipmentJSON)\n}`
    },
    {
      title: "Blockchain Integration Service",
      language: "JavaScript",
      code: `class BlockchainService {\n  async recordEvent(shipmentId, eventData) {\n    const gateway = await this.connectToNetwork();\n    const network = await gateway.getNetwork('supply-chain');\n    const contract = network.getContract('shipment');\n    \n    try {\n      // Submit transaction to blockchain\n      const result = await contract.submitTransaction(\n        'RecordEvent',\n        shipmentId,\n        JSON.stringify(eventData)\n      );\n      \n      // Store in off-chain database for querying\n      await db.shipmentEvents.create({\n        shipmentId,\n        blockchainTxId: result.toString(),\n        ...eventData\n      });\n      \n      return result;\n    } finally {\n      gateway.disconnect();\n    }\n  }\n  \n  async verifyShipment(shipmentId) {\n    const gateway = await this.connectToNetwork();\n    const network = await gateway.getNetwork('supply-chain');\n    const contract = network.getContract('shipment');\n    \n    const result = await contract.evaluateTransaction(\n      'GetShipment',\n      shipmentId\n    );\n    \n    return JSON.parse(result.toString());\n  }\n}`
    }],

    githubUrl: "https://github.com",
    liveDemo: null
  }];


  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    if (searchTerm) {
      const search = searchTerm?.toLowerCase();
      filtered = filtered?.filter(
        (project) =>
        project?.title?.toLowerCase()?.includes(search) ||
        project?.description?.toLowerCase()?.includes(search) ||
        project?.technologies?.some((tech) => tech?.toLowerCase()?.includes(search))
      );
    }

    if (filters?.technology) {
      filtered = filtered?.filter((project) =>
      project?.technologies?.includes(filters?.technology)
      );
    }

    if (filters?.teamSize) {
      filtered = filtered?.filter((project) => {
        const size = parseInt(project?.teamSize);
        const [min, max] = filters?.teamSize?.split('-')?.map((s) => parseInt(s?.replace('+', '')));
        if (filters?.teamSize?.includes('+')) {
          return size >= min;
        }
        return size >= min && size <= max;
      });
    }

    if (filters?.duration) {
      filtered = filtered?.filter((project) => {
        const duration = parseInt(project?.duration);
        const [min, max] = filters?.duration?.split('-')?.map((s) => parseInt(s?.replace('+', '')));
        if (filters?.duration?.includes('+')) {
          return duration >= min;
        }
        return duration >= min && duration <= max;
      });
    }

    if (filters?.status) {
      filtered = filtered?.filter((project) => project?.status === filters?.status);
    }

    return filtered;
  }, [searchTerm, filters, projectsData]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilters({
      technology: '',
      teamSize: '',
      duration: '',
      status: ''
    });
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const totalProjects = projectsData?.length;
  const activeProjects = projectsData?.filter((p) => p?.status === 'Production')?.length;
  const uniqueTechnologies = new Set(projectsData.flatMap((p) => p.technologies))?.size;
  const totalCommits = '15K+';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <Breadcrumbs />

          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-primary/10 rounded-lg">
                <Icon name="FolderGit2" size={28} color="var(--color-primary)" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-mono-heading">
                  Systems Showcase
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-1 font-mono-cta">
                  Deep technical case studies with measurable outcomes
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
              Explore detailed technical implementations showcasing architectural decisions, performance optimizations, and scalability solutions. Each project demonstrates problem-solving methodology and the business impact of solid backend architecture.
            </p>
          </div>


          {filteredProjects?.length === 0 ?
          <div className="text-center py-12 md:py-16">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center bg-muted rounded-lg">
                <Icon name="SearchX" size={32} color="var(--color-muted-foreground)" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground font-mono-heading mb-2">
                No Projects Found
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Try adjusting your filters or search terms
              </p>
            </div> :

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {filteredProjects?.map((project) =>
            <ProjectCard
              key={project?.id}
              project={project}
              onViewDetails={handleViewDetails} />

            )}
            </div>
          }
        </div>
      </main>
      <Footer />
      {selectedProject &&
      <ProjectDetailsModal
        project={selectedProject}
        onClose={handleCloseModal} />

      }
    </div>);

};

export default Projects;