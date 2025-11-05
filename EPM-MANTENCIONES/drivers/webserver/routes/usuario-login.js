let usuariologinDB = require('../../../data-access/usuario-login')
let usuariologin = module.exports = {}

usuariologin.getAll = (req, res, next) => {
    usuariologinDB.getAll()
    .then(data => res.json(data))
    .catch(err => next(err))
}

usuariologin.findId = (req, res, next) => {
    let id = req.params.id
    usuariologinDB.find('IdUsuarioLogin', id )
    .then(data => {
        return res.send(data)
    })
    .catch(next)
}

usuariologin.add = (req, res, next) => {
    usuariologinDB.add(req.body)
    .then(data => { res.send(data)})
    .catch(err => next(err))
}

usuariologin.update = (req, res, next) => {
    let id = req.params.id
    let obj = req.body
    usuariologinDB.update(id, obj)
    .then(data => {
        if(data) return res.json(data)
        return res.status(404).json({message: 'usuariologin not found'})
    })
    .catch(err => next(err))
}

usuariologin.delete = (req, res, next) => {
    let id = req.params.id
    usuariologinDB.delete(id)
    .then(data => {
        if(data) return res.json({message: 'usuariologin deleted'})
        return res.status(404).json({message: 'usuariologin not found'})
    })
    .catch(err => next(err))
}

// Routes
