import GymNetwork from '../schemas/gymNetwork'

export const destroyUseCase = async (params, res, next) => {
  try {
    const destroGymNetwork = await GymNetwork.findBy(params)
    res.status(204).json(destroGymNetwork)
  } catch (error) {
    console.log(error)
  }
}
