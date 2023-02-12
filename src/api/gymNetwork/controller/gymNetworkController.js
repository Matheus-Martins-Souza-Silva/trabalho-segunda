import { createUseCase } from '../useCases/createUseCase'
import { indexUseCase } from '../useCases/indexUseCase'
import { showUseCase } from '../useCases/showUseCase'
import { updateUseCase } from '../useCases/updateUseCase'
import { destroyUseCase } from '../useCases/destroyUseCase'

export const create = async ({ bodymen: { body } }, res, next) => {
  try {
    const newGymNetwork = await createUseCase(body)
    return res.status(200).json(newGymNetwork)
  } catch (error) {
    next(error)
  }
}

export const index = async ({ querymen: { query } }, res, next) => {
  try {
    const indexGymNetwork = await indexUseCase(query)
    return res.status(200).json(indexGymNetwork)
  } catch (error) {
    next(error)
  }
}

export const show = async ({ params }, res, next) => {
  try {
    const showGymNetwork = await showUseCase(params.id)
    return res.status(200).json(showGymNetwork)
  } catch (error) {
    next(error)
  }
}

export const update = async ({ body, params }, res, next) => {
  try {
    const updateGymNetwork = await updateUseCase(body, params)
    return res.status(200).json(updateGymNetwork)
  } catch (error) {
    next(error)
  }
}

export const destroy = async ({ params }, res, next) => {
  try {
    const destroGymNetwork = await destroyUseCase(params.id)
    return res.status(204).json(destroGymNetwork)
  } catch (error) {
    next(error)
  }
}
