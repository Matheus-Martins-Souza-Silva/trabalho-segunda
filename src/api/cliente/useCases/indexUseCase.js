import Cliente from '../schemas/cliente'

export const indexUseCase = async ({ querymen: { query, select, cursor } }, next) => {
  try {
    const count = await Cliente.countDocuments(query)
    const rows = await Cliente.find(query, select, cursor)
      .then(users => users.map(user => user.view()))

    return { count, rows }
  } catch (error) {
    next(error)
  }
}
