import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from '../../src/routes/userRoutes.js';
import { MongoMemoryServer } from 'mongodb-memory-server';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

let mongoServer;
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test('POST /api/users creates a user', async () => {
  const res = await request(app).post('/api/users').send({
    name: 'Paul',
    email: 'paul@example.com'
  });
  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe('Paul');
});