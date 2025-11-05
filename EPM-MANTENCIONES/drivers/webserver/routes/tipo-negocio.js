let tiponegocioDB = require('../../../data-access/tipo-negocio')
let tiponegocio = module.exports = {}

tiponegocio.getAll = (req, res, next) => {
    tiponegocioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tiponegocio.findId = (req, res, next) => {
    let id = req.params.id
    tiponegocioDB.find('IdTipoNegocio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tiponegocio.add = (req, res, next) => {
    tiponegocioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tiponegocio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tiponegocioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tiponegocio not found'})
    })
    .catch(err => next(err))
}

tiponegocio.delete = (req, res, next) => {
    let id = req.params.id
    tiponegocioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tiponegocio deleted'})
        return res.status(404).json({message: 'tiponegocio not found'})
    })
    .catch(err => next(err))
}

// Routes
