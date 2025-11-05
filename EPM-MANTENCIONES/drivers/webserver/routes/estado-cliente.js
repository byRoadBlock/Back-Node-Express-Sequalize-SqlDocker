let estadoclienteDB = require('../../../data-access/estado-cliente')
let estadocliente = module.exports = {}

estadocliente.getAll = (req, res, next) => {
    estadoclienteDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

estadocliente.findId = (req, res, next) => {
    let id = req.params.id
    estadoclienteDB.find('IdEstadoCliente', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

estadocliente.add = (req, res, next) => {
    estadoclienteDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

estadocliente.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    estadoclienteDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'estadocliente not found'})
    })
    .catch(err => next(err))
}

estadocliente.delete = (req, res, next) => {
    let id = req.params.id
    estadoclienteDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'estadocliente deleted'})
        return res.status(404).json({message: 'estadocliente not found'})
    })
    .catch(err => next(err))
}

// Routes
