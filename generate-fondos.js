#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Archivos a incrustar
const FONDOS_FILES = [
  'fondos/README.md',
  'fondos/PRESUPUESTO-CRECE-JUSTIFICADO.md',
  'fondos/PLAN-NEGOCIO-CRECE-FINAL.md',
  'fondos/CRONOGRAMA-URGENTE-31MAYO-11JUNIO.md',
  'fondos/GUION-VIDEO-PITCH-CRECE-90SEG.md',
  'fondos/BASES-CRECE-2026-COQUIMBO-RESUMEN.md',
  'fondos/TRACKER-POSTULACION-CRECE.md',
];

// Generar objeto JS con contenido
let fondosObj = 'const FONDOS_DOCS = {\n';

FONDOS_FILES.forEach((filePath) => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // Escapar backticks y backslashes para template literal
    const escaped = content
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');

    fondosObj += `  "${filePath}": \`${escaped}\`,\n`;
    console.log(`✓ ${filePath} (${content.length} chars)`);
  } catch (error) {
    console.error(`✗ Error leyendo ${filePath}:`, error.message);
    process.exit(1);
  }
});

fondosObj += '};\n';

// Leer maestro.html
const maestroPath = path.join(__dirname, 'maestro.html');
let maestroContent = fs.readFileSync(maestroPath, 'utf-8');

// Reemplazar contenido entre marcadores
const startMarker = '<!-- FONDOS_START -->';
const endMarker = '<!-- FONDOS_END -->';

const startIdx = maestroContent.indexOf(startMarker);
const endIdx = maestroContent.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error('✗ No se encontraron los marcadores en maestro.html');
  console.error('  Agrega esto en el <head>:');
  console.error('  <!-- FONDOS_START -->');
  console.error('  <!-- FONDOS_END -->');
  process.exit(1);
}

const before = maestroContent.substring(0, startIdx + startMarker.length);
const after = maestroContent.substring(endIdx);

const newContent = `${before}\n<script>\n${fondosObj}</script>\n${after}`;

// Escribir maestro.html
fs.writeFileSync(maestroPath, newContent, 'utf-8');

console.log('\n✅ Generación completada');
console.log(`   ${FONDOS_FILES.length} archivos incrustados en maestro.html`);
console.log(`   Archivo maestro.html actualizado (${newContent.length} bytes)`);
