# TRAINING: Setup Técnico para Pauta
## Para: Alex (Gestor Administrativo) | Duración: 4-6 horas

**Objetivo:** Configurar plataformas de publicidad para lanzar pauta mes 2  
**Fecha entrenamiento:** Antes del 31 mayo 2026  
**Resultado esperado:** Meta Ads Manager + Google Ads + Tracking listos  
**Soporte:** Francisco (directa) + documentación paso a paso

---

## 🎯 QUÉ HAREMOS

En 4-6 horas, vas a:

1. **Crear/acceder a Meta Ads Manager** (Facebook + Instagram)
2. **Crear cuenta Google Ads** (para búsquedas)
3. **Instalar pixel de conversión** en web
4. **Conectar Google Analytics** para medir
5. **Crear lead magnet + landing page** (o usar Canva + Google Forms)
6. **Setup de email automation** (Mailchimp básico)
7. **Definir protocolo:** Cómo responder leads

**No es difícil.** Solo necesita pasos ordenados.

---

## 📋 MÓDULO 1: META ADS MANAGER (45 min)

### Paso 1: Acceder o crear cuenta

```
1. Ir a: business.facebook.com
2. Click "Create Meta Business Account"
3. Llenar:
   - Business name: "Clínica Mediterra"
   - Email: francisco.toha@gmail.com
   - Business type: "Healthcare"
4. Confirmar email
```

**Si ya tienes cuenta:** Salta a Paso 2.

### Paso 2: Conectar página de Facebook

```
1. En Meta Business Manager → Accounts → Pages
2. Click "Add Pages"
3. Busca "Clínica Mediterra" (tu página Facebook)
4. Click "Add"
5. Confirma permisos
```

### Paso 3: Conectar Instagram

```
1. En Meta Business Manager → Accounts → Instagram Accounts
2. Click "Add Instagram Accounts"
3. Selecciona @mediterraclinica
4. Confirma
```

### Paso 4: Crear cuenta de Ads

```
1. Business Manager → Accounts → Ad Accounts
2. Click "Add"
3. Crear nueva: "Clínica Mediterra Ads"
4. Timezone: Santiago, Chile
5. Currency: CLP
6. Click "Create"
```

### Paso 5: Configurar método de pago

```
1. Ad Account → Settings → Payments
2. Click "Add Payment Method"
3. Opción: Tarjeta de crédito (recomendado)
   - Nombre: Clínica Mediterra / Alex
   - Tarjeta: [Dato sensible, no aquí]
   - Límite diario sugerido: $1.500 CLP
4. Confirmar

NOTA: El pago es automático. Meta cobra cuando gastas.
```

### Paso 6: Crear primera campaña (TEST)

```
1. Ads Manager → Click "Create"
2. Objective: "Traffic" (para testear)
3. Nombre: "TEST-Fase1-Normalización"
4. Budget: $500 CLP (test pequeño)
5. Duration: 2-3 días
6. Audience:
   - Location: La Serena + 50km
   - Age: 35-65
   - Gender: Men
   - Interests: Health, wellness
7. Click "Next" (no crearemos anuncio ahora)
```

**¿Qué ver aquí?**
- Cómo se ve la interfaz
- Dónde están los botones
- Cómo se estiman costos

---

## 📍 MÓDULO 2: GOOGLE ADS (45 min)

### Paso 1: Crear cuenta

```
1. Ir a: google.com/ads
2. Click "Start Now"
3. Gmail: francisco.toha@gmail.com
4. Business name: "Clínica Mediterra"
5. Business type: "Healthcare"
6. Click "Next"
```

**Si ya tienes Google Ads:** Salta a Paso 3.

### Paso 2: Conectar Google Analytics

```
1. Google Ads → Tools & Settings → Linked Accounts
2. Click "Google Analytics"
3. Conectar tu Google Analytics
4. Selecciona property: www.clinicamediterra.cl
5. Click "Link"
```

### Paso 3: Crear campaña Search Ads (TEST)

```
1. Click "Create Campaign"
2. Goal: "Website traffic"
3. Campaign type: "Search"
4. Nombre: "TEST-GoogleSearch-Urologia"
5. Networks: Search only
6. Locations: La Serena + 50km
7. Language: Spanish
8. Budget: $500 CLP/día
```

### Paso 4: Agregar keywords

```
En la campaña, crear ad group:

KEYWORDS (10-15 para empezar):
- "Urólogo La Serena"
- "Urología La Serena"
- "Disfunción eréctil La Serena"
- "Problemas de próstata"
- "Especialista pélvico"
- "Salud masculina La Serena"
- "Dr. Andrusco urólogo"
- "Incontinencia urinaria hombre"

Match type: "Broad match" (captura variaciones)
```

### Paso 5: Crear ad (Anuncio)

```
HEADLINE 1: "Urología sin Vergüenza - La Serena"
HEADLINE 2: "Dr. Andrusco Explica TODO"
HEADLINE 3: "Primera Consulta Gratis"

DESCRIPTION 1:
"Especialistas en salud pélvica para hombres.
Explicación completa. Equipo empático.
Agende consulta sin costo."

DESCRIPTION 2:
"Urología + Sexología + Kinesiología.
Te explicamos TODO, sin jerga médica."

Final URL: https://www.clinicamediterra.cl
Display URL: clinicamediterra.cl
```

---

## 📊 MÓDULO 3: PIXEL DE CONVERSIÓN (30 min)

### Paso 1: Obtener pixel Meta

```
1. Facebook Ads Manager → Tools → Pixels
2. Click "Create a Pixel"
3. Nombre: "Clínica Mediterra Website"
4. Click "Create"
5. Copia el código (es un script HTML)
```

### Paso 2: Instalar pixel en web

**Para Alex: Da este código a Francisco** (ingeniero que edita la web)

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU_PIXEL_ID_AQUI');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=TU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

**Qué hacer:**
1. Reemplaza "TU_PIXEL_ID_AQUI" con tu ID real
2. Pide a Francisco que lo pegue en `<head>` de www.clinicamediterra.cl
3. Verifica en Facebook Ads Manager → Pixels → "Active" status

### Paso 3: Agregar events (eventos de conversión)

```
Cuando alguien haga click en "Agendar", agregar:

fbq('track', 'Lead');
fbq('track', 'Contact');
fbq('track', 'InitiateCheckout');
```

**Deja esto para después.** Por ahora, solo PageView.

---

## 📈 MÓDULO 4: GOOGLE ANALYTICS (30 min)

### Paso 1: Acceder

```
1. google.com/analytics
2. Selecciona property: "www.clinicamediterra.cl"
3. Acéptas términos
```

### Paso 2: Ver datos básicos

```
Home → Audiences → Overview

Verás:
- Total users (cuántos visitaron esta semana)
- Sessions (cuántas veces vinieron)
- Engagement rate (% que interactuó)
- Average session duration (cuánto se quedaron)
```

### Paso 3: Crear goal (Meta de conversión)

```
1. Admin → Goals
2. Click "Create Goal"
3. Tipo: "Destination"
4. Nombre: "Contact - WhatsApp"
5. Destination: "clinicamediterra.cl/whatsapp"
   (o la URL que use para agendar)
6. Click "Create"
```

**¿Para qué?** Rastrear cuántas personas hicieron click en "Agendar".

---

## 📧 MÓDULO 5: EMAIL AUTOMATION (30 min)

### Paso 1: Crear cuenta Mailchimp

```
1. mailchimp.com → Sign Up
2. Email: francisco.toha@gmail.com
3. Password: [securo]
4. Business name: "Clínica Mediterra"
5. Confirmar email
```

### Paso 2: Crear lista

```
1. Audience → All Contacts
2. Click "Create Audience"
3. Nombre: "Leads Pauta Mes 2"
4. Default from email: francisco@clinicamediterra.cl
5. Click "Create"
```

### Paso 3: Crear automación (Secuencia de emails)

```
TRIGGER: Nuevo contacto (lead) se agrega a lista

EMAIL 1 (Inmediato):
Subject: "Tu guía completa: Salud pélvica para hombres"
Body:
"Hola [Nombre],

Acá va el PDF con la guía que prometimos.

El Dr. Andrusco explica:
- Qué es la disfunción eréctil
- Causas comunes
- Cómo se trata
- Preguntas frecuentes

Descargar: [LINK A PDF]

Cualquier pregunta, escribe aquí.
Un saludo,
Dr. Andrusco"

EMAIL 2 (3 días después):
Subject: "¿Viste la guía? Tengo una pregunta..."
Body:
"Hola [Nombre],

¿Tuviste tiempo de leer la guía?

Si tienes alguna pregunta, AQUÍ respondemos sin compromiso.

Agenda tu consulta SIN COSTO:
[LINK WHATSAPP]

Un saludo,
El equipo Mediterra"

EMAIL 3 (7 días después):
Subject: "Último: tu consulta sin costo te espera"
Body:
"Hola [Nombre],

Esta es nuestra última invitación: 

Tu primera consulta es SIN COSTO.

No hay compromiso. Solo profesionales que explican TODO.

Agenda AQUÍ:
[LINK WHATSAPP]

Un saludo,
Mediterra"
```

---

## 🤝 MÓDULO 6: PROTOCOLO WHATSAPP (Respuesta a leads)

### Paso 1: Crear template en WhatsApp Business

```
Nombre: "Bienvenida Lead Pauta"

Mensaje:
"Hola! 👋

Vimos que te interesa saber más de nuestros servicios.

¿Cuál es tu pregunta principal?
- Disfunción eréctil
- Incontinencia
- Problemas de próstata
- Otra"
```

### Paso 2: Protocolo de respuesta (Secretaria)

```
TIEMPO MÁXIMO: Responder en <2 horas

SI PREGUNTA POR DISFUNCIÓN ERÉCTIL:
"Es uno de nuestros especialidades. El Dr. Andrusco es experto.
¿Preferís consulta online o presencial?
- Online: $40.000 CLP
- Presencial: $50.000 CLP
Ambas INCLUYEN explicación completa y plan de tratamiento."

SI PREGUNTA SOBRE INCONTINENCIA:
"La Kinesioterapia Pélvica es muy efectiva.
¿Hace cuánto tiempo lo padecés?"

SI PREGUNTA SOBRE COSTO:
"Tu primera consulta de diagnóstico es SIN COSTO.
Si necesitas tratamiento, te explicamos opciones."

SI DICE "TENGO VERGÜENZA":
"Aquí NO hay vergüenza. Los hombres vienen todos los días con esto.
Es normal. Es treatable. Estamos acá para ayudarte."
```

### Paso 3: Agendar

```
Una vez que dicen "SÍ, quiero agendar":

1. Pide:
   - Nombre
   - Edad
   - Qué lo trae
   - Preferencia: Online o Presencial

2. Ofrece:
   - Próximos 3 horarios disponibles
   - Especialista recomendado

3. Confirma:
   - "Listo, tu cita es el [fecha] a las [hora] con [Doctor]"
   - "Te envío el link para llegar a la clínica"

4. REGISTRO EN GOOGLE SHEETS:
   - Nombre
   - Teléfono
   - Tipo de consulta
   - Date/Time
   - Canal origen (Google Ads / Facebook / Etc)
   - ¿Vino? SÍ/NO
```

---

## 📊 MÓDULO 7: DASHBOARD DE TRACKING (30 min)

### Crear Google Sheet para métricas

```
Archivo: "Pauta Mes 2 - Tracking"
Compartir con: Francisco + Camila

COLUMNAS:
A. Fecha
B. Campaña (Normalización / Educación / Conversión)
C. Plataforma (Facebook / Instagram / Google)
D. Impresiones
E. Clicks
F. CTR (clicks ÷ impresiones)
G. Gasto
H. Leads
I. Cost per Lead
J. Appointments booked
K. Show rate (%)
L. Nuevos pacientes
M. Notas
```

### Cómo llenarla

```
CADA VIERNES:
1. Meta Ads → Reporting → Descarga CSV
2. Google Ads → Download report
3. Copia números a Google Sheet
4. Calcula:
   - CTR = Clicks / Impresiones
   - CPL = Gasto / Leads
   - CPA = Gasto / Appointments
5. Escribe notas: "¿Qué funcionó? ¿Qué no?"
```

---

## 🎓 MÓDULO 8: TESTING & TROUBLESHOOTING (30 min)

### Paso 1: Testear pixel

```
1. Ve a www.clinicamediterra.cl
2. Abre Developer Tools (F12)
3. Console → Busca "fbq"
4. Si ves `fbq is defined`, el pixel funciona ✅

Si NO funciona:
- Check que el código está en el <head>
- Check que tu Pixel ID es correcto
- Pedir a Francisco que lo verifique
```

### Paso 2: Testear Google Analytics

```
1. Ve a www.clinicamediterra.cl
2. En Google Analytics, debería aparecer un usuario activo
3. Si no → Esperar 24-48 horas (GA tarda)
```

### Paso 3: Testear ads

```
IMPORTANTE: NO clickees tus propios anuncios
(Contaminan el data)

En cambio:
1. En Ad Manager → Preview
2. Ve el anuncio SIN clickear
3. Verifícalo en el teléfono (importante ver en mobile)
```

---

## 🚨 ERRORES COMUNES & SOLUCIONES

| Error | Solución |
|-------|----------|
| "Pixel no tracks" | Verifica que el código esté en <head>, no en <body> |
| "Ad account no tiene método de pago" | Agrega tarjeta en Settings → Payments |
| "Campaign no starts" | Check que audience size > 100 personas |
| "GA no muestra datos" | Espera 24-48 horas (normal delay) |
| "Emails no llegan" | Check spam folder. Mailchimp → Deliverability |
| "Página web lenta" | No es problema del ads. Revisar hosting. |

---

## ✅ CHECKLIST PRE-LANZAMIENTO

### Antes del 1 de junio:

- [ ] Meta Business Account creado
- [ ] Facebook page conectada
- [ ] Instagram @mediterraclinica conectada
- [ ] Ad Account creado
- [ ] Método de pago agregado
- [ ] Google Ads cuenta creada
- [ ] Keywords agregadas (10-15)
- [ ] Google Analytics linked
- [ ] Pixel instalado en web
- [ ] Pixel status = "Active"
- [ ] Mailchimp automations creadas (3 emails)
- [ ] Google Sheet tracking creado
- [ ] Secretaria capacitada en protocolo
- [ ] Test campaign corrió sin problemas

---

## 📞 SOPORTE & CONTACTOS

**Si algo no funciona:**
1. **Inmediato (< 30 min):** Llamada a Francisco
2. **Si Francisco no responde:** Revisar "Errores comunes" (arriba)
3. **Último recurso:** Video tutoriales Meta Ads / Google Ads YouTube

**Francisco te ayuda con:**
- Instalar pixel en web
- Configurar landing pages
- Conectar CRM
- Troubleshooting técnico

**Camila aprueba:**
- Copy de anuncios
- Imágenes/videos
- Presupuesto diario
- Decisiones sobre pausa/parada

---

## 🎯 RESULTADO ESPERADO

**Fin del día 31 de mayo:**

✅ Ambas plataformas (Meta + Google) activas  
✅ Pixel y Analytics rastreando  
✅ Emails listos para dispararse automáticamente  
✅ Google Sheet para tracking  
✅ Secretaria lista para responder leads  
✅ First test campaign corriendo (pequeño presupuesto)  

**Listo para:** Lanzar Fase 1 de pauta el 1 de junio.

---

**Training preparado por:** Francisco Tohá (Director Digital)  
**Para:** Alex (Gestor Administrativo)  
**Duración:** 4-6 horas  
**Fecha:** Antes del 31 mayo 2026  
**Soporte:** Francisco disponible durante el training
