import Cliente from '../schemas/cliente'
import success from '../../../services/response/index'

export const updateUseCase = async (body, params, res, next) => {
  try {
    const updateCliente = await Cliente.findById(params.id)

    Object.assign(updateCliente, body).save()
    success(res)(updateCliente.view(true))

    res.status(200).json(updateCliente)
  } catch (error) {
    console.log(error)
  }
}
