import Cliente from '../schemas/cliente.js'

export const showUseCase = async (id, next) => {
  try {
    const showCliente = await Cliente.findById({ _id: id })
    if (!showCliente) throw new Error('could not find customer')

    return showCliente
  } catch (error) {
    return next(error)
  }
}