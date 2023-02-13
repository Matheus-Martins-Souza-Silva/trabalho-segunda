import cliente from '../schemas/cliente'

export const destroyUseCase = async (params, res, next) => {
  try {
    const destroyCliente = await cliente.findByIdAndDelete(params)
    res.status(204).json(destroyCliente)
  } catch (error) {
    console.log(error)
  }
}
