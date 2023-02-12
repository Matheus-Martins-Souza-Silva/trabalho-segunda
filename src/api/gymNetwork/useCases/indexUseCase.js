import GymNetwork from '../schemas/gymNetwork'

export const indexUseCase = async (query, select, cursor, next) => {
  try {
    const count = await GymNetwork.countDocuments(query)
    const rows = await GymNetwork.find(query, select, cursor)
      .then(users => users.map(user => user.view()))

    return { count, rows }
  } catch (error) {
    next(error)
  }
}
