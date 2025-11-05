let estadoordenDB = require('../../../data-access/estado-orden')
let estadoorden = module.exports = {}

estadoorden.getAll = (req, res, next) => {
    estadoordenDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

estadoorden.findId = (req, res, next) => {
    let id = req.params.id
    estadoordenDB.find('IdEstadoOrden', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

estadoorden.add = (req, res, next) => {
    estadoordenDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

estadoorden.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    estadoordenDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'estadoorden not found'})
    })
    .catch(err => next(err))
}

estadoorden.delete = (req, res, next) => {
    let id = req.params.id
    estadoordenDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'estadoorden deleted'})
        return res.status(404).json({message: 'estadoorden not found'})
    })
    .catch(err => next(err))
}

// Routes
