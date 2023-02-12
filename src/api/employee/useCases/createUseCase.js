import Employee from '../schemas/employee'

export const createUseCase = async (body, res, next) => {
  try {
    const createEmployee = await Employee.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.status(201).json(createEmployee)
  } catch (error) {
    return next(error)
  }
}
