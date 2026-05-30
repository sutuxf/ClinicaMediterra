---
tags: [operaciones, kpis, medicion, trazabilidad]
---

# Medición y Trazabilidad de Pacientes

> **Hallazgo (30 mayo 2026):** La clínica no sabe de dónde vienen sus pacientes. No existe sistema de atribución ni KPIs de agendamiento. Se vuela a ciegas.

---

## El problema real

Sin trazabilidad no se puede:
- Saber qué canal genera más pacientes (¿IG? ¿derivación? ¿Google?)
- Medir si la pauta de Facebook está funcionando
- Calcular el costo de adquisición de un paciente
- Justificar el presupuesto de marketing ante los socios
- Identificar dónde se pierde la gente en el embudo

---

## Lo que probablemente existe (pero no está sistematizado)

| Dato | ¿Existe? | ¿Dónde? |
|------|----------|---------|
| Lista de pacientes agendados | Sí | Agenda manual / Excel / sistema |
| Canal de origen del paciente | No | En ningún lado |
| Tasa de no-show | Estimada | No medida formalmente |
| Tasa de conversión contacto→cita | No | No medida |
| Ingresos por especialidad | Quizás | Contabilidad |
| Pacientes nuevos vs. recurrentes | No | No diferenciado |

---

## Solución inmediata — Google Sheets (costo $0)

Crear una planilla con estas columnas. La persona de agenda la completa al recibir cada contacto:

```
Fecha | Nombre | Teléfono | Canal | Especialidad | Agendó | Asistió | Observación
```

**Valores del campo Canal:**
- Instagram
- Facebook
- Google (búsqueda)
- WhatsApp directo (sin pauta)
- Derivación médica
- Recomendación (boca a boca)
- Otro

**Tiempo de setup:** 30 minutos  
**Tiempo de operación:** 2 minutos por paciente nuevo

---

## La pregunta que lo cambia todo

Agregar al inicio de cada conversación de WhatsApp:

> *"¿Cómo nos conociste?"*

Simple. Sin formulario. Sin tecnología. Solo esa pregunta en el flujo natural de atención.

Puede ir en el mensaje de bienvenida automático:
```
Hola [Nombre] 👋 Gracias por escribirnos.

Para atenderte mejor: ¿cómo llegaste a Clínica Mediterra?
(IG, Facebook, Google, por un médico, te recomendaron, etc.)
```

---

## KPIs base que hay que establecer primero

Antes de medir el éxito del plan, necesitamos el punto de partida real:

| KPI | Cómo medirlo | Responsable |
|-----|-------------|-------------|
| Contactos WhatsApp/mes | Contar mensajes nuevos en WA | Persona agenda |
| % que agenda | Contactos → citas creadas | Planilla |
| % que asiste | Citas creadas → asistencias reales | Planilla |
| Canal de origen | Pregunta "¿cómo nos conociste?" | Planilla |
| No-shows/mes | Citas sin asistencia | Planilla |
| Especialidad más solicitada | Registro por consulta | Planilla |

**Meta mes 1:** Tener 30 días de datos reales. Recién ahí podemos saber cuál es el baseline verdadero.

---

## Impacto en el plan de marketing

Los KPIs del plan de marketing (% pacientes hombres, % de otras ciudades, etc.) son **estimaciones** basadas en datos parciales del fundador. El mes 1 sirve para:

1. Instalar el sistema de medición
2. Recolectar datos reales
3. Corregir o confirmar las metas del plan

**No es un problema — es parte del proceso.** El plan de 6 meses empieza a medirse desde el momento en que existe el sistema de trazabilidad.

---

## Herramienta futura — CRM

Una vez que haya datos en la planilla, migrar a un CRM real:
- **HubSpot Free** — hasta 1M contactos, pipeline visual, gratis
- **Zoho CRM Free** — hasta 3 usuarios, gratis
- Financiable con [[../fondos/kit-digital|Kit Digital SERCOTEC]] ($400.000)

---

## Ver también
- [[recordatorios-citas|Protocolo de recordatorios]]
- [[atencion-whatsapp|FAQ WhatsApp]]
- [[../marketing/kpis|KPIs y metas del plan]]
- [[../ia/agente-reporte-kpis|Agente reporte mensual]]
