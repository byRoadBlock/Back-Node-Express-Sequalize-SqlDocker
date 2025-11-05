let negocioservicioDB = require('../../../data-access/negocio-servicio')
let negocioservicio = module.exports = {}

negocioservicio.getAll = (req, res, next) => {
    negocioservicioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

negocioservicio.findId = (req, res, next) => {
    let id = req.params.id
    negocioservicioDB.find('IdNegocioServicio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

negocioservicio.add = (req, res, next) => {
    negocioservicioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

negocioservicio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    negocioservicioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'negocioservicio not found'})
    })
    .catch(err => next(err))
}

negocioservicio.delete = (req, res, next) => {
    let id = req.params.id
    negocioservicioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'negocioservicio deleted'})
        return res.status(404).json({message: 'negocioservicio not found'})
    })
    .catch(err => next(err))
}

// Routes
