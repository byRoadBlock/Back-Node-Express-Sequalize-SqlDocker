let serviciodetalleDB = require('../../../data-access/servicio-detalle')
let serviciodetalle = module.exports = {}

serviciodetalle.getAll = (req, res, next) => {
    serviciodetalleDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

serviciodetalle.findId = (req, res, next) => {
    let id = req.params.id
    serviciodetalleDB.find('IdServicioDetalle', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

serviciodetalle.add = (req, res, next) => {
    serviciodetalleDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

serviciodetalle.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    serviciodetalleDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'serviciodetalle not found'})
    })
    .catch(err => next(err))
}

serviciodetalle.delete = (req, res, next) => {
    let id = req.params.id
    serviciodetalleDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'serviciodetalle deleted'})
        return res.status(404).json({message: 'serviciodetalle not found'})
    })
    .catch(err => next(err))
}

// Routes
