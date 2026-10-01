# OpsBoard — evaluación frontend semi-senior

## Contexto

Una cooperativa de mantenimiento urbano coordina cuadrillas que atienden incidentes en la ciudad: luminarias apagadas, pérdidas de agua, árboles caídos y señalización dañada. Hoy distribuye el trabajo con mensajes y planillas. Tu objetivo es construir **OpsBoard**, un tablero web que permita consultar, priorizar y asignar incidentes.

La temática es deliberadamente distinta de estacionamientos e inmuebles, pero ejercita problemas reales de producto: datos remotos, caché, filtros, formularios, validación, estados transitorios y decisiones de arquitectura.

## El desafío

Construí una aplicación funcional sobre este starter. No hace falta backend: `src/api/mockApi.ts` simula una API REST con latencia y errores, y `src/contracts/api.ts` define sus contratos. Podés modificar el starter y sumar dependencias, pero documentá las decisiones.

### Alcance obligatorio

1. **Tablero de incidentes**
   - Listar incidentes con título, categoría, prioridad, estado, barrio, responsable y fecha de actualización.
   - Buscar por texto y filtrar por estado, prioridad y barrio.
   - Ordenar al menos por prioridad y actualización.
   - Reflejar filtros relevantes en la URL para que la vista sea compartible o justificar otra decisión.
   - Mostrar resumen por estado sin duplicar la fuente de verdad.

2. **Detalle**
   - Abrir el detalle de un incidente desde el listado.
   - Exponer descripción, historial y datos operativos.
   - Permitir asignar una cuadrilla y cambiar estado respetando las transiciones del contrato.
   - Después de una mutación, mantener lista, detalle y resumen consistentes. Se valora actualización optimista con rollback justificado, no es obligatoria.

3. **Alta de incidente**
   - Formulario con título, descripción, categoría, prioridad, barrio, dirección, contacto opcional y SLA.
   - Validación declarativa con Zod o Yup, errores junto al campo y resumen accesible cuando corresponda.
   - Prevenir envíos duplicados y conservar o descartar el borrador de manera explícita.

4. **Estados de interfaz**
   - Loading perceptible, error recuperable, vacío contextual y éxito.
   - La API permite forzar errores; la interfaz no debe quedar incoherente.
   - Diseño responsive utilizable desde 360 px y navegación por teclado.

5. **Calidad**
   - Pruebas automatizadas de al menos: un flujo principal, validación del formulario, error/reintento y una unidad de lógica no trivial.
   - HTML semántico, foco visible, nombres accesibles y contraste razonable.
   - Evitar renders o requests innecesarios; justificar optimizaciones, no aplicar `memo` indiscriminadamente.

### Decisiones esperadas

- Usá TanStack Query para estado remoto y caché.
- Elegí Zustand, Context o Redux para **estado global de cliente sólo si existe una necesidad real**; explicá por qué. Estado local debe permanecer local.
- No dupliques en el store datos que ya administra la caché remota.
- Separá dominio, acceso a datos y presentación con la complejidad justa.
- Tratá errores desconocidos con seguridad de tipos; evitá `any`.

## Requisitos no funcionales

- TypeScript en modo estricto y sin errores de lint/build.
- Sin secretos ni llamadas externas: todo debe funcionar con los mocks locales.
- Accesibilidad: objetivo WCAG 2.1 AA en el flujo principal.
- Rendimiento: interacción fluida con 250 incidentes; explicá cómo lo comprobaste.
- Compatibilidad: última versión estable de Chrome/Firefox o equivalente.
- README actualizado con instalación, arquitectura y comandos finales.

## Etapas sugeridas (8–12 horas)

1. **Descubrimiento (45 min):** leer contratos, escribir supuestos y decisiones iniciales.
2. **Base (60 min):** providers, layout, estrategia de rutas/URL y capa de API.
3. **Listado (2 h):** fetching, filtros, estados y responsive.
4. **Detalle y mutaciones (2 h):** consistencia de caché y feedback.
5. **Formulario (2 h):** validación y UX.
6. **Calidad (2 h):** tests, accesibilidad, rendimiento y pulido.
7. **Cierre (45 min):** documentación, historial Git y preparación de defensa.

Priorizá un flujo vertical sólido antes que muchas pantallas incompletas. Si no terminás algo, dejá el estado honesto y explicá el siguiente paso.

## Reglas de entrega y uso de IA

- IA, documentación, buscadores y snippets están permitidos.
- Registrá **cada consulta de IA** en `AI_USAGE_LOG.md`, incluso si descartaste la respuesta.
- Se permite copiar o adaptar código sólo si se declara, se comprende y se verifica.
- Ocultar uso de IA, inventar verificaciones o no poder explicar el código invalida la señal técnica.
- Hacé commits pequeños con mensajes que expliquen intención. No se exige un número artificial de commits.
- No se usa telemetría, grabación, keylogger ni inspección privada. Los controles son transparentes: historial Git, registro de IA, defensa oral y cambios breves en vivo.
- En la entrevista se pedirán 1–2 cambios sorpresa acotados (por ejemplo, un nuevo filtro o una regla de transición) para observar razonamiento, no velocidad de tipeo.

## Inicio

```bash
npm install
npm run dev
```

Antes de entregar:

```bash
npm run lint
npm run test
npm run build
```

Leé `EVALUATION_RUBRIC.md` antes de empezar. Registrá decisiones en `DECISIONS.md` y uso de IA en `AI_USAGE_LOG.md` durante el trabajo, no al final de memoria.

## Qué entrega el starter

- Vite + React + TypeScript + Tailwind configurados.
- Contratos de dominio/API y un mock determinista en memoria.
- Datos iniciales y controles para simular latencia/error.
- Una pantalla mínima de bienvenida, no la solución.
- Smoke test y especificaciones de aceptación pendientes.

El mock se reinicia al recargar la página. No edites el PDF del CV ni necesitás usarlo para este ejercicio.
