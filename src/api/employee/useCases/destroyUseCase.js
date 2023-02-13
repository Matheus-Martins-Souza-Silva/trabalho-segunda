import Employee from '../schemas/employee'

export const destroyUseCase = async ({ params }, res, next) => {
  try {
    const destroyEmployee = await Employee.findByIdAndDelete(params)
    res.status(204).json(destroyEmployee)
  } catch (error) {
    console.log(error)
  }
}
