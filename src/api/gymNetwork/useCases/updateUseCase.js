import GymNetwork from '../schemas/gymNetwork'
import success from '../../../services/response/index'

export const updateUseCase = async (body, params, res, next) => {
  try {
    const updateGymNetwork = await GymNetwork.findById(params.id)

    Object.assign(updateGymNetwork, body).save()
    success(res)(updateGymNetwork.view(true))

    res.status(200).json(updateGymNetwork)
  } catch (error) {
    console.log(error)
  }
}
