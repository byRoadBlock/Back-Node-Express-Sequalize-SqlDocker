let ordendetalleDB = require('../../../data-access/orden-detalle')
let ordendetalle = module.exports = {}

ordendetalle.getAll = (req, res, next) => {
    ordendetalleDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

ordendetalle.findId = (req, res, next) => {
    let id = req.params.id
    ordendetalleDB.find('IdOrdenDetalle', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

ordendetalle.add = (req, res, next) => {
    ordendetalleDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

ordendetalle.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    ordendetalleDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'ordendetalle not found'})
    })
    .catch(err => next(err))
}

ordendetalle.delete = (req, res, next) => {
    let id = req.params.id
    ordendetalleDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'ordendetalle deleted'})
        return res.status(404).json({message: 'ordendetalle not found'})
    })
    .catch(err => next(err))
}

// Routes
