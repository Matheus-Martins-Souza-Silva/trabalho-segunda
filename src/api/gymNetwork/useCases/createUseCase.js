import GymNetwork from '../schemas/gymNetwork'

export const createUseCase = async ({ bodymen: { body } }, res, next) => {
  try {
    const newGymNetwork = await GymNetwork.create(...body)
    res.status(201).json(newGymNetwork)
  } catch (error) {
    return next(error)
  }
}
