---
tags: [ia, agente, recordatorios, whatsapp]
---

# Agente de Recordatorios de Citas

> Automatiza el flujo completo de recordatorios: confirmación → 48h → 24h → post no-show. ROI más alto del plan: recupera ~$5M/mes.

## Estado
🟠 **Requiere WhatsApp Business API** — Setup de ~3 horas. Costo ~$20 USD/mes.

## Flujo automatizado

```
Paciente agendado en el sistema
        ↓
[T=0]     Confirmación inmediata
        ↓
[T-48h]   Recordatorio + solicitud de confirmación
        ↓
   ¿Respondió?
   ├─ SÍ → Etiqueta "Confirmó", silencio hasta el día
   └─ NO  → [T-24h] Recordatorio final
               ↓
           [T+48h si no asistió] → Post no-show (empático)
```

## Plantillas (listas para usar)

Ver [[../operaciones/recordatorios-citas|Protocolo de recordatorios]] para las plantillas completas.

## Stack técnico

| Componente | Tecnología | Costo |
|-----------|-----------|-------|
| WhatsApp API | 360dialog o Twilio | ~$20 USD/mes |
| Scheduler | Cron job (Railway/Render) | Gratis |
| LLM (personalización) | Claude Haiku | ~$1/mes en volumen clínica |
| Base de datos citas | Google Sheets API o Airtable | Gratis |

## Integración con sistema de agenda

**Sistema confirmado: HealthAtom (healthatom.io)**
Usan HealthAtom como software de gestión clínica. Esto cambia las opciones de integración:

**Opción A — Google Sheets manual (arranque inmediato):**
La persona de agenda ingresa datos en una planilla → el agente la lee y dispara los mensajes. Cero dependencias técnicas.

**Opción B — Integración con HealthAtom:**
HealthAtom ofrece API REST. Si está disponible en el plan que tienen, el agente puede leer la agenda directamente y disparar recordatorios automáticamente sin intervención humana.

**Opción C — Webhook de HealthAtom:**
Si HealthAtom tiene webhooks, cada cita nueva puede disparar automáticamente el flujo de recordatorios.

**Recomendación:** empezar con Opción A esta semana. Investigar la API de HealthAtom para planificar la Opción B en el mes 2-3.

## Métricas a monitorear

- Tasa de confirmación antes del recordatorio
- Tasa de no-shows post-recordatorio (antes vs. después)
- Tasa de reagendamiento desde post no-show
- Costo por mensaje enviado

## Ver también
- [[../operaciones/recordatorios-citas|Protocolo manual de recordatorios]]
- [[agente-faq-whatsapp|Agente FAQ WhatsApp]]
