const express = require('express');
const client = require('prom-client');
const app = express();
const register = new client.Registry();

// Default metrics
client.collectDefaultMetrics({ register });

// Custom counter metric
const httpRequests = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests'
});
register.registerMetric(httpRequests);

// Middleware to increment the counter
app.use((req, res, next) => {
  httpRequests.inc();
  next();
});

app.get('/', (req, res) => res.send('Hello from Node.js Metrics App!'));

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => console.log('Node.js metrics app running on port 3000'));
