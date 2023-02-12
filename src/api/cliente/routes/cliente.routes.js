import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { schema } from '../schemas/cliente'
import {
  create,
  index,
  show,
  update,
  destroy
} from '../controller/clienteController'

const router = new Router()
const { name, age, email, telephone, address, scenarioId } = schema.tree

/**
 * @api {post} /clientes Create cliente
 * @apiDescription Create a cliente with the data provided in the request body.
 * @apiGroup clientes
 * @apiUse clientesBodyParams
 * @apiUse clientesSuccessResponse
 * @apiSuccess {Object} clientes clientes data.
 * @apiError 400 Some parameters may contain invalid values.
 * @apiError 404 cliente not found.
 * @apiError 500 Internal server error.
 */
router.post('/',
  body({ name, age, email, telephone, address }),
  create
)

/**
 * @api {get} /clientes Retrieve clientes
 * @apiDescription Retrieve all clientes or filter by scenario id(gymNetwork).
 * @apiGroup clientes
 * @apiParamExample Request to retrieve all:
 *  https://{localhost}/clientes
 * @apiParamExample Request filtered by scenario id:
 *  https://{localhost}/clientes?scenarioId=612fcd8198f50e0018c2670b
 * @apiUse clientesSuccessResponse
 * @apiParam {queryParam} [scenarioId] Defines the scenario from which cliente will be retrieved.
 * @apiSuccess {Number} count Total amount of clientes.
 * @apiSuccess {Object[]} rows List of clientes.
 * @apiError 404 Not found.
 * @apiError 500 Internal server error.
 */
router.get('/',
  query({
    scenarioId: {
      type: String,
      paths: ['scenarioId']
    }
  }),
  index
)

/**
 * @api {get} /clientes/:id Retrieve clientes
 * @apiDescription Retrieve all clientes by id.
 * @apiGroup clientes
 * @apiParamExample Request to retrieve all:
 *  https://{localhost}/clientes
 * @apiParamExample Request filtered by scenario id:
 *  https://{localhost}/clientes?scenarioId=612fcd8198f50e0018c2670b
 * @apiUse clientesSuccessResponse
 * @apiParam {clienteParam} id This specifies which cliente will be retrieved.
 * @apiSuccess {Number} count Total amount of clientes.
 * @apiSuccess {Object[]} rows List of clientes.
 * @apiError 404 Not found.
 * @apiError 500 Internal server error.
 */
router.get('/:id',
  show
)

/**
 * @api {put} /clientes/:id Update cliente
 * @apiDescription Update a cliente by id. This a private route, access token must be provided.
 * @apiGroup clientes
 * @apiUse clientesBodyParams
 * @apiExample Request example:
 *  https://{localhost}/clientes/6177f5a0c7302800170934aa
 * @apiSuccess {Object} cliente clientes data updated.
 * @apiError 400 Some parameters may contain invalid values.
 * @apiError 404 cliente not found.
 * @apiError 500 Internal server error.
 */
router.put('/:id',
  body({
    scenarioId,
    telephone,
    address,
    email
  }),
  update
)

/**
 * @api {delete} /clientes/:id Delete cliente
 * @apiDescription Delete a cliente by id. This a private route, access token must be provided.
 * @apiGroup clientes
 * @apiParam {clienteParam} id This specifies which cliente will be deleted.
 * @apiExample Request example:
 *  https://{localhost}/clientes/61af9ed6ceb857001820df80
 * @apiSuccess 204 No Content.
 * @apiError 404 cliente not found.
 * @apiError 500 Internal Server Error.
 */
router.delete('/:id',
  destroy
)

export default router
