let negociodetalleDB = require('../../../data-access/negocio-detalle')
let negociodetalle = module.exports = {}

negociodetalle.getAll = (req, res, next) => {
    negociodetalleDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

negociodetalle.findId = (req, res, next) => {
    let id = req.params.id
    negociodetalleDB.find('IdNegocioDetalle', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

negociodetalle.add = (req, res, next) => {
    negociodetalleDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

negociodetalle.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    negociodetalleDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'negociodetalle not found'})
    })
    .catch(err => next(err))
}

negociodetalle.delete = (req, res, next) => {
    let id = req.params.id
    negociodetalleDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'negociodetalle deleted'})
        return res.status(404).json({message: 'negociodetalle not found'})
    })
    .catch(err => next(err))
}

// Routes
