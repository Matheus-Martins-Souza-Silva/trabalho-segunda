import GymNetwork from '../schemas/gymNetwork'
import { AppError } from '../../../errors/index.js'

export const showUseCase = async (id, next) => {
  try {
    const showGymNetwork = await GymNetwork.findById(id)
    if (!showGymNetwork) throw new AppError('could not find showGymNetwork')

    return showGymNetwork.view(true)
  } catch (error) {
    console.log(error)
  }
}
