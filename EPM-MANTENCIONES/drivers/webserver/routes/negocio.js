let negocioDB = require('../../../data-access/negocio')
let negocio = module.exports = {}

negocio.getAll = (req, res, next) => {
    negocioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

negocio.findId = (req, res, next) => {
    let id = req.params.id
    negocioDB.find('IdNegocio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

negocio.add = (req, res, next) => {
    negocioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

negocio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    negocioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'negocio not found'})
    })
    .catch(err => next(err))
}

negocio.delete = (req, res, next) => {
    let id = req.params.id
    negocioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'negocio deleted'})
        return res.status(404).json({message: 'negocio not found'})
    })
    .catch(err => next(err))
}

// Routes
