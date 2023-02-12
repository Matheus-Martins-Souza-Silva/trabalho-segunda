import Cliente from '../schemas/cliente'

export const createUseCase = async ({ bodymen: { body } }, res, next) => {
  try {
    const createCliente = await Cliente.create(...body)
    res.status(201).json(createCliente)
  } catch (error) {
    return next(error)
  }
}
