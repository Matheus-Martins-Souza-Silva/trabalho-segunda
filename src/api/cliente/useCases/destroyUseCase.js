import cliente from '../schemas/cliente'

export const destroyUseCase = async (params, res, next) => {
  try {
    const destroyCliente = await cliente.findByIdAndDelete(params).remove()
    res.status(204).json(destroyCliente)
  } catch (error) {
    return next(error)
  }
}
