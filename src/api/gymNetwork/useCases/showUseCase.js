import GymNetwork from '../schemas/gymNetwork'

export const showUseCase = async (id, next) => {
  try {
    const showGymNetwork = await GymNetwork.findById({ _id: id })
    if (!showGymNetwork) throw new Error('could not find showGymNetwork')

    return showGymNetwork
  } catch (error) {
    return next(error)
  }
}
