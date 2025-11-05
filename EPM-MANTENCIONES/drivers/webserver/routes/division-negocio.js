let divisionnegocioDB = require('../../../data-access/division-negocio')
let divisionnegocio = module.exports = {}

divisionnegocio.getAll = (req, res, next) => {
    divisionnegocioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

divisionnegocio.findId = (req, res, next) => {
    let id = req.params.id
    divisionnegocioDB.find('IdDivisionNegocio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

divisionnegocio.add = (req, res, next) => {
    divisionnegocioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

divisionnegocio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    divisionnegocioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'divisionnegocio not found'})
    })
    .catch(err => next(err))
}

divisionnegocio.delete = (req, res, next) => {
    let id = req.params.id
    divisionnegocioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'divisionnegocio deleted'})
        return res.status(404).json({message: 'divisionnegocio not found'})
    })
    .catch(err => next(err))
}

// Routes
