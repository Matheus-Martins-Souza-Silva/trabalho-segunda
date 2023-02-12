import Cliente from '../schemas/cliente'

export const createUseCase = async (body, res, next) => {
  try {
    const cliente = await Cliente.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return res.status(201).json(cliente)
  } catch (error) {
    next(error)
  }
}
