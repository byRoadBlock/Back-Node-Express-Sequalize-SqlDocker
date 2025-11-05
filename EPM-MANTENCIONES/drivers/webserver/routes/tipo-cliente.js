let tipoclienteDB = require('../../../data-access/tipo-cliente')
let tipocliente = module.exports = {}

tipocliente.getAll = (req, res, next) => {
    tipoclienteDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipocliente.findId = (req, res, next) => {
    let id = req.params.id
    tipoclienteDB.find('IdTipoCliente', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipocliente.add = (req, res, next) => {
    tipoclienteDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipocliente.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipoclienteDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipocliente not found'})
    })
    .catch(err => next(err))
}

tipocliente.delete = (req, res, next) => {
    let id = req.params.id
    tipoclienteDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipocliente deleted'})
        return res.status(404).json({message: 'tipocliente not found'})
    })
    .catch(err => next(err))
}

// Routes
