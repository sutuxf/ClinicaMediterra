import { useState, useEffect } from "react";

const MONTHS = [
  {
    id: 1, name: "Mes 1", title: "CIMIENTOS", subtitle: "Resolver lo urgente",
    goal: "Detener la sangría de $18M y poner la casa en orden digital",
    color: "#DC2626",
    weeks: [
      {
        id: "w1", name: "Semana 1", focus: "Activar automatización en WhatsApp Business",
        priority: "red", owner: "Persona de agenda", time: "1 hora",
        tasks: [
          { id: "t1_1", text: "✅ Ya instalado: WhatsApp Business activo en +56 9 3933 7727" },
          { id: "t1_2", text: "✅ Ya configurado: perfil, logo, categoría Medical & Health, horario, web y RRSS" },
          { id: "t1_3", text: "🚨 URGENTE — Activar mensaje de ausencia (confirmado: no responde fuera de horario)" },
          { id: "t1_4", text: "Activar mensaje de bienvenida automático para nuevos contactos" },
          { id: "t1_5", text: "Crear respuestas rápidas: Horarios · Convenios · Cómo agendar · Dirección · Especialidades" },
          { id: "t1_6", text: "Crear etiquetas: Nuevo paciente / Confirmó / No confirmó / Cancelado / Reagendar" },
        ]
      },
      {
        id: "w2", name: "Semana 2", focus: "Medición + protocolo de recordatorios",
        priority: "red", owner: "Persona de agenda", time: "3h setup + 15 min/día",
        tasks: [
          { id: "t2_1", text: "🚨 Sin trazabilidad: la clínica no sabe de dónde vienen sus pacientes ni tiene KPIs de agendamiento" },
          { id: "t2_2", text: "Crear planilla Google Sheets: Fecha · Nombre · Canal · Especialidad · Agendó · Asistió" },
          { id: "t2_3", text: "Canales a registrar: Instagram · Facebook · Google · WhatsApp · Derivación · Recomendación" },
          { id: "t2_4", text: "Agregar '¿Cómo nos conociste?' al flujo de bienvenida en WhatsApp" },
          { id: "t2_5", text: "Crear plantilla de confirmación al agendar (fecha, hora, qué traer)" },
          { id: "t2_6", text: "Crear plantilla de recordatorio 48h antes de la consulta" },
          { id: "t2_7", text: "Crear plantilla de recordatorio 24h antes de la consulta" },
          { id: "t2_8", text: "Crear plantilla post no-show (48h después, tono empático, invitar a reagendar)" },
          { id: "t2_9", text: "Asignar responsable del registro diario y envío de recordatorios (15 min/día)" },
        ]
      },
      {
        id: "w3", name: "Semana 3", focus: "Reclamar y optimizar Google My Business",
        priority: "red", owner: "Creadora de contenido + 1 médico", time: "3-4 horas",
        tasks: [
          { id: "t3_1", text: "✅ Google My Business existe en Google Maps — solo 2 reseñas, sin fotos, sin contenido" },
          { id: "t3_2", text: "🆕 Usan HealthAtom (healthatom.io) — software de gestión clínica (EHR + agenda + facturación)" },
          { id: "t3_3", text: "Verificar con Camila quién tiene acceso a la ficha de Google Maps / Business" },
          { id: "t3_4", text: "Si no está reclamada → reclamar en business.google.com con cuenta Google de la clínica" },
          { id: "t3_5", text: "Completar categorías: Ginecólogo, Urólogo, Kinesiólogo, Traumatólogo, Nutricionista, Psicólogo" },
          { id: "t3_6", text: "Subir 20+ fotos: fachada, recepción, boxes, equipo (con autorización), equipamiento" },
          { id: "t3_7", text: "Activar mensajería directa desde la ficha" },
          { id: "t3_8", text: "Campaña de reseñas: enviar link a 10 pacientes habituales → meta 15 reseñas en el mes" },
          { id: "t3_9", text: "Publicar primera novedad: 'Conoce a nuestro equipo de urólogos'" },
        ]
      },
      {
        id: "w4", name: "Semana 4", focus: "Resucitar Facebook y ordenar Instagram",
        priority: "orange", owner: "Creadora de contenido", time: "8 horas",
        tasks: [
          { id: "t4_1", text: "🚨 Facebook abandonado desde 2022 — sin publicaciones y con mensajes sin responder de esa época" },
          { id: "t4_2", text: "Responder TODOS los mensajes sin contestar (aunque sean de 2022 — señal de que la cuenta volvió)" },
          { id: "t4_3", text: "✅ Dirección, RRSS y web ya configurados — no requieren actualización" },
          { id: "t4_4", text: "Subir foto de portada actualizada con identidad visual de Mediterra 2026" },
          { id: "t4_5", text: "Verificar botón de acción: debe ir a WhatsApp (+56 9 3933 7727)" },
          { id: "t4_6", text: "Publicar post de reapertura: 'Volvemos con todo — conoce al equipo Mediterra 2026'" },
          { id: "t4_7", text: "Publicar presentación del equipo completo (foto + especialidad de cada profesional)" },
          { id: "t4_8", text: "✅ Instagram activo: 1.196 seguidores, 64 posts, último post 15 mayo 2026" },
          { id: "t4_9", text: "Agregar link al sitio web en bio (Instagram múltiples links o Linktree)" },
          { id: "t4_10", text: "Verificar y completar los 6 destacados por especialidad" },
          { id: "t4_11", text: "Aumentar frecuencia: de ~1 post/semana a 3 posts/semana con plantilla visual unificada" },
        ]
      },
    ]
  },
  {
    id: 2, name: "Mes 2", title: "LÍNEA MASCULINA", subtitle: "Abrir el segmento dormido",
    goal: "Lanzar contenido y pauta dirigida a hombres — el mayor potencial de crecimiento",
    color: "#EA580C",
    weeks: [
      {
        id: "w5", name: "Semana 5", focus: "Crear plan de contenidos masculino",
        priority: "orange", owner: "Urólogos + psicólogo", time: "1 reunión 2h + 6h calendario",
        tasks: [
          { id: "t5_1", text: "Reunión con urólogos y psicólogo/sexólogo: definir los 10 temas más buscados por hombres" },
          { id: "t5_2", text: "Temas sugeridos: vasectomía, próstata, disfunción eréctil, cálculos renales, salud sexual masculina, kinesioterapia masculina" },
          { id: "t5_3", text: "Crear calendario editorial del mes: 8 posts masculinos + 4 reels + 2 testimonios anónimos" },
          { id: "t5_4", text: "Definir tono: directo, basado en evidencia, sin rodeos. Mensaje: 'Hablar de esto no te hace menos hombre'" },
        ]
      },
      {
        id: "w6", name: "Semana 6", focus: "Producir primer contenido masculino",
        priority: "orange", owner: "Creadora de contenido", time: "10 horas",
        tasks: [
          { id: "t6_1", text: "Sesión de fotos/videos con urólogos en la clínica (2 horas)" },
          { id: "t6_2", text: "Publicar 4 primeros posts masculinos en Instagram + Facebook simultáneamente" },
          { id: "t6_3", text: "Crear 2 reels educativos: '¿Cuándo ir al urólogo?' y 'Mitos sobre la vasectomía'" },
          { id: "t6_4", text: "Publicar en Google My Business: 'Nueva línea: salud masculina integral en Mediterra'" },
        ]
      },
      {
        id: "w7", name: "Semana 7", focus: "Lanzar primera pauta Facebook Ads",
        priority: "orange", owner: "Creadora o asesor Ads", time: "4 horas configuración",
        tasks: [
          { id: "t7_1", text: "Crear cuenta en Facebook Ads Manager (si no existe) y configurar método de pago" },
          { id: "t7_2", text: "Definir audiencia: hombres 35-65, radio 50km desde La Serena (incluye Ovalle, Vicuña, Vallenar)" },
          { id: "t7_3", text: "Crear primer set de anuncios: $40.000 CLP para A/B testing inicial" },
          { id: "t7_4", text: "Objetivo del anuncio: mensajes a WhatsApp (no clics a la web)" },
          { id: "t7_5", text: "Crear 3 creatividades distintas para testear qué mensaje funciona" },
        ]
      },
      {
        id: "w8", name: "Semana 8", focus: "Evaluar y ajustar",
        priority: "yellow", owner: "Socios + creadora de contenido", time: "Reunión 1h + 2h ajustes",
        tasks: [
          { id: "t8_1", text: "Reunión de revisión: ¿bajaron los no-shows desde que se implementaron los recordatorios?" },
          { id: "t8_2", text: "Revisar: ¿cuántos hombres nuevos contactaron por WhatsApp?" },
          { id: "t8_3", text: "Revisar: ¿cuántas reseñas nuevas en Google My Business?" },
          { id: "t8_4", text: "Ajustar anuncios según rendimiento (costo por mensaje < $2.000 CLP = bueno)" },
          { id: "t8_5", text: "Documentar 3 aprendizajes clave del primer bimestre" },
        ]
      },
    ]
  },
  {
    id: 3, name: "Mes 3", title: "EXPANSIÓN", subtitle: "Captación geográfica regional",
    goal: "Activar captación desde Ovalle, Vicuña, Vallenar y zonas mineras",
    color: "#B45309",
    weeks: [
      {
        id: "w9", name: "Semanas 9-10", focus: "Contenido regional y telemedicina",
        priority: "yellow", owner: "Creadora + apoyo médico", time: "12 horas",
        tasks: [
          { id: "t9_1", text: "Crear sección en la web: 'Atención para pacientes fuera de La Serena'" },
          { id: "t9_2", text: "Publicar posts específicos: 'Atendemos pacientes de Ovalle: días martes y viernes'" },
          { id: "t9_3", text: "Publicar: 'Telemedicina para seguimiento post-consulta desde cualquier ciudad'" },
          { id: "t9_4", text: "Publicar: 'Horarios extendidos para pacientes con turnos mineros'" },
          { id: "t9_5", text: "Crear video corto explicando cómo funciona la telemedicina en Mediterra" },
          { id: "t9_6", text: "Activar telemedicina como producto explícito en RRSS y web con precio y cómo agendar" },
        ]
      },
      {
        id: "w11", name: "Semanas 11-12", focus: "Pauta geolocalizada por ciudad",
        priority: "yellow", owner: "Creadora + asesor Ads", time: "6 horas",
        tasks: [
          { id: "t11_1", text: "Crear campaña Facebook: Ovalle $20.000 / Vicuña $15.000 / Vallenar $15.000 / Zonas mineras $10.000" },
          { id: "t11_2", text: "Mensaje específico por zona: 'Atendemos pacientes de [ciudad] en Mediterra La Serena — coordinamos tu visita'" },
          { id: "t11_3", text: "Activar Google Ads con presupuesto de $30.000 CLP" },
          { id: "t11_4", text: "Configurar keywords locales: 'Urólogo Ovalle', 'Ginecólogo Vicuña', 'Piso pélvico La Serena'" },
        ]
      },
    ]
  },
  {
    id: 4, name: "Mes 4", title: "CONVERSIÓN", subtitle: "Pulir el embudo completo",
    goal: "Identificar dónde se pierden pacientes y atacar ese punto con soluciones concretas",
    color: "#1D4ED8",
    weeks: [
      {
        id: "w13", name: "Todo el mes", focus: "Optimizar el embudo completo",
        priority: "blue", owner: "Socios + creadora de contenido", time: "Análisis 6h + mejoras 10h",
        tasks: [
          { id: "t13_1", text: "Analizar el embudo: ¿cuántos contactan? → ¿agendan? → ¿asisten?" },
          { id: "t13_2", text: "Identificar dónde se cae más gente y definir la solución específica para ese punto" },
          { id: "t13_3", text: "Crear video pre-consulta: 'Qué pasa en tu primera visita a Mediterra' (reduce ansiedad y aumenta asistencia)" },
          { id: "t13_4", text: "Diseñar Programa Salud Pélvica Femenina: consulta + ecografía + kinesiología (precio paquete)" },
          { id: "t13_5", text: "Diseñar Programa Salud Masculina Integral: urología + sexología + nutrición (precio paquete)" },
          { id: "t13_6", text: "Publicar y comunicar los programas en todas las RRSS" },
        ]
      },
    ]
  },
  {
    id: 5, name: "Mes 5", title: "ESCALAR", subtitle: "TikTok y amplificación",
    goal: "Ampliar alcance con TikTok educativo y escalar los canales que mejor funcionan",
    color: "#7C3AED",
    weeks: [
      {
        id: "w17", name: "Todo el mes", focus: "TikTok + escalar lo que funciona",
        priority: "green", owner: "Creadora de contenido", time: "15 horas en el mes",
        tasks: [
          { id: "t17_1", text: "Redistribuir el presupuesto de $200.000 hacia los canales con mejor retorno (según datos de meses anteriores)" },
          { id: "t17_2", text: "Crear cuenta TikTok de Mediterra y publicar 2 videos por semana" },
          { id: "t17_3", text: "Usar hashtags clave: #SaludPelvica #UrologiaChile #LaSerena #PisoPelvico" },
          { id: "t17_4", text: "Lanzar campaña de testimonios: pedir a 20 pacientes reseñas o videos cortos (anónimos si prefieren)" },
        ]
      },
    ]
  },
  {
    id: 6, name: "Mes 6", title: "EVALUAR", subtitle: "Cerrar el ciclo",
    goal: "Medir resultados reales vs. metas, institucionalizar procesos y definir el año 2",
    color: "#059669",
    weeks: [
      {
        id: "w21", name: "Todo el mes", focus: "Evaluación, cierre e institucionalización",
        priority: "green", owner: "Socios + creadora de contenido", time: "20 horas en el mes",
        tasks: [
          { id: "t21_1", text: "Elaborar informe completo de resultados vs. metas del plan de 6 meses" },
          { id: "t21_2", text: "Definir qué se mantiene, qué se cambia y qué se escala para el año 2" },
          { id: "t21_3", text: "Postular a fondo concursable (SERCOTEC/CORFO) si aún no se ha hecho" },
          { id: "t21_4", text: "Definir plan de marketing para el año 2 con presupuesto aumentado" },
          { id: "t21_5", text: "Documentar TODOS los procesos para que no dependan de una sola persona" },
        ]
      },
    ]
  },
];

const FOCOS = [
  { id: 1, priority: "red", badge: "#1 URGENTE", title: "Recuperar los $18M perdidos", desc: "WhatsApp Business + recordatorios automáticos. Bajo esfuerzo, altísimo impacto inmediato en la caja.", timeline: "Semana 1-2", roi: "Recuperar ~$5M/mes desde el mes 2" },
  { id: 2, priority: "red", badge: "#2 URGENTE", title: "Google My Business optimizado", desc: "Canal completamente gratuito. Aparecer primero cuando alguien busque 'ginecólogo La Serena' o 'urólogo La Serena'.", timeline: "Semana 3", roi: "Captura tráfico orgánico sin costo" },
  { id: 3, priority: "orange", badge: "#3 ALTO", title: "Línea masculina en RRSS", desc: "El segmento dormido. Urología, sexología y kinesiología masculina con pauta segmentada a hombres 35-65.", timeline: "Mes 2", roi: "Crecer de 32% a 40% pacientes hombres" },
  { id: 4, priority: "orange", badge: "#4 ALTO", title: "Expansión geográfica con pauta", desc: "Llegar con mensajes específicos a Ovalle, Vicuña, Vallenar y zonas mineras vía Facebook Ads geolocalizados.", timeline: "Mes 3", roi: "20% de pacientes desde fuera de La Serena" },
  { id: 5, priority: "yellow", badge: "#5 MEDIO", title: "Google Ads + TikTok educativo", desc: "Capturar intención de búsqueda activa y romper tabúes con videos cortos que generan confianza.", timeline: "Mes 3-5", roi: "+35% atenciones totales en 6 meses" },
];

const KPIS = [
  { name: "% pacientes hombres", base: "~32% (est.)", m3: "35%", m6: "40%", icon: "👨" },
  { name: "% pacientes de otras ciudades", base: "<10% (est.)", m3: "—", m6: "20%", icon: "📍" },
  { name: "Pérdida por no-conversión", base: "~$9M (est.)", m3: "$6M", m6: "$4M", icon: "💸" },
  { name: "Canal de origen registrado", base: "0%", m3: "100%", m6: "100%", icon: "📊" },
  { name: "Tasa conversión contacto→cita", base: "sin datos", m3: "medida", m6: "mejorada", icon: "🎯" },
  { name: "Reseñas Google 5 estrellas", base: "2 (verificado)", m3: "15", m6: "30+", icon: "⭐" },
  { name: "Seguidores Instagram", base: "1.196", m3: "+200", m6: "+500", icon: "📸" },
  { name: "Seguidores Facebook", base: "bajo", m3: "+100", m6: "+300", icon: "👥" },
  { name: "Crecimiento atenciones/mes", base: "base real mes 1", m3: "+15%", m6: "+35%", icon: "📈" },
];

const CHECKLIST = [
  { id: "c1", text: "Aprobar el plan de marketing con los socios directores" },
  { id: "c2", text: "Asignar responsable interno del proyecto de marketing" },
  { id: "c3", text: "Formalizar contrato mensual fijo con la creadora de contenido" },
  { id: "c4", text: "Confirmar presupuesto fijo de $200.000 CLP/mes" },
  { id: "c5", text: "✅ WhatsApp Business ya instalado — activar mensajes automáticos de ausencia y bienvenida" },
  { id: "c6", text: "Reclamar el acceso a Google My Business" },
  { id: "c7", text: "Agendar reunión mensual de revisión (último viernes de cada mes)" },
];

const TOOLS = [
  { name: "WhatsApp Business", cost: "Gratis", use: "Conversión + recordatorios" },
  { name: "Google My Business", cost: "Gratis", use: "Visibilidad en búsquedas locales" },
  { name: "Meta Business Suite", cost: "Gratis", use: "Gestionar Facebook + Instagram" },
  { name: "Facebook Ads Manager", cost: "Solo pauta", use: "Publicidad segmentada" },
  { name: "Google Ads", cost: "Solo pauta", use: "Captar búsquedas activas" },
  { name: "Canva Pro", cost: "~$10.000/mes", use: "Diseño de contenido" },
  { name: "Google Sheets", cost: "Gratis", use: "Seguimiento de pacientes" },
];

const PRIORITY_CONFIG = {
  red:    { color: "#DC2626", bg: "#FEF2F2", light: "#FECACA", label: "Urgente" },
  orange: { color: "#EA580C", bg: "#FFF7ED", light: "#FED7AA", label: "Alto" },
  yellow: { color: "#B45309", bg: "#FFFBEB", light: "#FDE68A", label: "Medio" },
  blue:   { color: "#1D4ED8", bg: "#EFF6FF", light: "#BFDBFE", label: "Importante" },
  green:  { color: "#059669", bg: "#ECFDF5", light: "#A7F3D0", label: "Planificado" },
};

const STORAGE_KEY = "mediterra-plan-v3";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveState(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export default function MediterraPlan() {
  const [done, setDone] = useState({});
  const [activeMonth, setActiveMonth] = useState(0);
  const [expanded, setExpanded] = useState({ w1: true });
  const [tab, setTab] = useState("focos");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const saved = loadState();
    if (saved.done) setDone(saved.done);
    if (saved.expanded) setExpanded(saved.expanded);
  }, []);

  const persistDone = (newDone, newExpanded) => {
    saveState({ done: newDone, expanded: newExpanded });
  };

  const toggleTask = (id) => {
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    persistDone(next, expanded);
  };

  const toggleWeek = (id) => {
    const next = { ...expanded, [id]: !expanded[id] };
    setExpanded(next);
    persistDone(done, next);
  };

  const monthProgress = (m) => {
    const tasks = m.weeks.flatMap(w => w.tasks);
    return tasks.length ? Math.round((tasks.filter(t => done[t.id]).length / tasks.length) * 100) : 0;
  };

  const allTasks = MONTHS.flatMap(m => m.weeks.flatMap(w => w.tasks));
  const totalDone = allTasks.filter(t => done[t.id]).length;
  const totalPct = Math.round((totalDone / allTasks.length) * 100);
  const curMonth = MONTHS[activeMonth];
  const T = PRIORITY_CONFIG;

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: "#F4F0E7", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
      <div style={{ background: "linear-gradient(135deg, #1C3A5F 0%, #0F2847 100%)", padding: "18px 20px 0", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
          <div>
            <div style={{ color: "#60A5FA", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "3px" }}>Plan de Marketing Digital · 6 meses</div>
            <div style={{ color: "white", fontSize: "20px", fontWeight: 700, fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}>Clínica Mediterra</div>
          </div>
          <div style={{ textAlign: "right", background: "rgba(255,255,255,0.08)", borderRadius: "12px", padding: "8px 14px" }}>
            <div style={{ color: "white", fontSize: "22px", fontWeight: 700, lineHeight: 1 }}>{totalPct}%</div>
            <div style={{ color: "#93C5FD", fontSize: "10px", marginTop: "2px" }}>{totalDone}/{allTasks.length} tareas</div>
          </div>
        </div>

        {/* Global progress bar */}
        <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: "6px", height: "5px", marginBottom: "14px" }}>
          <div style={{ background: "linear-gradient(90deg, #38BDF8, #818CF8)", height: "5px", borderRadius: "6px", width: `${totalPct}%`, transition: "width 0.6s ease" }} />
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "6px", paddingBottom: "1px" }}>
          {[["focos", "🎯 Focos"], ["plan", "📅 Plan"], ["kpis", "📊 Metas"], ["tools", "🛠 Arranque"]].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} style={{ background: tab === id ? "white" : "transparent", color: tab === id ? "#1C3A5F" : "rgba(255,255,255,0.6)", border: "none", borderRadius: "8px 8px 0 0", padding: "8px 14px", fontSize: "12px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ padding: "16px 14px 60px", maxWidth: "700px", margin: "0 auto" }}>

        {/* ─── FOCOS TAB ─── */}
        {tab === "focos" && (
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#1C3A5F", marginBottom: "4px" }}>Prioridades</div>
              <div style={{ fontSize: "13px", color: "#64748B" }}>Ordenadas por impacto inmediato — empieza por el #1</div>
            </div>

            {FOCOS.map((f) => {
              const p = T[f.priority];
              return (
                <div key={f.id} style={{ background: "white", borderRadius: "14px", marginBottom: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ background: p.bg, borderLeft: `5px solid ${p.color}`, padding: "14px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <div style={{ background: p.color, color: "white", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.05em" }}>{f.badge}</div>
                      <div style={{ background: "white", color: "#475569", fontSize: "11px", fontWeight: 500, padding: "3px 10px", borderRadius: "20px" }}>⏱ {f.timeline}</div>
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>{f.title}</div>
                    <div style={{ fontSize: "13px", color: "#475569", lineHeight: "1.55" }}>{f.desc}</div>
                  </div>
                  <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#059669", textTransform: "uppercase", letterSpacing: "0.06em" }}>ROI esperado</span>
                    <span style={{ fontSize: "13px", color: "#334155", fontWeight: 500 }}>{f.roi}</span>
                  </div>
                </div>
              );
            })}

            {/* Budget summary */}
            <div style={{ background: "#1C3A5F", borderRadius: "14px", padding: "16px", marginTop: "4px" }}>
              <div style={{ color: "#93C5FD", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Distribución $200.000 CLP/mes</div>
              {[
                ["Facebook/Instagram Ads", "$80.000", "40%"],
                ["Creadora de contenido (fija)", "$70.000", "35%"],
                ["Google Ads", "$30.000", "15%"],
                ["Google My Business + reseñas", "$10.000", "5%"],
                ["WhatsApp Business + CRM", "$10.000", "5%"],
              ].map(([item, amt, pct]) => (
                <div key={item} style={{ marginBottom: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "12px" }}>{item}</span>
                    <span style={{ color: "white", fontSize: "12px", fontWeight: 600 }}>{amt}</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "4px", height: "4px" }}>
                    <div style={{ background: "#38BDF8", height: "4px", borderRadius: "4px", width: pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── PLAN TAB ─── */}
        {tab === "plan" && (
          <div>
            {/* Month selector */}
            <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "14px", marginBottom: "14px", scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {MONTHS.map((m, i) => {
                const pct = monthProgress(m);
                const active = activeMonth === i;
                return (
                  <button key={m.id} onClick={() => { setActiveMonth(i); setExpanded({}); }} style={{ flexShrink: 0, background: active ? m.color : "white", color: active ? "white" : "#475569", border: `2px solid ${active ? m.color : "#E5DDD0"}`, borderRadius: "12px", padding: "10px 14px", cursor: "pointer", minWidth: "76px", transition: "all 0.2s", textAlign: "center", boxShadow: active ? `0 4px 12px ${m.color}44` : "none" }}>
                    <div style={{ fontSize: "12px", fontWeight: 700 }}>{m.name}</div>
                    <div style={{ fontSize: "11px", opacity: 0.75, marginTop: "3px" }}>{pct}% ✓</div>
                  </button>
                );
              })}
            </div>

            {/* Month header */}
            <div style={{ background: `linear-gradient(135deg, ${curMonth.color}, ${curMonth.color}CC)`, borderRadius: "14px", padding: "18px 16px", marginBottom: "14px", color: "white", boxShadow: `0 6px 20px ${curMonth.color}44` }}>
              <div style={{ fontSize: "10px", fontWeight: 700, opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{curMonth.name} · {curMonth.subtitle}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", marginBottom: "8px", lineHeight: 1.2 }}>{curMonth.title}</div>
              <div style={{ fontSize: "13px", opacity: 0.9, lineHeight: "1.5", marginBottom: "14px" }}>{curMonth.goal}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.25)", borderRadius: "4px", height: "6px" }}>
                  <div style={{ background: "white", height: "6px", borderRadius: "4px", width: `${monthProgress(curMonth)}%`, transition: "width 0.5s ease" }} />
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700 }}>{monthProgress(curMonth)}% completado</div>
              </div>
            </div>

            {/* Weeks */}
            {curMonth.weeks.map((week) => {
              const isOpen = expanded[week.id];
              const weekDone = week.tasks.filter(t => done[t.id]).length;
              const allDone = weekDone === week.tasks.length;
              const p = T[week.priority];

              return (
                <div key={week.id} style={{ background: "white", borderRadius: "14px", marginBottom: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", border: `1px solid ${isOpen ? p.light : "transparent"}` }}>
                  <button onClick={() => toggleWeek(week.id)} style={{ width: "100%", background: "none", border: "none", padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", textAlign: "left" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: allDone ? "#ECFDF5" : p.bg, border: `2px solid ${allDone ? "#059669" : p.color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px", fontWeight: 700, color: allDone ? "#059669" : p.color }}>
                      {allDone ? "✓" : `${weekDone}/${week.tasks.length}`}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px", flexWrap: "wrap" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: p.color }}>{week.name}</span>
                        <span style={{ background: p.bg, color: p.color, fontSize: "10px", padding: "1px 7px", borderRadius: "20px", fontWeight: 600 }}>{p.label}</span>
                      </div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#1E293B", lineHeight: 1.3 }}>{week.focus}</div>
                      <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "3px" }}>⏱ {week.time} · 👤 {week.owner}</div>
                    </div>
                    <div style={{ color: "#CBD5E1", fontSize: "14px", transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s", flexShrink: 0 }}>▾</div>
                  </button>

                  {isOpen && (
                    <div style={{ borderTop: `1px solid ${p.light}` }}>
                      {week.tasks.map((task, ti) => {
                        const isDone = done[task.id];
                        return (
                          <div key={task.id} onClick={() => toggleTask(task.id)} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "11px 16px", borderBottom: ti < week.tasks.length - 1 ? "1px solid #F8FAFC" : "none", cursor: "pointer", background: isDone ? `${p.bg}88` : "white", transition: "background 0.15s" }}>
                            <div style={{ width: "20px", height: "20px", borderRadius: "6px", border: `2px solid ${isDone ? p.color : "#CBD5E1"}`, background: isDone ? p.color : "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px", transition: "all 0.15s" }}>
                              {isDone && <span style={{ color: "white", fontSize: "11px", fontWeight: 700, lineHeight: 1 }}>✓</span>}
                            </div>
                            <div style={{ fontSize: "13px", color: isDone ? "#94A3B8" : "#334155", lineHeight: "1.5", textDecoration: isDone ? "line-through" : "none", flex: 1 }}>{task.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ─── KPIS TAB ─── */}
        {tab === "kpis" && (
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#1C3A5F", marginBottom: "4px" }}>Indicadores de éxito</div>
              <div style={{ fontSize: "13px", color: "#64748B" }}>Revisar en la reunión de socios del último viernes de cada mes</div>
            </div>

            <div style={{ background: "white", borderRadius: "14px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: "20px" }}>
              <div style={{ background: "#1C3A5F", padding: "12px 16px", display: "grid", gridTemplateColumns: "1fr 60px 60px 60px", gap: "4px", alignItems: "center" }}>
                <div style={{ color: "#93C5FD", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>INDICADOR</div>
                <div style={{ color: "#93C5FD", fontSize: "10px", fontWeight: 700, textAlign: "center" }}>HOY</div>
                <div style={{ color: "#FDBA74", fontSize: "10px", fontWeight: 700, textAlign: "center" }}>MES 3</div>
                <div style={{ color: "#6EE7B7", fontSize: "10px", fontWeight: 700, textAlign: "center" }}>MES 6</div>
              </div>
              {KPIS.map((kpi, i) => (
                <div key={i} style={{ padding: "11px 16px", display: "grid", gridTemplateColumns: "1fr 60px 60px 60px", gap: "4px", alignItems: "center", background: i % 2 === 0 ? "white" : "#FAFAF9", borderTop: i > 0 ? "1px solid #F1F5F9" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <span style={{ fontSize: "14px" }}>{kpi.icon}</span>
                    <span style={{ fontSize: "12px", color: "#334155", lineHeight: "1.4" }}>{kpi.name}</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#94A3B8", textAlign: "center", fontWeight: 500 }}>{kpi.base}</div>
                  <div style={{ fontSize: "12px", color: "#EA580C", textAlign: "center", fontWeight: 700 }}>{kpi.m3}</div>
                  <div style={{ fontSize: "12px", color: "#059669", textAlign: "center", fontWeight: 700 }}>{kpi.m6}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1C3A5F", marginBottom: "10px" }}>Reglas de oro</div>
            {[
              ["Consistencia > Perfección", "3 posts buenos a la semana valen más que 1 espectacular al mes."],
              ["Medir siempre", "Si no se mide, no existe. Reunión mensual obligatoria."],
              ["No depender de una persona", "Documentar todos los procesos."],
              ["Conversión antes que alcance", "100 contactos que agendan > 10.000 likes."],
              ["Educar primero, vender después", "El contenido educativo genera más confianza que la publicidad directa."],
            ].map(([title, desc], i) => (
              <div key={i} style={{ background: "white", borderRadius: "12px", padding: "12px 14px", marginBottom: "8px", display: "flex", gap: "10px", alignItems: "flex-start", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                <div style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: 700, width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#1E293B", marginBottom: "2px" }}>{title}</div>
                  <div style={{ fontSize: "12px", color: "#64748B", lineHeight: "1.45" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── TOOLS / ARRANQUE TAB ─── */}
        {tab === "tools" && (
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#1C3A5F", marginBottom: "4px" }}>Checklist de arranque</div>
              <div style={{ fontSize: "13px", color: "#64748B" }}>Lo que se decide y activa esta semana</div>
            </div>

            <div style={{ background: "white", borderRadius: "14px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: "20px" }}>
              {CHECKLIST.map((item, i) => {
                const isDone = done[item.id];
                return (
                  <div key={item.id} onClick={() => toggleTask(item.id)} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", borderTop: i > 0 ? "1px solid #F1F5F9" : "none", cursor: "pointer", background: isDone ? "#F0FDF4" : "white", transition: "background 0.2s" }}>
                    <div style={{ width: "22px", height: "22px", borderRadius: "7px", border: `2px solid ${isDone ? "#059669" : "#CBD5E1"}`, background: isDone ? "#059669" : "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}>
                      {isDone && <span style={{ color: "white", fontSize: "12px", fontWeight: 700 }}>✓</span>}
                    </div>
                    <div style={{ fontSize: "13px", color: isDone ? "#94A3B8" : "#334155", lineHeight: "1.45", flex: 1, textDecoration: isDone ? "line-through" : "none" }}>{item.text}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "12px", padding: "12px 16px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "13px", color: "#065F46", fontWeight: 600 }}>Arranque completado</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#059669" }}>{CHECKLIST.filter(c => done[c.id]).length}/{CHECKLIST.length}</span>
            </div>

            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1C3A5F", marginBottom: "10px" }}>Herramientas necesarias</div>
            <div style={{ background: "white", borderRadius: "14px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              {TOOLS.map((tool, i) => (
                <div key={i} style={{ padding: "12px 16px", borderTop: i > 0 ? "1px solid #F1F5F9" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#1E293B" }}>{tool.name}</div>
                    <div style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>{tool.use}</div>
                  </div>
                  <div style={{ background: tool.cost === "Gratis" ? "#ECFDF5" : "#FFF7ED", color: tool.cost === "Gratis" ? "#059669" : "#EA580C", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "20px", whiteSpace: "nowrap", marginLeft: "10px" }}>{tool.cost}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
