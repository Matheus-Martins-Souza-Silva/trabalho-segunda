import GymNetwork from '../schemas/gymNetwork'

export const createUseCase = async (body, res, next) => {
  try {
    const newGymNetwork = await GymNetwork.create({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.status(201).json(newGymNetwork)
  } catch (error) {
    console.log(error)
  }
}
