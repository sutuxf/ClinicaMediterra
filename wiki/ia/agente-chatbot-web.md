---
tags: [ia, agente, chatbot, web, wix]
---

# Agente Chatbot Web

> Reemplaza la botonera muda del sitio web con un chatbot real que captura la intención del paciente antes de redirigir a WhatsApp — y responde preguntas simples sin necesitar a nadie.

## Estado
🟢 **Oportunidad nueva** — El widget ya está instalado. Solo falta la inteligencia detrás.

## El problema actual

```
Paciente entra al sitio
        ↓
Hace clic en el chat
        ↓
Ve una botonera (Agendar / Consultar / Otro)
        ↓
Hace clic en un botón
        ↓
Se abre WhatsApp con un mensaje genérico
        ↓
Nadie sabe qué quería, de qué página venía, ni cuándo va a responder alguien
```

**Resultado:** El paciente llega a WhatsApp sin contexto. La persona de agenda no sabe si quiere agendar, tiene una duda clínica o es de Ovalle y necesita coordinar visita.

## Lo que debería pasar

```
Paciente entra al sitio
        ↓
Hace clic en el chat
        ↓
Bot saluda y pregunta qué necesita (captura de intención)
        ↓
    ┌─ "Quiero agendar" → pregunta especialidad → da horarios → abre WA con contexto
    ├─ "Tengo una duda" → responde FAQ básica o escala con contexto
    ├─ "Soy de otra ciudad" → info de telemedicina + coordinar visita
    └─ "Cuánto cuesta" → "Te cotizamos: ¿qué especialista necesitas?" → WA con contexto
        ↓
WhatsApp recibe: "Paciente busca cita con urólogo — viene desde /equipo — ciudad: Ovalle"
```

## Qué resuelve

| Problema actual | Con el agente |
|----------------|---------------|
| Paciente llega a WA sin contexto | WA recibe intención + especialidad + ciudad |
| Sin datos de origen desde web | Cada conversación web queda registrada |
| Nadie responde FAQ simples | El bot responde horarios, especialidades, dirección |
| Botonera genérica = baja conversión | Flujo personalizado = mayor conversión |

## Stack técnico

| Componente | Tecnología | Costo |
|-----------|-----------|-------|
| Chat widget | El que ya tiene Wix (o Tidio/Crisp gratis) | $0 |
| LLM | Claude API Haiku | ~$0.25/1M tokens |
| Webhook | Vercel / Render | Gratis |
| Integración WA | wa.me con mensaje pre-armado (sin API) | $0 |

**Ventaja clave:** La integración con WhatsApp no necesita WhatsApp Business API — usa links `wa.me` con el mensaje pre-llenado con el contexto capturado. Costo de integración: $0.

## Flujo de conversación

```
Bot: "Hola 👋 Soy el asistente de Clínica Mediterra.
      ¿Qué necesitas hoy?"
      [Agendar hora] [Tengo una duda] [Soy de otra ciudad] [Otra consulta]

→ Si "Agendar hora":
  Bot: "¿Con qué especialista quieres agendar?"
       [Ginecología] [Urología] [Kinesiología Pélvica] [Psicología] [Traumatología] [Nutrición]

  Bot: "Perfecto. Nuestro horario es L-V 9-20h y Sáb 9-13h.
        Te conecto con nuestro equipo ahora 👇"
  → Abre WA: "Hola, quiero agendar con [Especialidad]. Vengo desde la web."

→ Si "Tengo una duda":
  Bot: "¿Sobre qué te puedo ayudar?"
       [Horarios] [Especialidades] [Cómo llegar] [Convenios] [Otra]
  → Responde con dato real o escala a WA

→ Si "Soy de otra ciudad":
  Bot: "¡Atendemos pacientes de toda la región! 🙌
        Tenemos días específicos para pacientes de Ovalle, Vicuña y Vallenar,
        y telemedicina para seguimiento.
        ¿De qué ciudad nos escribes?"
  → Captura ciudad → abre WA con contexto: "Soy de [Ciudad], quiero coordinar visita"
```

## Impacto en trazabilidad

Cada conversación del chatbot genera un dato de origen que hoy no existe:
- "Llegó desde la web, sección /equipo, buscaba urólogo"
- "Llegó desde la web, es de Ovalle, quiere coordinar"

Esto alimenta directamente el sistema de [[../operaciones/medicion-y-trazabilidad|medición y trazabilidad]] sin trabajo adicional.

## Prioridad vs. otros agentes

| Agente | Impacto | Esfuerzo | Orden |
|--------|---------|----------|-------|
| FAQ WhatsApp | Alto | Bajo | 1 |
| Generador contenido | Alto | Bajo | 2 |
| Recordatorios | Muy alto | Medio | 3 |
| **Chatbot web** | **Medio-alto** | **Bajo** | **4** |
| Reporte KPIs | Medio | Bajo | 5 |

## Ver también
- [[agente-faq-whatsapp|Agente FAQ WhatsApp]] — versión para WA, lógica similar
- [[../operaciones/medicion-y-trazabilidad|Sistema de medición]]
- [[../auditoria-digital|Auditoría digital completa]]
