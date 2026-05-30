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

**Opción A — Google Sheets manual:**
La persona de agenda ingresa datos en una planilla → el agente la lee y dispara los mensajes.

**Opción B — Webhook del sistema de agenda:**
Si usan un software de agenda, el agente se engancha vía webhook.

**Recomendación:** empezar con Opción A (0 integraciones complejas) y migrar a B cuando escale.

## Métricas a monitorear

- Tasa de confirmación antes del recordatorio
- Tasa de no-shows post-recordatorio (antes vs. después)
- Tasa de reagendamiento desde post no-show
- Costo por mensaje enviado

## Ver también
- [[../operaciones/recordatorios-citas|Protocolo manual de recordatorios]]
- [[agente-faq-whatsapp|Agente FAQ WhatsApp]]
