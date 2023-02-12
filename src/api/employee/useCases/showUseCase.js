import Employee from '../schemas/employee'

export const showUseCase = async (id, next) => {
  try {
    const showEmployee = await Employee.findById({ _id: id })
    if (!showEmployee) throw new Error('could not find customer')

    return showEmployee
  } catch (error) {
    return next(error)
  }
}
