# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ClnicaMediterra** is a digital product project (clínica médica) managed with the **BMAD v6.8.0** framework and the **WDS (Work Design System) v6** methodology. It is currently in the discovery/design phase — no application code exists yet. All communication and document output is in **Spanish**.

## BMAD Framework

BMAD is an AI-assisted product development methodology. The framework lives in `_bmad/` (installer-managed, read-only). Configuration is split:

- `_bmad/config.toml` — auto-generated, never edit directly
- `_bmad/custom/config.toml` — team overrides, committed to repo
- `_bmad/custom/config.user.toml` — personal overrides, gitignored

To update or reinstall the framework:
```bash
npx bmad-method@latest update
npx bmad-method@latest install
```

## WDS Methodology — Phases & Agents

The project follows an 8-phase process with three specialized agents:

| Phase | Name | Agent | Output folder |
|-------|------|-------|--------------|
| 0 | Alignment & Signoff | Saga | — |
| 1 | Product Brief | Saga | `design-artifacts/A-Product-Brief/` |
| 2 | Trigger Mapping | Saga | `design-artifacts/B-Trigger-Map/` |
| 3 | UX Scenarios | Freya | `design-artifacts/C-UX-Scenarios/` |
| 4 | UX Design | Freya | `design-artifacts/D-UX-Design/` |
| 5 | Agentic Development | Mimir | `design-artifacts/E-Development/` |
| 6 | Asset Generation | Freya | `design-artifacts/D-UX-Design/` |
| 7 | Design System | Freya | `design-artifacts/D-UX-Design/` |
| 8 | Product Evolution | Mimir | `design-artifacts/E-Development/` |

**Agent boundaries are strict** — each agent owns only its phases. If asked to do out-of-scope work, name the right agent and hand off.

### Agent Prerequisites (blocking)

- **Freya** cannot start without `A-Product-Brief/product-brief.md` + `B-Trigger-Map/00-trigger-map.md`
- **Mimir** cannot start without at least one Work Order from Freya; cannot PRD on an existing codebase without `E-Development/000-tech-audit.md`

### Handoff Commands

```
/wrap freya        # Saga → Freya
/wrap mimir        # Freya → Mimir (or /handoff mimir)
/handoff freya     # Mimir → Freya
/start             # Resume current agent session
```

## Project Knowledge (`docs/`)

Strategic documents that inform all WDS agents. Currently:

- **`docs/PANORAMA ACTUAL Y CANVAS MEDITERRA.md`** — Situación actual, visión estratégica, Business Model Canvas y Value Proposition Canvas. Define el punto de partida: 68% pacientes mujeres, base local (La Serena/Coquimbo), y la dirección estratégica hacia centro de referencia pélvico regional con segmento masculino activo.
- **`docs/plan-de-marketing-digital.md`** — Plan de marketing digital a 6 meses ($200.000 CLP/mes). Incluye cronograma semana a semana, prioridades por impacto, KPIs con metas a M3 y M6, checklist de arranque y herramientas. Contexto clave: recuperar $18M en pacientes no convertidos, desarrollar línea masculina (32% → 40%), expansión geográfica a Ovalle/Vicuña/Vallenar.

## Directory Structure

```
design-artifacts/          # WDS phase outputs (A–E subdirs)
docs/                      # Project knowledge inputs (read by WDS agents)
_bmad-output/              # BMAD general outputs
  planning-artifacts/
  implementation-artifacts/
  test-artifacts/
_bmad/                     # Framework internals (read-only)
.agents/skills/            # Installed Claude Code skills
```

## Key Artifacts (WDS)

- **Product Brief** — `design-artifacts/A-Product-Brief/product-brief.md`
- **Trigger Map** — `design-artifacts/B-Trigger-Map/00-trigger-map.md`
- **Page Specs** — `design-artifacts/D-UX-Design/[page-name].md`
- **Tech Audit** — `design-artifacts/E-Development/000-tech-audit.md`
- **Feature PRDs** — `design-artifacts/E-Development/NNN-[feature].xml`
- **Work Orders** — `design-artifacts/E-Development/WO-NNN-[slug].md`
- **Design Log** — `_progress/00-design-log.md` (machine-local, not committed)

## Model Selection

| Task | Model |
|------|-------|
| Code, build, implementation | Opus |
| Strategy, specs, UX, analysis | Sonnet |
| Simple, short tasks | Haiku |

## Installed BMAD Modules

- **bmm** — Business Methodology (planning, stories, architecture)
- **wds** — Work Design System (main UX/product design flow)
- **tea** — Test Architecture Enterprise (Playwright, Pact, risk-based testing)
- **cis** — Creative Intelligence Suite (brainstorming, storytelling, innovation)
- **automator** — Story automator
- **bmb** — BMAD Builder (custom agent building)
