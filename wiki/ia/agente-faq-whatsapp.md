---
tags: [ia, agente, whatsapp, faq]
---

# Agente FAQ WhatsApp

> Responde automáticamente las preguntas más frecuentes con datos reales de Mediterra. Libera a la persona de agenda para tareas de mayor valor.

## Estado
🟡 **Listo para construir** — Cero dependencias de terceros. Solo Claude API + webhook.

## Qué hace

1. Recibe mensaje de WhatsApp
2. Detecta intención (horario / especialidad / precio / ubicación / agendar / otra ciudad)
3. Responde con la plantilla correcta y datos reales
4. Si no sabe → escala al humano con resumen del contexto

## Conocimiento base (ya disponible)

```yaml
clinica:
  nombre: "Clínica Mediterra"
  direccion: "Av. Juan Cisternas 2497, Local 007, La Serena (Edificio Boulevard San Joaquín)"
  whatsapp: "+56 9 3933 7727"
  telefono: "+56 2 33422515"
  horario:
    lunes_viernes: "9:00 AM – 8:00 PM"
    sabado: "9:00 AM – 1:00 PM"
  instagram: "@mediterraclinica"
  web: "www.clinicamediterra.cl"

especialidades:
  - Ginecología y Obstetricia
  - Urología
  - Traumatología
  - Psicología - Sexología
  - Kinesioterapia Pélvica
  - Nutrición

profesionales:
  ginecologia: [Dr. Ángel Uribe, Dr. Luis Simoneti, Dra. Carla Carvajal, Dra. Catalina Radic]
  urologia: [Dr. Alexander Andrusco, Dr. Rodrigo Valenzuela, Dr. Álvaro Vera]
  traumatologia: [Dr. Jorge Ferreira]
  psicologia_sexologia: [Andrei Andrusco]
  kinesiologia_pelvica: [Camila Tohá, Alejandra Budinich, Paola Fernández]
  nutricion: [Carolina Villegas]
```

## Stack técnico

| Componente | Tecnología | Costo |
|-----------|-----------|-------|
| LLM | Claude API (Haiku para FAQ) | ~$0.25/1M tokens |
| WhatsApp | WhatsApp Business API (360dialog o Twilio) | ~$20 USD/mes |
| Webhook | Railway / Render / Vercel | Gratis–$5/mes |
| Base de conocimiento | JSON / Markdown en repo | Gratis |

## Lógica de escalamiento

```
Mensaje recibido
    ↓
¿Intención reconocida? → Sí → Responder con plantilla
    ↓ No
¿Pregunta sobre precio? → Sí → "Te cotizamos: ¿qué especialista necesitas?"
    ↓ No
Escalar al humano: "Gracias por escribir, un ejecutivo te responde en breve."
```

## Ver también
- [[../operaciones/atencion-whatsapp|Protocolo FAQ WhatsApp]]
- [[agente-recordatorios|Agente de recordatorios]]
