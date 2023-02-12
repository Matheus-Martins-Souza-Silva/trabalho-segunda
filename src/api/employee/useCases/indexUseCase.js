import Employee from '../schemas/employee'

export const indexUseCase = async (query, select, cursor, next) => {
  try {
    const count = await Employee.countDocuments(query)
    const rows = await Employee.find(query, select, cursor)
      .then(users => users.map(user => user.view()))

    return { count, rows }
  } catch (error) {
    next(error)
  }
}
