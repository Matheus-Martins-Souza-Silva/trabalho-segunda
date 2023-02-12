import { createUseCase } from '../useCases/createUseCase'
import { indexUseCase } from '../useCases/indexUseCase'
import { showUseCase } from '../useCases/showUseCase'
import { updateUseCase } from '../useCases/updateUseCase'
import { destroyUseCase } from '../useCases/destroyUseCase'

export const create = async ({ user, bodymen: { body } }, res, next) => {
  try {
    const newGymNetwork = await createUseCase(...body, user)
    return res.status(200).json(newGymNetwork)
  } catch (error) {
    next(error)
  }
}

export const index = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const indexGymNetwork = await indexUseCase(query, select, cursor)
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
