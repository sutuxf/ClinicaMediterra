# Problemas Identificados en Reseñas Google

**Análisis de:** 27 reseñas Google Maps  
**Fecha:** 31 mayo 2026  
**Total problemas:** 3 (pero impacto crítico)

---

## 🔴 PROBLEMA #1: ATRASOS EN CITAS (MEDIA severidad)

### Evidencia
> "Buena atención. Pero las citas son casi una hora después de lo pactado. Podrían mejorar eso."

### Detalles
- **Impacto:** ~60 minutos (casi una hora)
- **Frecuencia:** 1 menciona explícitamente, pero "casi una hora" sugiere patrón
- **Efecto en paciente:** Tiempo perdido, expectativa no cumplida
- **Afecta NPS:** Positivo con "pero" = promotor dudoso

### Raíces posibles
- [ ] Doctores llegando tarde
- [ ] Precedentes corriendo atrás
- [ ] Emergencias no previstas
- [ ] Falta de buffer entre citas
- [ ] Pacientes anteriores llegando tarde

### Recomendaciones
1. Auditar 10 últimas jornadas: ¿cuánto atraso promedio?
2. Si >15 min: implementar buffer de 15-20 min entre citas
3. Comunicar a secretaria: llamar 30 min antes para confirmar
4. Mantener expectativa: "Atención entre X-X minutos"

### Priority
**🟡 MEDIA** — Afecta experiencia pero no es bloqueador total

---

## 🔴 PROBLEMA #2: CAMBIOS DE HORA SIN AVISO CLARO (ALTA severidad)

### Evidencia
> "Agende a las 12:30, llegué a la hora y la secretaria me avisa que el Dr me cambió la hora a las 11:30 y que me avisaron por Mail. Pésimo servicio, no lo recomiendo."

### Análisis Detallado

| Aspecto | Observación |
|---------|------------|
| **Qué pasó** | Dr. cambió horario unilateralmente |
| **Cómo se comunicó** | Email (insuficiente) |
| **Paciente enterado** | Al llegar a la cita (TARDE) |
| **Impacto** | Pérdida de tiempo, viaje para nada |
| **Emoción del paciente** | Frustración, "pésimo servicio" |
| **Recomendación** | "No lo recomiendo" → NPS negativo |

### Root cause
1. Sistema de comunicación deficiente
2. Email solo (no SMS, no llamada)
3. Sin confirmación de recepción
4. Sin protocolo de respaldo

### Recomendaciones URGENTES
1. **Política de cambios de hora:**
   - SMS principal
   - Email secundario
   - Llamada si no responde SMS en 24h
   
2. **Confirmación:**
   - Paciente responde "OK" a SMS
   - Secretaria registra confirmación
   - Si no responde, llamada directa

3. **Casos excepcionales:**
   - Emergencia del doctor = llamada inmediata
   - Ofrecer alternativas (otro doctor, próximo día)
   - Compensación: próxima consulta descuento 10%

### Priority
**🔴 ALTA** — Genera NPS negativo, impacta recomendación

---

## 🔴 PROBLEMA #3: CANALES DE COMUNICACIÓN ROTOS (CRÍTICA severidad)

### Evidencia
> "Muy comprometidos con la salud. Parece que nada. Hay 0 comunicación. Cómo agendar horas? Nada funciona, teléfono, agendamiento on line, Facebook..... nada."

### Análisis Crítico

| Canal | Estado según paciente |
|-------|----------------------|
| **Teléfono** | ❌ No funciona |
| **Agendamiento online** | ❌ No funciona |
| **Facebook** | ❌ No responden |
| **Email** | ❌ (implícito) |
| **WhatsApp** | ❌ (implícito) |

### Impacto Crítico
- **Bloqueador total:** Paciente NO PUEDE AGENDAR
- **Pérdida de business:** Patient nunca se convierte
- **Reputación:** "Nada funciona" es worst case
- **NPS:** Score 1 (detractor extremo)

### Root Causes (a auditar urgente)
1. **Teléfono:**
   - ¿Está activo? ¿Quién responde?
   - ¿Hay buzón de voz?
   - ¿Horario de atención? (9 AM - 8 PM L-V)

2. **Agendamiento online:**
   - ¿Está configurado en Medilink?
   - ¿Funciona desde web Wix?
   - ¿Qué errores ve el paciente?

3. **Facebook:**
   - ¿Página activa? ¿Responden mensajes?
   - ¿Hay protocolo de respuesta?

4. **WhatsApp:**
   - ¿Business API está activa?
   - ¿Hay bot respuesta?
   - ¿O solo whatsapp manual?

### Recomendaciones URGENTES (esta semana)

**Paso 1: Auditoría (1-2 horas)**
```
[ ] Llamar al teléfono desde número externo
    ¿Qué pasa? ¿Buzón? ¿Tiempo espera?
    
[ ] Probar agendamiento online desde sitio web
    ¿Qué errores aparecen?
    
[ ] Enviar mensaje por Facebook
    ¿Cuánto demoran en responder?
    
[ ] Enviar mensaje por WhatsApp
    ¿Respuesta automática? ¿Manual?
```

**Paso 2: Plan de acción según hallazgos**
```
Si teléfono no funciona:
  → Reparar inmediatamente
  → Entrenar secretaria protoco
  → Backup: WhatsApp Business

Si agendamiento online no funciona:
  → Debuggear Medilink
  → O reemplazar con Google Calendar (temporalmente)
  → Comunicar en sitio: "Agendar por WhatsApp"

Si Facebook no responde:
  → Asignar persona responsable
  → Protocolo: responder en 24h máximo
  → Vincular a WhatsApp

Si WhatsApp no activa:
  → Activar WhatsApp Business API
  → Configurar bot para preguntas frecuentes
```

### Priority
**🔴🔴🔴 CRÍTICA** — Bloqueador total para new business

---

## 📊 SEVERIDAD MATRIZ

```
PROBLEMA                    IMPACTO    FRECUENCIA    SCORE    ACCIÓN
═══════════════════════════════════════════════════════════════════════
#1: Atrasos en citas        MEDIA      1/27 (4%)     MEDIA    Monitorear
#2: Cambios sin aviso       ALTA       1/27 (4%)     ALTA     Corregir
#3: Canales rotos           CRÍTICA    1/27 (4%)     CRÍTICA  URGENTE
```

**Nota:** Solo 3 reseñas negativas (11% total), pero impacto concentrado en **adquisición** de pacientes nuevos.

---

## 🎯 ACCIÓN RECOMENDADA PARA CAMILA/ALEX

### ESTA SEMANA (31 mayo - 6 junio)

**Lunes 2 junio:**
- [ ] Alex: Auditar los 3 problemas (1-2 horas)
- [ ] Llamar al teléfono desde número externo
- [ ] Probar agendamiento online
- [ ] Revisar Facebook mensajes sin responder
- [ ] Documentar hallazgos

**Martes 3 junio:**
- [ ] Reunión Alex + Camila
- [ ] Presentar hallazgos
- [ ] Priorizar fix canales rotos (#3)
- [ ] Asignar responsables

**Miércoles 4 - Viernes 6 junio:**
- [ ] Implementar fixes críticos
- [ ] Testear desde número externo
- [ ] Verificar que funciona todo

### PRÓXIMAS 2 SEMANAS (7-20 junio)

- [ ] Implementar protocolo cambios de hora (SMS + Email + Llamada)
- [ ] Auditar atrasos (10 jornadas)
- [ ] Si >15 min atraso: implementar buffer de 15 min
- [ ] Entrenar secretaria en nuevos protocolos
- [ ] Responder a reseña negativa #3 (Google Maps)

---

## 💬 RESPUESTA RECOMENDADA A RESEÑA CRÍTICA

En Google Maps, responder a reseña #27 (canales rotos):

```
"Lamentamos mucho que haya tenido dificultades para agendar. 
Sabemos que esto afecta tu experiencia y es nuestra prioridad 
arreglarlo ESTA SEMANA.

Estamos revisando todos nuestros canales:
• Teléfono: +56 9 3933 7727 (confirmando disponibilidad)
• Web agendamiento: www.clinicamediterra.cl
• WhatsApp: Disponible para consultas
• Facebook: Respuesta en 24h máximo

Si quieres agendar HOY, te pido que llames directamente 
al +56 9 3933 7727 o mandes WhatsApp.

Haremos que tu próxima experiencia sea excelente.

— Equipo Clínica Mediterra"
```

---

**Problemas identificados:** 31 mayo 2026  
**Confianza:** 🟢 ALTA (2 incidentes específicos, 1 sistémico)  
**Urgencia:** 🔴 CRÍTICA para #3 (canales rotos)  
**Próximo:** Auditar esta semana + implementar fixes

