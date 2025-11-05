let tipousuarioDB = require('../../../data-access/tipo-usuario')
let tipousuario = module.exports = {}

tipousuario.getAll = (req, res, next) => {
    tipousuarioDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

tipousuario.findId = (req, res, next) => {
    let id = req.params.id
    tipousuarioDB.find('IdTipoUsuario', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

tipousuario.add = (req, res, next) => {
    tipousuarioDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

tipousuario.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    tipousuarioDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'tipousuario not found'})
    })
    .catch(err => next(err))
}

tipousuario.delete = (req, res, next) => {
    let id = req.params.id
    tipousuarioDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'tipousuario deleted'})
        return res.status(404).json({message: 'tipousuario not found'})
    })
    .catch(err => next(err))
}

// Routes
