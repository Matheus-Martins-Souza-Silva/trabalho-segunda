import { createUseCase } from '../useCases/createUseCase'
import { indexUseCase } from '../useCases/indexUseCase'
import { showUseCase } from '../useCases/showUseCase'
import { updateUseCase } from '../useCases/updateUseCase'
import { destroyUseCase } from '../useCases/destroyUseCase'

export const create = async ({ user, bodymen: { body } }, res, next) => {
  try {
    const newcliente = await createUseCase(...body, user)
    return res.status(200).json(newcliente)
  } catch (error) {
    return next(error)
  }
}

export const index = async ({ querymen: { query, select, cursor } }, res, next) => {
  try {
    const index = await indexUseCase(query, select, cursor)
    return res.status(200).json(index)
  } catch (error) {
    return next(error)
  }
}

export const show = async ({ params }, res, next) => {
  try {
    const show = await showUseCase(params.id)
    return res.status(200).json(show)
  } catch (error) {
    return next(error)
  }
}

export const update = async ({ body, params }, res, next) => {
  try {
    const update = await updateUseCase( body, params )
    return res.status(200).json(update)
  } catch (error) {
    return next(error)
  }
}

export const destroy = async ({ params }, res, next) => { 
  try {
    const destroy = await destroyUseCase(params.id)
    return res.status(204).json(destroy)
  } catch (error) {
    return next(error)
  }
}