---
tags: [operaciones, recordatorios, whatsapp]
---

# Protocolo de Recordatorios de Citas

> La acción de mayor ROI del plan: recuperar ~$5M/mes en no-shows con 15 minutos de trabajo diario.

## El problema

- **$9M CLP/mes** se pierden en pacientes que no convierten o no asisten
- Hoy no existe un protocolo formal de recordatorios
- La persona de agenda lo hace manualmente y sin plantillas consistentes

## Flujo completo

```
Paciente agenda
      ↓
CONFIRMACIÓN inmediata (automática)
      ↓
RECORDATORIO 48h antes
      ↓
RECORDATORIO 24h antes
      ↓
      ├─ Asiste → seguimiento post-consulta (futuro)
      └─ No asiste → POST NO-SHOW (48h después)
```

## Plantillas WhatsApp

### 1. Confirmación al agendar
```
Hola [Nombre] 👋 

Tu hora en Clínica Mediterra está confirmada:
📅 [Día], [Fecha] a las [Hora]
👨‍⚕️ [Especialista]
📍 Av. Juan Cisternas 2497, Local 007 (Edificio Boulevard San Joaquín)

¿Qué traer? [indicaciones específicas si aplica]

Cualquier duda escríbenos aquí mismo 😊
```

### 2. Recordatorio 48h antes
```
Hola [Nombre], te recordamos que tienes una hora con nosotros:

📅 Mañana [Día] a las [Hora]
👨‍⚕️ [Especialista] — Clínica Mediterra

¿Confirmas tu asistencia? Responde SÍ o NO 🙏
```

### 3. Recordatorio 24h antes
```
Hola [Nombre] 👋 Tu hora es mañana:

⏰ [Hora] con [Especialista]
📍 Av. Juan Cisternas 2497, Local 007

Si necesitas reagendar, escríbenos con anticipación.
¡Te esperamos!
```

### 4. Post no-show (48h después, tono empático)
```
Hola [Nombre], te escribimos del equipo de Clínica Mediterra.

Notamos que no pudiste asistir a tu hora del [Fecha]. 
Entendemos que a veces surgen imprevistos 🙏

¿Te gustaría reagendar? Estamos para ayudarte.
```

## Etiquetas WhatsApp Business

| Etiqueta | Color | Uso |
|----------|-------|-----|
| Nuevo paciente | Verde | Primera vez que contacta |
| Confirmó | Azul | Respondió SÍ al recordatorio |
| No confirmó | Amarillo | Sin respuesta al recordatorio |
| Cancelado | Rojo | Canceló o no asistió |
| Reagendar | Naranja | Post no-show en seguimiento |

## Responsable y tiempo

- **Responsable:** Persona de agenda
- **Setup inicial:** 2 horas (Semana 2)
- **Operación diaria:** 15 minutos/día

## Automatización con IA

Este proceso puede automatizarse completamente con el [[../ia/agente-recordatorios|Agente de Recordatorios]].  
Requiere: WhatsApp Business API (Twilio o 360dialog, ~$20 USD/mes).
