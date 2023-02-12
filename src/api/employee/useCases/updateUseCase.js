import Employee from '../schemas/employee'
import success from '../../../services/response/index'

export const updateUseCase = async (body, params, res, next) => {
  try {
    const updateEmployee = await Employee.findById(params.id)

    Object.assign(updateEmployee, body).save()
    success(res)(updateEmployee.view(true))

    res.status(200).json(updateEmployee)
  } catch (error) {
    next(error)
  }
}
