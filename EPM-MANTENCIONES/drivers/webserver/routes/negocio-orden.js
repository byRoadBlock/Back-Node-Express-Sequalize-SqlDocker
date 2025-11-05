let negocioordenDB = require('../../../data-access/negocio-orden')
let negocioorden = module.exports = {}

negocioorden.getAll = (req, res, next) => {
    negocioordenDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

negocioorden.findId = (req, res, next) => {
    let id = req.params.id
    negocioordenDB.find('IdNegocioOrden', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

negocioorden.add = (req, res, next) => {
    negocioordenDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

negocioorden.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    negocioordenDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'negocioorden not found'})
    })
    .catch(err => next(err))
}

negocioorden.delete = (req, res, next) => {
    let id = req.params.id
    negocioordenDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'negocioorden deleted'})
        return res.status(404).json({message: 'negocioorden not found'})
    })
    .catch(err => next(err))
}

// Routes
