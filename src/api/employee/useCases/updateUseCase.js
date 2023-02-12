import Employee from '../schemas/employee'

export const updateUseCase = async (body, params, res, next) => {
  try {
    const updateEmployee = await Employee.findByIdAndUpdated(params.id, body, { new: true })
    res.status(200).json(updateEmployee)
  } catch (error) {
    next(error)
  }
}
