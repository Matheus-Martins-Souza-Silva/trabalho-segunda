import GymNetwork from '../schemas/gymNetwork'

export const updateUseCase = async (body, params, res, next) => {
  try {
    const updateGymNetwork = await GymNetwork.findByIdAndUpdated(params.id, body, { new: true })
    res.status(200).json(updateGymNetwork)
  } catch (error) {
    next(error)
  }
}
