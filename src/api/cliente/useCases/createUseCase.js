import Cliente from '../schemas/cliente'
import { AppError } from '../../../errors/index'

export const createUseCase = async ({ bodymen: { body } }, res, next) => {
  try {
    const clientes = await Cliente.find({ email: body.email })
    if (clientes.length) throw new AppError('O email informado já existe', 'email', 409)

    const cliente = await Cliente.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.status(201).json(cliente)
  } catch (error) {
    return next(error)
  }
}
