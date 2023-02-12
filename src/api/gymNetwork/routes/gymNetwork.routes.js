import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { schema } from '../schemas/gymNetwork'
import {
  create,
  index,
  show,
  update,
  destroy
} from '../controller/gymNetworkController'

const router = new Router()
const { name, email, telephone, address, scenarioId } = schema.tree

/**
 * @api {post} /gymNetworks Create gymNetwork
 * @apiDescription Create a gymNetwork with the data provided in the request body.
 * @apiGroup gymNetworks
 * @apiUse gymNetworksBodyParams
 * @apiUse gymNetworksSuccessResponse
 * @apiSuccess {Object} gymNetworks gymNetworks data.
 * @apiError 400 Some parameters may contain invalid values.
 * @apiError 404 gymNetwork not found.
 * @apiError 500 Internal server error.
 */
router.post('/',
  body({ name, email, telephone, address }),
  create
)

/**
 * @api {get} /gymNetworks Retrieve gymNetworks
 * @apiDescription Retrieve all gymNetworks or filter by scenario id(gymNetwork).
 * @apiGroup gymNetworks
 * @apiParamExample Request to retrieve all:
 *  https://{localhost}/gymNetworks
 * @apiParamExample Request filtered by scenario id:
 *  https://{localhost}/gymNetworks?scenarioId=612fcd8198f50e0018c2670b
 * @apiUse gymNetworksSuccessResponse
 * @apiParam {queryParam} [scenarioId] Defines the scenario from which gymNetwork will be retrieved.
 * @apiSuccess {Number} count Total amount of gymNetworks.
 * @apiSuccess {Object[]} rows List of gymNetworks.
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
 * @api {get} /gymNetworks/:id Retrieve gymNetworks
 * @apiDescription Retrieve all gymNetworks by id.
 * @apiGroup gymNetworks
 * @apiParamExample Request to retrieve all:
 *  https://{localhost}/gymNetworks
 * @apiParamExample Request filtered by scenario id:
 *  https://{localhost}/gymNetworks?scenarioId=612fcd8198f50e0018c2670b
 * @apiUse gymNetworksSuccessResponse
 * @apiParam {gymNetworkParam} id This specifies which gymNetwork will be retrieved.
 * @apiSuccess {Number} count Total amount of gymNetworks.
 * @apiSuccess {Object[]} rows List of gymNetworks.
 * @apiError 404 Not found.
 * @apiError 500 Internal server error.
 */
router.get('/:id',
  show
)

/**
 * @api {put} /gymNetworks/:id Update gymNetwork
 * @apiDescription Update a gymNetwork by id. This a private route, access token must be provided.
 * @apiGroup gymNetworks
 * @apiUse gymNetworksBodyParams
 * @apiExample Request example:
 *  https://{localhost}/gymNetworks/6177f5a0c7302800170934aa
 * @apiSuccess {Object} gymNetwork gymNetworks data updated.
 * @apiError 400 Some parameters may contain invalid values.
 * @apiError 404 gymNetwork not found.
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
 * @api {delete} /gymNetworks/:id Delete gymNetwork
 * @apiDescription Delete a gymNetwork by id. This a private route, access token must be provided.
 * @apiGroup gymNetworks
 * @apiParam {gymNetworkParam} id This specifies which gymNetwork will be deleted.
 * @apiExample Request example:
 *  https://{localhost}/gymNetworks/61af9ed6ceb857001820df80
 * @apiSuccess 204 No Content.
 * @apiError 404 gymNetwork not found.
 * @apiError 500 Internal Server Error.
 */
router.delete('/:id',
  destroy
)

export default router
