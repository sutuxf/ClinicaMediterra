# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Clínica Mediterra** es un centro de salud pélvica en La Serena, Chile. Este repositorio contiene la base de conocimiento estratégica, el plan de marketing digital, la wiki operacional y los artefactos de diseño del proyecto. Toda la comunicación y los documentos están en **español**.

**Propuesta de valor:** "Atención en Salud de primer nivel, sin que tengas que salir de tu Región, con un toque humano y profesionales excepcionales."

**Estado actual:** Fase de ejecución — postulación Crece Multisectorial ($5M) con enfoque IA-first. El foco inmediato es implementar 5 agentes IA que resuelven gaps operacionales identificados (recordatorios, trazabilidad, FAQ, contenido, KPIs).

## Datos clave de la clínica

| Campo | Dato |
|-------|------|
| Dirección | Av. Juan Cisternas 2497, Local 007, La Serena |
| WhatsApp | +56 9 3933 7727 |
| Horario L-V | 9:00 AM – 8:00 PM |
| Horario Sáb | 9:00 AM – 1:00 PM |
| Instagram | @mediterraclinica |
| Web | www.clinicamediterra.cl (Wix 2022) |
| App web plan | https://sutuxf.github.io/ClinicaMediterra |

**Equipo:** 15 profesionales en 6 especialidades — Ginecología (4), Urología (3), Kinesioterapia Pélvica (3), Psicología-Sexología (1), Traumatología (1), Nutrición (1).

**Roles administrativos confirmados:**
- **Alex** — Gestor administrativo · Acceso a HealthAtom, Wix, credenciales Google
- **Secretaria** — Atiende, recibe pacientes Y gestiona agenda (rol combinado, sobrecargada)
- **Una kinesiólogo** — Ayuda con redes sociales Instagram (sin ser su rol formal)

**Contexto estratégico clave:**
- 68% pacientes mujeres / 32% hombres — meta: 40% hombres en 6 meses
- **$9M CLP/mes se pierden en no-conversiones** → causas confirmadas: sin recordatorios automáticos + sin medición de no-show
- ~280 atenciones/mes (~14/día) — estimación confirmada
- Expansión geográfica: Ovalle, Vicuña, Vallenar, zonas mineras (potencial 20% pacientes nuevos)
- Presupuesto marketing: $200.000 CLP/mes (40% Ads, 35% creadora contenido, 25% otros)
- Software de gestión: **Medilink** — EHR + agenda + facturación + RCE integrado, fichas electrónicas por paciente. MANTIENEN ESTE SISTEMA (no será reemplazado, será integrado con IA)

**Auditoría digital verificada (30 mayo 2026):**
| Canal | Estado | Detalles |
|-------|--------|----------|
| Instagram @mediterraclinica | ✅ Activo | 1.196 seg, último post 15 mayo, link reserva en bio, historias guardadas |
| WhatsApp Business | ✅ Instalado | 🚨 **Sin automatización**: sin mensajes ausencia/bienvenida, sin recordatorios |
| Facebook | 🚨 Muerto | Sin posts desde 2022, mensajes viejos sin responder, potencial alto para pauta |
| Google My Business | ⚠️ Existe | Solo 2 reseñas, sin fotos, sin optimizar — canal gratuito crítico |
| Software gestión | ✅ Medilink | EHR + agenda + facturación + RCE. Será integrado con agentes IA (no reemplazado) |
| Sitio web (Wix 2022) | ✅ Activo | SEO débil. **Chat widget = botonera muda** — redirige a WA sin capturar intención |
| Trazabilidad | 🚨 **Crítica** | **SIN SISTEMA** — no saben de dónde vienen pacientes. Origen: boca a boca + derivaciones internas (estimado) |
| Creadora contenido | ✅ Contratada | Precio bajo, 1-2 posts/semana (insuficiente, plan requiere 3 posts/semana) |
| Convenios | ✅ Activos | Isapres + Fonasa para 3 especialidades principales (Gine, Uro, Kine Pélvica) |

**Documentos de diagnóstico:**
- `RESPUESTAS-DIAGNOSTICO.md` — 21 preguntas respondidas (7 críticas + 14 generales) — **completar junto a Camila**
- `wiki/auditoria-digital.md` — Estado detallado por canal
- Link interactivo con respuestas: https://sutuxf.github.io/ClinicaMediterra/#d=[encoded]

## Estructura del repositorio

```
HOME.md                    # Índice maestro del vault Obsidian
CLAUDE.md                  # Este archivo
index.html                 # App web del plan de marketing (GitHub Pages)

docs/                      # Documentos estratégicos
  perfil-clinica-mediterra.md        # Datos reales: equipo, contacto, testimonios
  PANORAMA ACTUAL Y CANVAS MEDITERRA.md  # BMC + VPC + visión estratégica
  plan-de-marketing-digital.md       # Plan 6 meses, KPIs, presupuesto

wiki/                      # Base de conocimiento operacional (Obsidian)
  especialidades/          # Una nota por especialidad (6)
  equipo/                  # Profesionales clave con ángulos de contenido (4)
  marketing/               # Línea masculina, expansión, canales, KPIs
  operaciones/             # Recordatorios, FAQ WhatsApp, telemedicina, medición
  ia/                      # Specs técnicas y prompts de los 5 agentes IA
  fondos/                  # Postulaciones a Kit Digital, Crece Multisectorial, Santander
  auditoria-digital.md     # Estado verificado canal por canal (30 mayo 2026)
  preguntas-por-confirmar.md  # Preguntas abiertas para confirmar con Camila

design-artifacts/          # Artefactos WDS y artefactos de diseño
  plan-marketing-interactivo.jsx     # Componente React del plan
  A-Product-Brief/         # WDS Phase 1
  B-Trigger-Map/           # WDS Phase 2
  C-UX-Scenarios/          # WDS Phase 3
  D-UX-Design/             # WDS Phase 4
  E-Development/           # WDS Phase 5

_bmad/                     # Framework BMAD v6.8.0 (read-only, installer-managed)
_bmad-output/              # Outputs generales de BMAD
.obsidian/                 # Configuración del vault Obsidian
```

## Documento principal para los socios

`docs/diagnostico-para-socios.md` — el documento más importante del repositorio. Combina auditoría digital + investigación de mercado + hoja de ruta por horizontes (corto/mediano/largo plazo). Escrito para presentar a los socios directores de la clínica. Leer antes de cualquier reunión con los dueños.

## Documentos estratégicos (`docs/`)

- **`diagnostico-para-socios.md`** — Documento principal para presentar a los socios. Auditoría digital completa + análisis competitivo + hoja de ruta corto/mediano/largo plazo. Incluye el gap de mercado identificado: nadie en la macrozona ofrece Urología + Sexología + Kinesiología Pélvica para hombres.
- **`perfil-clinica-mediterra.md`** — Fuente de verdad sobre la clínica: 15 profesionales, horarios, contacto, testimonios reales, auditoría digital y software HealthAtom confirmado.
- **`PANORAMA ACTUAL Y CANVAS MEDITERRA.md`** — Business Model Canvas, Value Proposition Canvas y visión estratégica del fundador.
- **`plan-de-marketing-digital.md`** — Plan semana a semana de 6 meses, prioridades, KPIs y presupuesto.

## Wiki (`wiki/`) — notas clave

Base de conocimiento operacional enlazada en Obsidian. Leer antes de trabajar en cualquier área:

- `wiki/auditoria-digital.md` — Estado verificado de todos los canales (30 mayo 2026) — leer primero
- `wiki/preguntas-por-confirmar.md` — 21 preguntas abiertas para confirmar con Camila este fin de semana
- `wiki/especialidades/` — Estrategia, equipo, contenido y relaciones entre especialidades
- `wiki/equipo/` — Profesionales destacados en testimonios con ángulos de contenido
- `wiki/marketing/linea-masculina.md` — Estrategia para crecer el segmento masculino (32%→40%)
- `wiki/marketing/canales.md` — Estado real verificado y acciones por canal digital
- `wiki/marketing/kpis.md` — KPIs con nota de que los baselines son estimaciones hasta tener trazabilidad
- `wiki/operaciones/recordatorios-citas.md` — Plantillas WhatsApp listas para usar
- `wiki/operaciones/medicion-y-trazabilidad.md` — Sistema de medición de origen de pacientes (nuevo)
- `wiki/ia/` — Specs técnicas, stacks y prompts de los 5 agentes IA
- `wiki/fondos/` — Postulaciones preparadas para Kit Digital, Crece y Santander

## Agentes IA prioritarios — Depuración 2026

| Agente | Archivo | Estado | Impacto | Prioridad |
|--------|---------|--------|---------|-----------|
| **Recordatorios de citas** | `wiki/ia/agente-recordatorios.md` | 🔴 Bloqueado: requiere WA API | **Recupera $5M/mes** | **#1 CRÍTICA** |
| **Chatbot web + trazabilidad** | `wiki/ia/agente-chatbot-web.md` | 🟢 Listo hoy (remplazar botonera) | Captura intención + canal origen | **#2 URGENTE** |
| **FAQ WhatsApp** | `wiki/ia/agente-faq-whatsapp.md` | 🟢 Listo hoy (con respuestas rápidas) | Libera secretaria (~15-25 msg/día) | **#3 IMPORTANTE** |
| Generador de contenido | `wiki/ia/agente-contenido-rrss.md` | 🟡 Listo pero necesita marca guide | Reemplaza $70K/mes (creadora) | #4 MEDIANO |
| Reporte mensual KPIs | `wiki/ia/agente-reporte-kpis.md` | 🟢 Listo hoy | Automatiza reunión socios | #5 PLANIFICADO |

**Cambios respecto a plan original:**
- Recordatorios sube a #1 (era #3 bloqueado)
- Chatbot web sube a #2 (era #3, ahora urgente reemplazar botonera muda)
- FAQ baja a #3 (importante pero menos impacto que recordatorios)
- Generador de contenido baja a #4 (creadora contratada ya existe, puede optimizarse después)

**Hallazgo crítico:** El "chatbot" actual es una botonera muda que redirige a WhatsApp sin capturar intención ni datos de paciente — cero trazabilidad. Reemplazar por chatbot real con IA es URGENTE para empezar a medir origen de pacientes.

## Correr el sitio localmente

```bash
python3 -m http.server 3000 --directory /Users/sutux/Proyectos/ClnicaMediterra
# Abrir http://localhost:3000
```

## BMAD Framework

Instalado en `_bmad/` (read-only). Configuración:

- `_bmad/config.toml` — auto-generado, nunca editar
- `_bmad/custom/config.toml` — overrides de equipo (committed)
- `_bmad/custom/config.user.toml` — overrides personales (gitignored)

```bash
npx bmad-method@latest update   # Actualizar
npx bmad-method@latest install  # Reinstalar
```

## WDS Methodology — Fases y agentes

| Fase | Nombre | Agente | Carpeta output |
|------|--------|--------|----------------|
| 0 | Alignment & Signoff | Saga | — |
| 1 | Product Brief | Saga | `design-artifacts/A-Product-Brief/` |
| 2 | Trigger Mapping | Saga | `design-artifacts/B-Trigger-Map/` |
| 3 | UX Scenarios | Freya | `design-artifacts/C-UX-Scenarios/` |
| 4 | UX Design | Freya | `design-artifacts/D-UX-Design/` |
| 5 | Agentic Development | Mimir | `design-artifacts/E-Development/` |
| 6–7 | Assets + Design System | Freya | `design-artifacts/D-UX-Design/` |
| 8 | Product Evolution | Mimir | `design-artifacts/E-Development/` |

**Prerequisitos bloqueantes:**
- Freya requiere `A-Product-Brief/product-brief.md` + `B-Trigger-Map/00-trigger-map.md`
- Mimir requiere al menos un Work Order de Freya

**Handoffs:**
```
/wrap freya     # Saga → Freya
/wrap mimir     # Freya → Mimir
/handoff freya  # Mimir → Freya
/start          # Retomar sesión actual
```

## Selección de modelo

| Tarea | Modelo |
|-------|--------|
| Código, implementación, build | Opus |
| Estrategia, specs, UX, análisis | Sonnet |
| FAQ, tareas simples y cortas | Haiku |

## Módulos BMAD instalados

- **bmm** — Business Methodology (planning, stories, arquitectura)
- **wds** — Work Design System (flujo principal UX/producto)
- **tea** — Test Architecture Enterprise (Playwright, Pact, testing)
- **cis** — Creative Intelligence Suite (brainstorming, storytelling)
- **automator** — Story automator
- **bmb** — BMAD Builder (construcción de agentes custom)
