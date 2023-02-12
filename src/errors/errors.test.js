import { AppError, handleError } from '.'

describe('AppError', () => {
  test('should be able to create a new AppError instance', () => {
    const appError = new AppError('test message', 'test param')
    expect(appError instanceof AppError).toBe(true)
    expect(appError).toHaveProperty('message', 'test message')
    expect(appError).toHaveProperty('param', 'test param')
    expect(appError).toHaveProperty('statusCode', 400)
  })
})


describe('handleError', () => {
  test('should be able receive any error and returns a AppError instance', () => {
    try {
      handleError(new Error('test'))
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error.statusCode).toBe(500)
    }
  })
})
