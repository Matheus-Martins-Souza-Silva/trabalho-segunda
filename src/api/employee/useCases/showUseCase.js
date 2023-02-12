import Employee from '../schemas/employee'
import { AppError } from '../../../errors/index.js'

export const showUseCase = async (id, next) => {
  try {
    const showEmployee = await Employee.findById(id)
    if (!showEmployee) throw new AppError('could not find Employee')

    return showEmployee.view(true)
  } catch (error) {
    return next(error)
  }
}
