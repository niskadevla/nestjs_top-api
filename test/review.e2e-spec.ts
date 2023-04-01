import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import * as request from 'supertest';
import { disconnect, Types } from 'mongoose';

import { AppModule } from '../src/app.module';
import { CreateReviewDto } from '../src/core/review/dto/create-review.dto';
import { ErrorMessages } from '../src/core/review/constants/error-messages.consts';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
  name: 'Test',
  title: 'Title',
  description: 'Test description',
  rating: 5,
  productId,
};

describe('ReviewController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => {
    disconnect();
  });

  it('/review/create (POST) - success', async () => {
    const {
      body: { _id },
    }: request.Response = await request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect('Content-type', /json/)
      .expect(201);

    createdId = _id;
    expect(createdId).toBeDefined();
  });

  it('/review/create (POST) - failed', async () => {
    const {
      body: { error },
    }: request.Response = await request(app.getHttpServer())
      .post('/review/create')
      .send({ ...testDto, rating: 0 })
      .expect('Content-type', /json/)
      .expect(400);

    expect(error).toBe('Bad Request');
  });

  it('/review/byProduct/:productId (GET) - success', async () => {
    const { body }: request.Response = await request(app.getHttpServer())
      .get(`/review/byProduct/${productId}`)
      .expect('Content-type', /json/)
      .expect(200);

    expect(body.length).toBe(1);
  });

  it('/review/byProduct/:productId (GET) - fail', async () => {
    const productId = new Types.ObjectId().toHexString();
    const { body }: request.Response = await request(app.getHttpServer())
      .get(`/review/byProduct/${productId}`)
      .expect('Content-type', /json/)
      .expect(200);

    expect(body.length).toBe(0);
  });

  it('/review/:id (DELETE) - success', () => {
    return request(app.getHttpServer()).delete(`/review/${createdId}`).expect(200);
  });

  it('/review/:id (DELETE) - fail', () => {
    createdId = new Types.ObjectId().toHexString();

    return request(app.getHttpServer())
      .delete(`/review/${createdId}`)
      .expect(404, { statusCode: 404, message: ErrorMessages.reviewNotFound });
  });
});
