# Prometheus + Node.js Monitoring Demo

This project demonstrates how to set up Prometheus to scrape metrics from a Node.js application.

## Project Structure
- **prometheus/** → Contains Prometheus configuration
- **node-metrics-app/** → Node.js application exposing `/metrics` endpoint

## Steps to Run

### 1. Start Node.js Metrics App
```bash
cd node-metrics-app
npm install
npm start
```
App will be available at: [http://localhost:3000](http://localhost:3000)  
Metrics endpoint: [http://localhost:3000/metrics](http://localhost:3000/metrics)

### 2. Configure & Start Prometheus
```bash
cd prometheus
# Download Prometheus from https://prometheus.io/download/ (v2.53.1 or latest)
# Place the binary here and run:
./prometheus --config.file=prometheus.yml
```
Prometheus UI: [http://localhost:9090](http://localhost:9090)

### 3. Verify Metrics
1. Visit Prometheus Targets: [http://localhost:9090/targets](http://localhost:9090/targets)
2. Ensure the `nodejs_app` target is **UP**
3. Search for `http_requests_total` and generate some traffic:
```bash
curl http://localhost:3000/
```

## Features
- Prometheus scrapes metrics from Node.js app every 5 seconds
- Custom metric: `http_requests_total`
- Ready to integrate with Grafana for visualization
# prometheus_nodejs
