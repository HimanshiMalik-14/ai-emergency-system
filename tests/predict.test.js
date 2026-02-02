const request = require("supertest");
const express = require("express");
const routes = require("../routes");

const app = express();
app.use("/", routes);

test("GET /predict/:hospitalId returns prediction", async () => {
  const res = await request(app).get("/predict/1");
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty("hospitalId");
  expect(res.body).toHaveProperty("predictedLoad");
});