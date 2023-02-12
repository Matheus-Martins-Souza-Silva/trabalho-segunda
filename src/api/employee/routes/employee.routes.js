import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { schema } from '../schemas/employee'
import {
  create,
  index,
  show,
  update,
  destroy
} from '../controller/employeeController'

const router = new Router()
const { name, age, email, telephone, address, scenarioId } = schema.tree

/**
 * @api {post} /employees Create employee
 * @apiDescription Create a employee with the data provided in the request body.
 * @apiGroup employees
 * @apiUse employeesBodyParams
 * @apiUse employeesSuccessResponse
 * @apiSuccess {Object} employees employees data.
 * @apiError 400 Some parameters may contain invalid values.
 * @apiError 404 employee not found.
 * @apiError 500 Internal server error.
 */
router.post('/',
  body({ name, age, email, telephone, address }),
  create
)

/**
 * @api {get} /employees Retrieve employees
 * @apiDescription Retrieve all employees or filter by scenario id(gymNetwork).
 * @apiGroup employees
 * @apiParamExample Request to retrieve all:
 *  https://{localhost}/employees
 * @apiParamExample Request filtered by scenario id:
 *  https://{localhost}/employees?scenarioId=612fcd8198f50e0018c2670b
 * @apiUse employeesSuccessResponse
 * @apiParam {queryParam} [scenarioId] Defines the scenario from which employee will be retrieved.
 * @apiSuccess {Number} count Total amount of employees.
 * @apiSuccess {Object[]} rows List of employees.
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
 * @api {get} /employees/:id Retrieve employees
 * @apiDescription Retrieve all employees by id.
 * @apiGroup employees
 * @apiParamExample Request to retrieve all:
 *  https://{localhost}/employees
 * @apiParamExample Request filtered by scenario id:
 *  https://{localhost}/employees?scenarioId=612fcd8198f50e0018c2670b
 * @apiUse employeesSuccessResponse
 * @apiParam {employeeParam} id This specifies which employee will be retrieved.
 * @apiSuccess {Number} count Total amount of employees.
 * @apiSuccess {Object[]} rows List of employees.
 * @apiError 404 Not found.
 * @apiError 500 Internal server error.
 */
router.get('/:id',
  show
)

/**
 * @api {put} /employees/:id Update employee
 * @apiDescription Update a employee by id. This a private route, access token must be provided.
 * @apiGroup employees
 * @apiUse employeesBodyParams
 * @apiExample Request example:
 *  https://{localhost}/employees/6177f5a0c7302800170934aa
 * @apiSuccess {Object} employee employees data updated.
 * @apiError 400 Some parameters may contain invalid values.
 * @apiError 404 employee not found.
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
 * @api {delete} /employees/:id Delete employee
 * @apiDescription Delete a employee by id. This a private route, access token must be provided.
 * @apiGroup employees
 * @apiParam {employeeParam} id This specifies which employee will be deleted.
 * @apiExample Request example:
 *  https://{localhost}/employees/61af9ed6ceb857001820df80
 * @apiSuccess 204 No Content.
 * @apiError 404 employee not found.
 * @apiError 500 Internal Server Error.
 */
router.delete('/:id',
  destroy
)

export default router
