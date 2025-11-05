let clienteDB = require('../../../data-access/cliente')
let cliente = module.exports = {}

cliente.getAll = (req, res, next) => {
    clienteDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

cliente.findId = (req, res, next) => {
    let id = req.params.id
    clienteDB.find('IdCliente', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

cliente.add = (req, res, next) => {
    clienteDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

cliente.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    clienteDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'cliente not found'})
    })
    .catch(err => next(err))
}

cliente.delete = (req, res, next) => {
    let id = req.params.id
    clienteDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'cliente deleted'})
        return res.status(404).json({message: 'cliente not found'})
    })
    .catch(err => next(err))
}

// Routes
