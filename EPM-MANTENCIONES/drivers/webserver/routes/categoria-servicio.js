let categoriaservicioDB = require('../../../data-access/categoria-servicio')
let categoriaservicio = module.exports = {}

categoriaservicio.getAll = (req, res, next) => {
    categoriaservicioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

categoriaservicio.findId = (req, res, next) => {
    let id = req.params.id
    categoriaservicioDB.find('IdCategoriaServicio', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

categoriaservicio.add = (req, res, next) => {
    categoriaservicioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

categoriaservicio.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    categoriaservicioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'categoriaservicio not found'})
    })
    .catch(err => next(err))
}

categoriaservicio.delete = (req, res, next) => {
    let id = req.params.id
    categoriaservicioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'categoriaservicio deleted'})
        return res.status(404).json({message: 'categoriaservicio not found'})
    })
    .catch(err => next(err))
}

// Routes
