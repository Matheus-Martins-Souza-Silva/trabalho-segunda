import { success, notFound } from '../../services/response/'
import { HFit } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  HFit.create(body)
    .then((hFit) => hFit.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  HFit.count(query)
    .then(count => HFit.find(query, select, cursor)
      .then((hFits) => ({
        count,
        rows: hFits.map((hFit) => hFit.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  HFit.findById(params.id)
    .then(notFound(res))
    .then((hFit) => hFit ? hFit.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  HFit.findById(params.id)
    .then(notFound(res))
    .then((hFit) => hFit ? Object.assign(hFit, body).save() : null)
    .then((hFit) => hFit ? hFit.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  HFit.findById(params.id)
    .then(notFound(res))
    .then((hFit) => hFit ? hFit.remove() : null)
    .then(success(res, 204))
    .catch(next)
