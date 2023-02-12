export class AppError {
  constructor (message, params, statusCode = 400) {
    this.param = params
    this.message = message
    this.statusCode = statusCode
  }
}

export const handleError = (error) => {
  console.log(error)
  if (error instanceof AppError) throw error
  const message = error.message.toString() ?? error.toString()
  const statusCode = error.statusCode ?? 500
  throw new AppError(message, error?.param, statusCode)
}
