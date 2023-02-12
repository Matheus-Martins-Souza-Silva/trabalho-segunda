import Employee from '../schemas/employee'

export const indexUseCase = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const indexEmployee = await Employee.countDocuments(query, select, cursor)
    res.status(200).json(indexEmployee)
  } catch (error) {
    next(error)
  }
}
