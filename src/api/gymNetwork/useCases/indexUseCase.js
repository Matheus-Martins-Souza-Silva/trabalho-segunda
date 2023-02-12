import GymNetwork from '../schemas/gymNetwork'

export const indexUseCase = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const indexGymNetwork = await GymNetwork.countDocuments(query, select, cursor)
    res.status(200).json(indexGymNetwork)
  } catch (error) {
    next(error)
  }
}
