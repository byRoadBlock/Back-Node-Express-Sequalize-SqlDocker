CREATE TABLE orden_trabajo ()
    OtId [int] IDENTITY1,1 NOT NULL,                -- Número de OT / identificador único
    OtCodigo [VARCHAR]50 UNIQUE NOT NULL,         -- Código legible de la OT
    FechaEmision [datetime] NOT NULL,
    IdUsuarioSolicita [int],
    IdUsuarioContacto [int],
    Ubicacion [VARCHAR]200,
    activo_codigo [VARCHAR]100,
    activo_nombre [VARCHAR]200,
    activo_modelo [VARCHAR]150,
    tipo_ot [VARCHAR]50 NOT NULL,                  -- e.g. correctiva, preventiva
    prioridad SMALLINT NOT NULL DEFAULT 3,         -- 1=alta,2=media,3=baja ajustar según política
    descripcion TEXT NOT NULL,
    causa_observaciones TEXT,
    acciones_requeridas TEXT,
    materiales TEXT,                               -- JSON o texto con lista de repuestos
    herramientas_epp TEXT,
    asignado_a [VARCHAR]150,                       -- técnico o contratista
    fecha_inicio_estimada TIMESTAMP WITH TIME ZONE,
    fecha_fin_estimada TIMESTAMP WITH TIME ZONE,
    estado [VARCHAR]30 NOT NULL DEFAULT 'abierta', -- abierta, en_curso, en_espera, cerrada
    horas_estimadas NUMERIC8,2,
    costo_estimado NUMERIC12,2,
    permisos_seguridad BOOLEAN DEFAULT false,      -- si requiere LOTO/permiso
    firmas_solicitante JSONB,                      -- {nombre, fecha, comentarios}
    firmas_responsable JSONB,
    comentarios_cierre TEXT,
    fecha_cierre [datetime] NOT NULL,
    [CreacionFecha] [datetime] NOT NULL,
    [CreacionUsuario] [VARCHAR]50 NOT NULL,
    [EdicionFecha] [datetime] NULL,
    [EdicionUsuario] [VARCHAR]50 NULL
)

-- -- Índices recomendados
-- CREATE INDEX idx_orden_trabajo_ot_codigo ON orden_trabajoot_codigo;
-- CREATE INDEX idx_orden_trabajo_activo_codigo ON orden_trabajoactivo_codigo;
-- CREATE INDEX idx_orden_trabajo_asignado ON orden_trabajoasignado_a;
-- CREATE INDEX idx_orden_trabajo_estado ON orden_trabajoestado;
-- CREATE INDEX idx_orden_trabajo_fecha_emision ON orden_trabajofecha_emision;

-- -- Trigger para actualizar updated_at automáticamente
-- CREATE OR REPLACE FUNCTION trg_set_timestamp
-- RETURNS TRIGGER AS $
-- BEGIN
--   NEW.updated_at = now;
--   RETURN NEW;
-- END;
-- $ LANGUAGE plpgsql;

-- CREATE TRIGGER trg_orden_trabajo_updated_at
-- BEFORE UPDATE ON orden_trabajo
-- FOR EACH ROW EXECUTE FUNCTION trg_set_timestamp;
