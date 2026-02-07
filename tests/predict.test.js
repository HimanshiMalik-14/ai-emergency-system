const request = require("supertest");
const express = require("express");
const routes = require("../routes");
const request = require('supertest');
const app = require('../index');


const app = express();
app.use("/", routes);

test("GET /predict/:hospitalId returns prediction", async () => {
  const res = await request(app).get("/predict/1");
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty("hospitalId");
  expect(res.body).toHaveProperty("predictedLoad");
});

describe('Phase 2 Endpoints', () => {
  it('should return dummy prediction', async () => {
    const res = await request(app).get('/api/predict/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('hospitalId');
  });

  it('should return accident prediction', async () => {
    const res = await request(app).get('/api/prediction');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('predictedLoad');
  });

  it('should return hotspots', async () => {
    const res = await request(app).get('/api/hotspots');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return alerts (pending fix)', async () => {
    const res = await request(app).get('/api/alerts');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('hospitalAlerts');
  });
});
