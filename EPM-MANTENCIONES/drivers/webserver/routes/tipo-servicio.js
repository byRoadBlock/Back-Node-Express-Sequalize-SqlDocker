let tiposervicioDB = require('../../../data-access/tipo-servicio')
let tiposervicio = module.exports = {}

tiposervicio.getAll = (req, res, next) => {
    tiposervicioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tiposervicio.findId = (req, res, next) => {
    let id = req.params.id
    tiposervicioDB.find('IdTipoServicio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tiposervicio.add = (req, res, next) => {
    tiposervicioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tiposervicio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tiposervicioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tiposervicio not found'})
    })
    .catch(err => next(err))
}

tiposervicio.delete = (req, res, next) => {
    let id = req.params.id
    tiposervicioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tiposervicio deleted'})
        return res.status(404).json({message: 'tiposervicio not found'})
    })
    .catch(err => next(err))
}

// Routes
