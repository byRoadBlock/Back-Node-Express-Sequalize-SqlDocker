let Joi = require('joi')

let areaSchema = require('./area-schema')
let areainfraestructuraSchema = require('./areainfraestructura-schema')
let cargoSchema = require('./cargo-schema')
let categoriaservicioSchema = require('./categoriaservicio-schema')
let clienteSchema = require('./cliente-schema')
let clientedetalleSchema = require('./clientedetalle-schema')
let divisionSchema = require('./division-schema')
let divisionareaSchema = require('./divisionarea-schema')
let divisionnegocioSchema = require('./divisionnegocio-schema')
let estadoclienteSchema = require('./estadocliente-schema')
let estadoordenSchema = require('./estadoorden-schema')
let estadotrabajosSchema = require('./estadotrabajos-schema')
let infraestructuraSchema = require('./infraestructura-schema')
let infraestructuradetalleSchema = require('./infraestructuradetalle-schema')
let infraestructuraubicacionSchema = require('./infraestructuraubicacion-schema')
let negocioSchema = require('./negocio-schema')
let negociodetalleSchema = require('./negociodetalle-schema')
let negocioordenSchema = require('./negocioorden-schema')
let negocioservicioSchema = require('./negocioservicio-schema')
let ordenSchema = require('./orden-schema')
let ordendetalleSchema = require('./ordendetalle-schema')
let ordenservicioSchema = require('./ordenservicio-schema')
let servicioSchema = require('./servicio-schema')
let serviciodetalleSchema = require('./serviciodetalle-schema')
let tipoareaSchema = require('./tipoarea-schema')
let tipocargoSchema = require('./tipocargo-schema')
let tipoclienteSchema = require('./tipocliente-schema')
let tipodivisionSchema = require('./tipodivision-schema')
let tipoequipamientoSchema = require('./tipoequipamiento-schema')
let tipoinfraestructuraSchema = require('./tipoinfraestructura-schema')
let tiponegocioSchema = require('./tiponegocio-schema')
let tipoordenSchema = require('./tipoorden-schema')
let tiposervicioSchema = require('./tiposervicio-schema')
let tipoubicacionSchema = require('./tipoubicacion-schema')
let tipousuarioSchema = require('./tipousuario-schema')
let ubicacionSchema = require('./ubicacion-schema')
let usuarioSchema = require('./usuario-schema')
let usuariologinSchema = require('./usuariologin-schema')

let JoiValidator = (payload, schema) => {
	let {error} = Joi.validate(payload, schema, {abortEarly: false})
	if (error) {
		let message = error.details.map(el => el.message).join('\n')
		return {
			error: message
		}
	}
return true
}


let validator = {
	areaValidator: (payload) => JoiValidator(payload, areaSchema),
	areainfraestructuraValidator: (payload) => JoiValidator(payload, areainfraestructuraSchema),
	cargoValidator: (payload) => JoiValidator(payload, cargoSchema),
	categoriaservicioValidator: (payload) => JoiValidator(payload, categoriaservicioSchema),
	clienteValidator: (payload) => JoiValidator(payload, clienteSchema),
	clientedetalleValidator: (payload) => JoiValidator(payload, clientedetalleSchema),
	divisionValidator: (payload) => JoiValidator(payload, divisionSchema),
	divisionareaValidator: (payload) => JoiValidator(payload, divisionareaSchema),
	divisionnegocioValidator: (payload) => JoiValidator(payload, divisionnegocioSchema),
	estadoclienteValidator: (payload) => JoiValidator(payload, estadoclienteSchema),
	estadoordenValidator: (payload) => JoiValidator(payload, estadoordenSchema),
	estadotrabajosValidator: (payload) => JoiValidator(payload, estadotrabajosSchema),
	infraestructuraValidator: (payload) => JoiValidator(payload, infraestructuraSchema),
	infraestructuradetalleValidator: (payload) => JoiValidator(payload, infraestructuradetalleSchema),
	infraestructuraubicacionValidator: (payload) => JoiValidator(payload, infraestructuraubicacionSchema),
	negocioValidator: (payload) => JoiValidator(payload, negocioSchema),
	negociodetalleValidator: (payload) => JoiValidator(payload, negociodetalleSchema),
	negocioordenValidator: (payload) => JoiValidator(payload, negocioordenSchema),
	negocioservicioValidator: (payload) => JoiValidator(payload, negocioservicioSchema),
	ordenValidator: (payload) => JoiValidator(payload, ordenSchema),
	ordendetalleValidator: (payload) => JoiValidator(payload, ordendetalleSchema),
	ordenservicioValidator: (payload) => JoiValidator(payload, ordenservicioSchema),
	servicioValidator: (payload) => JoiValidator(payload, servicioSchema),
	serviciodetalleValidator: (payload) => JoiValidator(payload, serviciodetalleSchema),
	tipoareaValidator: (payload) => JoiValidator(payload, tipoareaSchema),
	tipocargoValidator: (payload) => JoiValidator(payload, tipocargoSchema),
	tipoclienteValidator: (payload) => JoiValidator(payload, tipoclienteSchema),
	tipodivisionValidator: (payload) => JoiValidator(payload, tipodivisionSchema),
	tipoequipamientoValidator: (payload) => JoiValidator(payload, tipoequipamientoSchema),
	tipoinfraestructuraValidator: (payload) => JoiValidator(payload, tipoinfraestructuraSchema),
	tiponegocioValidator: (payload) => JoiValidator(payload, tiponegocioSchema),
	tipoordenValidator: (payload) => JoiValidator(payload, tipoordenSchema),
	tiposervicioValidator: (payload) => JoiValidator(payload, tiposervicioSchema),
	tipoubicacionValidator: (payload) => JoiValidator(payload, tipoubicacionSchema),
	tipousuarioValidator: (payload) => JoiValidator(payload, tipousuarioSchema),
	ubicacionValidator: (payload) => JoiValidator(payload, ubicacionSchema),
	usuarioValidator: (payload) => JoiValidator(payload, usuarioSchema),
	usuariologinValidator: (payload) => JoiValidator(payload, usuariologinSchema),
}

module.exports = validator
