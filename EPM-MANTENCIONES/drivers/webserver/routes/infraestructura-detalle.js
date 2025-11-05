let infraestructuradetalleDB = require('../../../data-access/infraestructura-detalle')
let infraestructuradetalle = module.exports = {}

infraestructuradetalle.getAll = (req, res, next) => {
    infraestructuradetalleDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

infraestructuradetalle.findId = (req, res, next) => {
    let id = req.params.id
    infraestructuradetalleDB.find('IdInfraestructuraDetalle', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

infraestructuradetalle.add = (req, res, next) => {
    infraestructuradetalleDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

infraestructuradetalle.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    infraestructuradetalleDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'infraestructuradetalle not found'})
    })
    .catch(err => next(err))
}

infraestructuradetalle.delete = (req, res, next) => {
    let id = req.params.id
    infraestructuradetalleDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'infraestructuradetalle deleted'})
        return res.status(404).json({message: 'infraestructuradetalle not found'})
    })
    .catch(err => next(err))
}

// Routes
