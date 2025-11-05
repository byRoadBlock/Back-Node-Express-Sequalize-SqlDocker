let usuarioDB = require('../../../data-access/usuario')
let usuario = module.exports = {}

usuario.getAll = (req, res, next) => {
    usuarioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

usuario.findId = (req, res, next) => {
    let id = req.params.id
    usuarioDB.find('IdUsuario', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

usuario.add = (req, res, next) => {
    usuarioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

usuario.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    usuarioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'usuario not found'})
    })
    .catch(err => next(err))
}

usuario.delete = (req, res, next) => {
    let id = req.params.id
    usuarioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'usuario deleted'})
        return res.status(404).json({message: 'usuario not found'})
    })
    .catch(err => next(err))
}

// Routes
