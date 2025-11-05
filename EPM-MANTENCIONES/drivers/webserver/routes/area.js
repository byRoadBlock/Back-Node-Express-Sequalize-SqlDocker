let areaDB = require('../../../data-access/area')
let area = module.exports = {}

area.getAll = (req, res, next) => {
    // #swagger.description = 'Some description...'
    areaDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

area.findId = (req, res, next) => {
    let id = req.params.id
    areaDB.find('IdArea', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

area.add = (req, res, next) => {
    areaDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

area.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    areaDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'area not found'})
    })
    .catch(err => next(err))
}

area.delete = (req, res, next) => {
    let id = req.params.id
    areaDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'area deleted'})
        return res.status(404).json({message: 'area not found'})
    })
    .catch(err => next(err))
}

// Routes
