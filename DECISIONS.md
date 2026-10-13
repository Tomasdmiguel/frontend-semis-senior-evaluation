# Registro de decisiones técnicas

Usá una entrada por decisión significativa. Incluí también decisiones reversibles y alternativas descartadas; buscamos razonamiento, no una arquitectura “perfecta”.

## ADR-001 — Ejemplo a reemplazar: estrategia de estado

- **Estado:** propuesta / aceptada / reemplazada
- **Fecha:** AAAA-MM-DD
- **Contexto:** ¿qué problema concreto requiere una decisión?
- **Opciones consideradas:**
  1. Opción A — ventajas/costos.
  2. Opción B — ventajas/costos.
- **Decisión:**
- **Consecuencias:** qué mejora, qué empeora y qué deuda queda.
- **Cómo se verificará:**

## Preguntas que conviene responder

- ¿Qué vive en TanStack Query, qué es local y qué (si algo) merece un store global?
- ¿Cómo se representan filtros en la URL?
- ¿Cómo se sincroniza la caché después de mutar?
- ¿Qué límites de componentes/módulos elegiste?
- ¿Cómo modelaste validación, errores desconocidos y transiciones de estado?
- ¿Qué mediste para afirmar que funciona con 250 registros?

Mis decisiones:

1. Primero decidi ver el archivo mockApi.ts y tambien el contracts/api.ts por que hay identifique como funcionaria el "backend" y tambien identifico como van a ser mis types
2. Me fijo como voy a mostrar esto si voy a jugar con el renderizado en el app.js (Nunca lo hice pero no me gusta mucho) o si voy a descargar una libreria que me ayude tengo que decidir entre estas dos que me gustan y me llama la atencion "TanStack router" y "React router".
3. Decidir entre cuales de las dos librerias usar: Opte por TanStack no queria tener que usar React Router y tener una carpeta pages con sus archivos creia que podria hacer crecer el repositorio con carpetas y archivos pero ademas de esto, recorde que tambien es un proyecto para practicar y no conozco mucho de TanStack router y podria aprenderlo a utilizar. Tambien tenia en cuenta como funcionaba TanStack, son rutas basadas en archivos y eso me gustaba por que hacia que mi page no sea gigante
