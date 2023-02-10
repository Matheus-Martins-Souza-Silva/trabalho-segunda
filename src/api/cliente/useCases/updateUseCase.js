import Cliente from '../schemas/cliente'

export const updateUseCase = async (body, params, res, next) => {
  try {
    const updateCliente = await Cliente.findByIdAndUpdated(params.id, body, { new: true })
    res.status(200).json(updateCliente)
  } catch {
    next(error)
  }
}