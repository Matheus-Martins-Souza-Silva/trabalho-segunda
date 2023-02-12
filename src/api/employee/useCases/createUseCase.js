import Employee from '../schemas/employee'

export const createUseCase = async ({ bodymen: { body } }, res, next) => {
  try {
    const createEmployee = await Employee.create(...body)
    res.status(201).json(createEmployee)
  } catch (error) {
    return next(error)
  }
}
