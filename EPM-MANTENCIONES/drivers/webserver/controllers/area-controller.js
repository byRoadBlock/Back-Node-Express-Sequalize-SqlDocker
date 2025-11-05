let areaDB = require('../../../data-access/area')

exports.getAll = (req, res, next) => {
    areaDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

exports.findId = (req, res, next) => {
    let id = req.params.id
    areaDB.find('IdArea', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}
