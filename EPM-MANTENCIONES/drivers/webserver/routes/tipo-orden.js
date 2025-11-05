let tipoordenDB = require('../../../data-access/tipo-orden')
let tipoorden = module.exports = {}

tipoorden.getAll = (req, res, next) => {
    tipoordenDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipoorden.findId = (req, res, next) => {
    let id = req.params.id
    tipoordenDB.find('IdTipoOrden', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipoorden.add = (req, res, next) => {
    tipoordenDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipoorden.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipoordenDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipoorden not found'})
    })
    .catch(err => next(err))
}

tipoorden.delete = (req, res, next) => {
    let id = req.params.id
    tipoordenDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipoorden deleted'})
        return res.status(404).json({message: 'tipoorden not found'})
    })
    .catch(err => next(err))
}

// Routes
