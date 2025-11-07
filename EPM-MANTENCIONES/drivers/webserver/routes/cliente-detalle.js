let clientedetalleDB = require('../../../data-access/cliente-detalle')
let clientedetalle = module.exports = {}

clientedetalle.getAll = (req, res, next) => {
    clientedetalleDB.getAll()
        .then(data => res.json(data))
        .catch(err => next(err))
}

clientedetalle.findId = (req, res, next) => {
    let id = req.params.id
    clientedetalleDB.find('IdClienteDetalle', id)
        .then(data => {
            return res.send(data)
        })
        .catch(next)
}

clientedetalle.add = (req, res, next) => {
    
    clientedetalleDB.add(req.body)
        .then(data => { res.send(data) })
        .catch(err => {
            // console.log(error)
            next(err)
        })
}

clientedetalle.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    clientedetalleDB.update(id, obj)
        .then(data => {
            if (data) return res.json(data)
            return res.status(404).json({ message: 'clientedetalle not found' })
        })
        .catch(err => next(err))
}

clientedetalle.delete = (req, res, next) => {
    let id = req.params.id
    clientedetalleDB.delete(id)
        .then(data => {
            if (data) return res.json({ message: 'clientedetalle deleted' })
            return res.status(404).json({ message: 'clientedetalle not found' })
        })
        .catch(err => next(err))
}

// Routes
