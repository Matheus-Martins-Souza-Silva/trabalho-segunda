import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export {HFit, schema } from './model'

const router = new Router()
const { cliente, employee, gym } = schema.tree

/**
 * @api {post} /H-fits Create h fit
 * @apiName CreateHFit
 * @apiGroup HFit
 * @apiParam cliente H fit's cliente.
 * @apiParam employee H fit's employee.
 * @apiParam gym H fit's gym.
 * @apiSuccess {Object} hFit H fit's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 H fit not found.
 */
router.post('/',
  body({ cliente, employee, gym }),
  create)

/**
 * @api {get} /H-fits Retrieve h fits
 * @apiName RetrieveHFits
 * @apiGroup HFit
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of h fits.
 * @apiSuccess {Object[]} rows List of h fits.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /H-fits/:id Retrieve h fit
 * @apiName RetrieveHFit
 * @apiGroup HFit
 * @apiSuccess {Object} hFit H fit's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 H fit not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /H-fits/:id Update h fit
 * @apiName UpdateHFit
 * @apiGroup HFit
 * @apiParam cliente H fit's cliente.
 * @apiParam employee H fit's employee.
 * @apiParam gym H fit's gym.
 * @apiSuccess {Object} hFit H fit's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 H fit not found.
 */
router.put('/:id',
  body({ cliente, employee, gym }),
  update)

/**
 * @api {delete} /H-fits/:id Delete h fit
 * @apiName DeleteHFit
 * @apiGroup HFit
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 H fit not found.
 */
router.delete('/:id',
  destroy)

export default router
