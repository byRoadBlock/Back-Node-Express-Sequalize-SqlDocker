let ordenservicioDB = require('../../../data-access/orden-servicio')
let ordenservicio = module.exports = {}

ordenservicio.getAll = (req, res, next) => {
    ordenservicioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

ordenservicio.findId = (req, res, next) => {
    let id = req.params.id
    ordenservicioDB.find('IdOrdenServicio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

ordenservicio.add = (req, res, next) => {
    ordenservicioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

ordenservicio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    ordenservicioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'ordenservicio not found'})
    })
    .catch(err => next(err))
}

ordenservicio.delete = (req, res, next) => {
    let id = req.params.id
    ordenservicioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'ordenservicio deleted'})
        return res.status(404).json({message: 'ordenservicio not found'})
    })
    .catch(err => next(err))
}

// Routes
