import Cliente from '../schemas/cliente.js'
import { AppError } from '../../../errors/index.js'

export const showUseCase = async (id, next) => {
  try {
    const showCliente = await Cliente.findById(id)
    if (!showCliente) throw new AppError('Cliente not found', 'Show User', 404)

    return showCliente.view(true)
  } catch (error) {
    next(error)
  }
}
