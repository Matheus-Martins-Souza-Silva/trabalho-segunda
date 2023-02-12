import { createUseCase } from '../useCases/createUseCase'
import { indexUseCase } from '../useCases/indexUseCase'
import { showUseCase } from '../useCases/showUseCase'
import { updateUseCase } from '../useCases/updateUseCase'
import { destroyUseCase } from '../useCases/destroyUseCase'

export const create = async ({ bodymen: { body } }, res, next) => {
  try {
    const newEmployee = await createUseCase(body)
    return res.status(200).json(newEmployee)
  } catch (error) {
    next(error)
  }
}

export const index = async ({ querymen: { query } }, res, next) => {
  try {
    const indexEmployee = await indexUseCase(query)
    return res.status(200).json(indexEmployee)
  } catch (error) {
    next(error)
  }
}

export const show = async ({ params }, res, next) => {
  try {
    const showEmployee = await showUseCase(params.id)
    return res.status(200).json(showEmployee)
  } catch (error) {
    next(error)
  }
}

export const update = async ({ body, params }, res, next) => {
  try {
    const updateEmployee = await updateUseCase(body, params)
    return res.status(200).json(updateEmployee)
  } catch (error) {
    next(error)
  }
}

export const destroy = async ({ params }, res, next) => {
  try {
    const destroyEmployee = await destroyUseCase(params.id)
    return res.status(204).json(destroyEmployee)
  } catch (error) {
    next(error)
  }
}
