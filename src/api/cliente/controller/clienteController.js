import { createUseCase } from '../useCases/createUseCase'
import { indexUseCase } from '../useCases/indexUseCase'
import { showUseCase } from '../useCases/showUseCase'
import { updateUseCase } from '../useCases/updateUseCase'
import { destroyUseCase } from '../useCases/destroyUseCase'

export const create = async ({ bodymen: { body } }, res) => {
  try {
    const newcliente = await createUseCase(body)
    return res.status(200).json(newcliente)
  } catch (error) {
    console.log(error)
  }
}

export const index = async ({ querymen: { query } }, res, next) => {
  try {
    const indexCliente = await indexUseCase(query)
    return res.status(200).json(indexCliente)
  } catch (error) {
    next(error)
  }
}

export const show = async ({ params }, res, next) => {
  try {
    const showCliente = await showUseCase(params.id)
    return res.status(200).json(showCliente)
  } catch (error) {
    next(error)
  }
}

export const update = async ({ body, params }, res, next) => {
  try {
    const updateCliente = await updateUseCase(body, params)
    return res.status(200).json(updateCliente)
  } catch (error) {
    next(error)
  }
}

export const destroy = async ({ params }, res, next) => {
  try {
    const destroyCliente = await destroyUseCase(params.id)
    return res.status(204).json(destroyCliente)
  } catch (error) {
    next(error)
  }
}
