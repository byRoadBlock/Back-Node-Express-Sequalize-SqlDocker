USE [EPM-MANTENCIONES]
/*

DROP TABLE IF EXISTS dbo.CATEGORIA_SERVICIO
CREATE TABLE CATEGORIA_SERVICIO(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
    [IdCategoria] [int] NOT NULL,
    [Nombre] [nvarchar](200) NULL,
    [Descripcion] [nvarchar](200) NOT NULL,
    [Estado] [bit] NOT NULL,
    [CreacionFecha] [datetime] NOT NULL,
    [CreacionUsuario] [varchar](50) NOT NULL,
    [EdicionFecha] [datetime] NULL,
    [EdicionUsuario] [varchar](50) NULL,
    CONSTRAINT [PK_CATEGORIA_SERVICIO] PRIMARY KEY CLUSTERED ([IdCategoria])
)

DROP TABLE IF EXISTS dbo.TIPO_SERVICIO
CREATE TABLE TIPO_SERVICIO(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
    [IdTipo] [int] NOT NULL,
    [IdCategoria] [int] NOT NULL,
    [Nombre] [nvarchar](200) NOT NULL,
    [Descripcion] [nvarchar](200) NULL,
    [Estado] [bit] NOT NULL,
    [CreacionFecha] [datetime] NOT NULL,
    [CreacionUsuario] [varchar](50) NOT NULL,
    [EdicionFecha] [datetime] NULL,
    [EdicionUsuario] [varchar](50) NULL,
    CONSTRAINT [PK_TIPO_SERVICIO] PRIMARY KEY CLUSTERED ([IdTipo],[IdCategoria])
)

DROP TABLE IF EXISTS dbo.NEGOCIO_SERVICIO
CREATE TABLE NEGOCIO_SERVICIO(
	[IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
    [IdNegocio] [int] NOT NULL,
	[IdServicio] [int] NOT NULL,
    [IdTipoServicio] [int] NOT NULL,
	[Nombre] [nvarchar](200) NOT NULL,
    [Descripcion] [nvarchar](200) NULL,
	[Estado] [bit] NOT NULL,
	[CreacionFecha] [datetime] NOT NULL,
	[CreacionUsuario] [varchar](50) NOT NULL,
	[EdicionFecha] [datetime] NULL,
	[EdicionUsuario] [varchar](50) NULL,
	CONSTRAINT [PK_NEGOCIO_SERVICIO] PRIMARY KEY CLUSTERED ([IdNegocio], [IdServicio], [Estado])
)

DROP TABLE IF EXISTS dbo.NEGOCIO_DETALLE;
CREATE TABLE NEGOCIO_DETALLE(
	[IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
	[IdDetalle] [int] NOT NULL,
	[IdNegocio] [int] NOT NULL,
	[Nombre] [nvarchar](200) NOT NULL,
    [Descripcion] [nvarchar](200) NULL,
	[Estado] [bit] NOT NULL,
	[CreacionFecha] [datetime] NOT NULL,
	[CreacionUsuario] [varchar](50) NOT NULL,
	[EdicionFecha] [datetime] NULL,
	[EdicionUsuario] [varchar](50) NULL,
	CONSTRAINT [PK_NEGOCIO_DETALLE] PRIMARY KEY CLUSTERED ([IdDetalle], [IdNegocio])
)

DROP TABLE IF EXISTS dbo.TIPO_ORDEN;
CREATE TABLE TIPO_ORDEN(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
    [IdTipo] [int] NOT NULL,
    [Nombre] [nvarchar](200) NOT NULL,
    [Descripcion] [nvarchar](200) NULL,
    [Estado] [bit] NOT NULL,
    [CreacionFecha] [datetime] NOT NULL,
    [CreacionUsuario] [varchar](50) NOT NULL,
    [EdicionFecha] [datetime] NULL,
    [EdicionUsuario] [varchar](50) NULL,
    CONSTRAINT [PK_TIPO_ORDEN] PRIMARY KEY CLUSTERED ([IdTipo])
)

DROP TABLE IF EXISTS dbo.ORDEN;
CREATE TABLE ORDEN(
	[IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
	[IdOrden] [int] NOT NULL,
    [IdTipo] [int] NOT NULL,
	[Nombre] [nvarchar](200) NOT NULL,
	[Estado] [bit] NOT NULL,
	[CreacionFecha] [datetime] NOT NULL,
	[CreacionUsuario] [varchar](50) NOT NULL,
	[EdicionFecha] [datetime] NULL,
	[EdicionUsuario] [varchar](50) NULL,
	CONSTRAINT [PK_ORDEN] PRIMARY KEY CLUSTERED ([IdOrden])
)

DROP TABLE IF EXISTS dbo.NEGOCIO_ORDEN;
CREATE TABLE NEGOCIO_ORDEN(
	[IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
	[IdNegocio] [int] NOT NULL,
    [IdServicio] [int] NOT NULL,
	[IdOrden] [int] NOT NULL,
	[Estado] [bit] NOT NULL,
	[CreacionFecha] [datetime] NOT NULL,
	[CreacionUsuario] [varchar](50) NOT NULL,
	[EdicionFecha] [datetime] NULL,
	[EdicionUsuario] [varchar](50) NULL,
	CONSTRAINT [PK_NEGOCIO_ORDEN] PRIMARY KEY CLUSTERED ( [IdNegocio], [IdServicio], [IdOrden])
)

*/

DROP TABLE IF EXISTS dbo.ESTADO_CLIENTE
CREATE TABLE ESTADO_CLIENTE(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
    [IdEstado] [int] NOT NULL,
    [Nombre] [nvarchar](200) NOT NULL,
    [Descripcion] [nvarchar](200) NULL,
    [Estado] [bit] NOT NULL,
    [CreacionFecha] [datetime] NOT NULL,
    [CreacionUsuario] [varchar](50) NOT NULL,
    [EdicionFecha] [datetime] NULL,
    [EdicionUsuario] [varchar](50) NULL,
    CONSTRAINT [PK_ESTADO_CLIENTE] PRIMARY KEY CLUSTERED ([IdEstado])
)

/*
DROP TABLE IF EXISTS dbo.ORDEN_DETALLE;
CREATE TABLE ORDEN_DETALLE(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL,
    [IdOrden] [int] NOT NULL,
    [IdDetalle] [int] NOT NULL,
	[Nombre] [nvarchar](200) NOT NULL,
    [Descripcion] [nvarchar](200) NULL,
    [IdEstado] [bit] NOT NULL,
	[CreacionFecha] [datetime] NOT NULL,
	[CreacionUsuario] [varchar](50) NOT NULL,
	[EdicionFecha] [datetime] NULL,
	[EdicionUsuario] [varchar](50) NULL,
    CONSTRAINT [PK_ORDEN_DETALLE] PRIMARY KEY CLUSTERED ([IdDetalle], [IdOrden])
)


DROP TABLE IF EXISTS dbo.ESTADO_ORDEN
CREATE TABLE ESTADO_ORDEN(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL, 
    [IdEstado] [int] NOT NULL,
    [Nombre] [nvarchar](200) NOT NULL,
    [Descripcion] [nvarchar](200) NULL,
    [Estado] [bit] NOT NULL,
    [CreacionFecha] [datetime] NOT NULL,
    [CreacionUsuario] [varchar](50) NOT NULL,
    [EdicionFecha] [datetime] NULL,
    [EdicionUsuario] [varchar](50) NULL,
    CONSTRAINT [PK_ESTADO_ORDEN] PRIMARY KEY CLUSTERED ([IdEstado])
)




CREATE TABLE ORDEN_REGISTRO(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL,

    [Estado] [bit] NOT NULL,
	[CreacionFecha] [datetime] NOT NULL,
	[CreacionUsuario] [varchar](50) NOT NULL,
	[EdicionFecha] [datetime] NULL,
	[EdicionUsuario] [varchar](50) NULL
)

CREATE TABLE ORDEN_AGENDA(
    [IdRegistro] [int] IDENTITY(1,1) NOT NULL,

    [Estado] [bit] NOT NULL,
	[CreacionFecha] [datetime] NOT NULL,
	[CreacionUsuario] [varchar](50) NOT NULL,
	[EdicionFecha] [datetime] NULL,
	[EdicionUsuario] [varchar](50) NULL
)
*/