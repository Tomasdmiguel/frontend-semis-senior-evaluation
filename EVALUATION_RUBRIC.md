# Rúbrica objetiva (100 puntos)

## Umbrales

- **80–100 — Señal semi-senior sólida:** entrega coherente de punta a punta, decisiones argumentadas, manejo de casos adversos y autonomía en la defensa/cambio en vivo.
- **68–79 — Semi-senior incipiente:** buen dominio práctico, con algunas brechas de profundidad o terminación que no comprometen el flujo principal.
- **50–67 — Junior avanzado:** resuelve el camino feliz, pero necesita guía en arquitectura, consistencia remota, calidad o escenarios adversos.
- **0–49 — Aún no alcanza la señal:** solución frágil/incompleta o no explicable.

Además del puntaje, son condiciones necesarias para una señal semi-senior: flujo principal utilizable, TypeScript razonablemente estricto, manejo explícito de error/loading/empty, al menos tres pruebas valiosas, accesibilidad básica y defensa auténtica del código.

## Criterios

| Área | Pts | Junior avanzado | Evidencia semi-senior |
|---|---:|---|---|
| Funcionalidad y producto | 18 | Camino feliz y filtros básicos | Flujos completos, reglas de negocio consistentes, bordes y feedback claros |
| Fetching, caché y mutaciones | 14 | Obtiene datos; refetch manual o estado duplicado | Query keys claras, invalidación/actualización precisa, error/rollback y cero duplicación innecesaria |
| Estado React | 10 | Todo global o effects para derivar | Estado ubicado por alcance; derivaciones puras; store global justificado |
| Formularios y validación | 10 | Validación parcial y mensajes genéricos | Esquema tipado, errores útiles/accesibles, submit robusto y valores límite |
| Arquitectura y TypeScript | 12 | Componentes grandes o `any` ocasional | Límites claros, tipos del dominio, dependencias dirigidas y abstracciones proporcionadas |
| UX, responsive y estados | 10 | Desktop/camino feliz | 360 px+, loading/error/empty/success diseñados y recuperación sin perder contexto |
| Accesibilidad | 8 | Labels y botones básicos | Teclado/foco, semántica, anuncios pertinentes, contraste y prueba manual documentada |
| Testing | 8 | Tests superficiales/de implementación | Flujos por comportamiento, error/reintento, validación y unidad relevante; tests estables |
| Rendimiento | 4 | Sin problemas evidentes | Mide/razona; evita requests/renders; optimiza sólo donde aporta |
| Git y documentación | 3 | Un commit grande/documentación tardía | Historia legible, decisiones y deuda honestas, comandos reproducibles |
| Defensa y cambio en vivo | 3 | Repite código sin explicar trade-offs | Navega el código, explica decisiones y adapta una regla manteniendo calidad |

## Deducciones y topes

- Build roto o aplicación que no inicia por causas propias: máximo 59.
- Flujo principal no demostrable: máximo 49.
- Sin pruebas ejecutables: −8.
- Uso extendido de `any`, errores ignorados o datos remotos duplicados sin justificación: hasta −10.
- IA no declarada o código que la persona no puede explicar: la evaluación deja de ser válida, independientemente del puntaje.
- Features extra no compensan fallas en consistencia, accesibilidad o comprensión.

## Guía de entrevista (45 min)

1. Demo guiada por la persona (10 min).
2. Arquitectura, caché, estado y decisiones descartadas (10 min).
3. Lectura de un test y diagnóstico de un error forzado (10 min).
4. Cambio sorpresa pequeño acordado (10 min).
5. Retro y próximos pasos (5 min).

El evaluador debe puntuar evidencia observable y dejar un comentario por área con menos del 70% de sus puntos.
