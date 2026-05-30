---
tags: [ia, agente, contenido, rrss]
---

# Agente Generador de Contenido RRSS

> Genera posts, reels y copies para Instagram, Facebook y TikTok personalizados por especialidad y profesional. Reemplaza la mayor parte del trabajo de la creadora de contenido ($70.000 CLP/mes).

## Estado
🟢 **Listo para construir hoy** — Solo requiere Claude API. Cero integraciones.

## Qué genera

- Posts educativos por especialidad
- Copies para Facebook/Instagram Ads
- Guiones de reels de 60 segundos
- Textos para Google My Business (novedades)
- Calendarios editoriales mensuales

## Inputs

| Input | Ejemplo |
|-------|---------|
| Especialidad | Urología |
| Profesional | Dr. Alexander Andrusco |
| Plataforma | Instagram |
| Tema | Vasectomía: mitos y realidades |
| Tono | Directo, sin rodeos, basado en evidencia |
| Objetivo | Hombres 35–55 de La Serena y alrededores |

## Output ejemplo

```
📱 POST INSTAGRAM — Urología

"El Dr. Andrusco responde la pregunta que nadie hace en voz alta:"

¿La vasectomía afecta el placer sexual?
La respuesta corta: NO.

La vasectomía es una ligadura de los conductos que transportan
los espermatozoides. No toca hormonas, ni nervios, ni nada
relacionado con la función sexual.

Lo que sí cambia: el 3% de tu eyaculación.
Lo que no cambia: absolutamente todo lo demás.

¿Tienes dudas? El Dr. Andrusco te las responde sin vueltas.
📲 Agenda en nuestro WhatsApp: +56 9 3933 7727

#Urología #Vasectomía #SaludMasculina #LaSerena #ClinicaMediterra
```

## Tono por segmento

| Segmento | Tono |
|----------|------|
| Hombres | Directo, sin rodeos, basado en evidencia. Sin eufemismos. |
| Mujeres | Cálido, empático, acompañante. "Te hacen sentir escuchada." |
| Regional | Cercano, práctico. "Coordinamos tu visita." |

## Plantilla de prompt

```
Eres el creador de contenido de Clínica Mediterra, un centro de 
salud pélvica en La Serena, Chile.

Especialidad: {especialidad}
Profesional: {profesional}  
Plataforma: {plataforma}
Tema: {tema}
Audiencia: {audiencia}
Tono: {tono}

Genera:
1. Un post de Instagram (150-200 palabras + 5 hashtags)
2. Un copy para Facebook Ads (50-80 palabras, objetivo: mensaje a WhatsApp)
3. Un guión de reel de 60 segundos (gancho + desarrollo + CTA)

Usa datos reales de la clínica:
- WhatsApp: +56 9 3933 7727
- Instagram: @mediterraclinica
- Dirección: Av. Juan Cisternas 2497, Local 007, La Serena
```

## Ver también
- [[../equipo/dr-alexander-andrusco|Dr. Alexander Andrusco]]
- [[../equipo/andrei-andrusco|Andrei Andrusco]]
- [[../marketing/linea-masculina|Línea masculina]]
- [[../marketing/canales|Canales digitales]]
