---
tags: [ia, agente, kpis, reporte]
---

# Agente Reporte Mensual KPIs

> Genera el informe ejecutivo del último viernes de cada mes. Input: datos del mes. Output: resumen con semáforo, comparativa vs. metas y 3 recomendaciones accionables.

## Estado
🟢 **Listo para construir hoy** — Solo Claude API + Google Sheets. Sin integraciones complejas.

## Qué genera

```markdown
# Informe Mediterra — Mayo 2026

## Semáforo del mes
🟢 Reseñas Google: 18 (meta: 15) ✅
🟡 % pacientes hombres: 33% (meta: 35%) ⚠️
🔴 Pérdida por no-conversión: $8.5M (meta: $6M) ❌

## Comparativa vs. metas
[tabla con HOY / META / ESTADO]

## 3 recomendaciones para el próximo mes
1. Reforzar protocolo de recordatorios (sigue siendo el mayor leakage)
2. Escalar pauta a hombres 45-55 (mejor CPM en los datos de este mes)
3. Lanzar campaña específica Ovalle (tráfico orgánico subió 40% desde posts regionales)
```

## Inputs requeridos (Google Sheets)

| Dato | Fuente | Quién lo ingresa |
|------|--------|-----------------|
| N° nuevos pacientes hombres | Agenda | Persona de agenda |
| N° pacientes de otras ciudades | Agenda | Persona de agenda |
| Ingresos totales del mes | Contabilidad | Socios |
| No-shows del mes | Agenda | Persona de agenda |
| Reseñas nuevas en Google | Manual | Creadora de contenido |
| Seguidores Instagram | Meta Business Suite | Creadora de contenido |
| Contactos WhatsApp nuevos | WA Business | Persona de agenda |

## Plantilla de prompt

```
Eres el analista de marketing de Clínica Mediterra.

Con los siguientes datos del mes de {mes}:
{datos_del_mes}

Y las siguientes metas:
{metas_del_plan}

Genera:
1. Semáforo del mes (🟢/🟡/🔴 por KPI)
2. Tabla comparativa HOY vs META vs ESTADO
3. Análisis de 100 palabras: qué funcionó, qué no
4. 3 recomendaciones específicas y accionables para el próximo mes
5. Una frase de cierre motivacional para compartir con el equipo

Tono: ejecutivo pero cercano. En español.
```

## Frecuencia
Último viernes de cada mes, antes de la reunión de socios.

## Ver también
- [[../marketing/kpis|KPIs y metas]]
- [[../../docs/plan-de-marketing-digital|Plan de marketing completo]]
