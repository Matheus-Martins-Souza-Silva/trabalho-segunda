import Cliente from '../schemas/cliente'

export const indexUseCase = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const resultCliente = await Cliente.countDocuments(query, select, cursor)
    res.status(200).json(resultCliente)
  } catch (error) {
    next(error)
  }
}
