let servicioDB = require('../../../data-access/servicio')
let servicio = module.exports = {}

servicio.getAll = (req, res, next) => {
    servicioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

servicio.findId = (req, res, next) => {
    let id = req.params.id
    servicioDB.find('IdServicio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

servicio.add = (req, res, next) => {
    servicioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

servicio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    servicioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'servicio not found'})
    })
    .catch(err => next(err))
}

servicio.delete = (req, res, next) => {
    let id = req.params.id
    servicioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'servicio deleted'})
        return res.status(404).json({message: 'servicio not found'})
    })
    .catch(err => next(err))
}

// Routes
