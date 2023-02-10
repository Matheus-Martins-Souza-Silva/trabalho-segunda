import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { HFit } from '.'

const app = () => express(apiRoot, routes)

let hFit

beforeEach(async () => {
  hFit = await HFit.create({})
})

test('POST /H-fits 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ cliente: 'test', employee: 'test', gym: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.cliente).toEqual('test')
  expect(body.employee).toEqual('test')
  expect(body.gym).toEqual('test')
})

test('GET /H-fits 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /H-fits/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${hFit.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hFit.id)
})

test('GET /H-fits/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /H-fits/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${hFit.id}`)
    .send({ cliente: 'test', employee: 'test', gym: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(hFit.id)
  expect(body.cliente).toEqual('test')
  expect(body.employee).toEqual('test')
  expect(body.gym).toEqual('test')
})

test('PUT /H-fits/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ cliente: 'test', employee: 'test', gym: 'test' })
  expect(status).toBe(404)
})

test('DELETE /H-fits/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${hFit.id}`)
  expect(status).toBe(204)
})

test('DELETE /H-fits/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
