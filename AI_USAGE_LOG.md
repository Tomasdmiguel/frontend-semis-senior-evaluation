# Registro obligatorio de uso de IA

El uso de IA está permitido. Completá una entrada inmediatamente después de **cada** consulta, incluida una respuesta descartada. No pegues secretos, datos personales ni conversaciones irrelevantes.

## Plantilla

### Consulta 001

- **Fecha y hora:** AAAA-MM-DD HH:mm (zona horaria)
- **Herramienta/modelo:**
- **Objetivo:**
- **Prompt completo o enlace/export verificable:**
  >
- **Respuesta resumida (en tus palabras):**
- **Código copiado o adaptado:** archivo/líneas o “ninguno”
- **Qué entendí:**
- **Qué cambié respecto de la sugerencia y por qué:**
- **Cómo lo verifiqué:** comando, test, inspección o “no verificado”
- **Resultado:** usado / adaptado / descartado

---

Duplicá la sección para cada consulta. Si no usaste IA, declaralo explícitamente con fecha al final de la entrega; no borres esta plantilla.

## Consultas registradas

Estas entradas fueron redactadas por Codex a pedido del participante a partir de esta conversación. No constituyen una declaración de comprensión escrita por el participante. La hora exacta de las consultas no está disponible; se indica la hora del registro. Se documentan únicamente las consultas visibles en esta conversación.

### Consulta 001 — Aviso en la configuración de Vite

- **Fecha y hora:** 2026-10-13; registrada a las 19:56 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Entender por qué el editor mostraba un error en la configuración de Vite.
- **Prompt completo o enlace/export verificable:**

  ````text
  Por que me sale que hay un error aca?  /// <reference types="vitest" />
  import { tanstackRouter } from "@tanstack/router-plugin/vite";
  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";

  export default defineConfig({
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
      }),
      react(),
    ],
    test: {
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      css: true,
    },
  });
  ````

- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** Codex inspeccionó la configuración y las dependencias. No reprodujo errores con TypeScript ni ESLint. Sin conocer aún el mensaje exacto, planteó que, si el error estaba en `test`, podía importarse `defineConfig` desde `vitest/config` y quitar la referencia triple slash. Solicitó el diagnóstico exacto. Consultó la documentación de Vitest: https://vitest.dev/config/file.
- **Código copiado o adaptado:** Ninguno por parte de Codex; no se modificó `vite.config.ts`. No se confirmó que el participante aplicara la sugerencia.
- **Qué entendí:** Pendiente de completar por el participante; la IA no puede acreditar su comprensión.
- **Qué cambié respecto de la sugerencia y por qué:** No se aplicó ningún cambio durante esta asistencia. El mensaje aportado en la consulta siguiente apuntaba a `plugins`, por lo que la hipótesis sobre `test` no explicaba el aviso informado.
- **Cómo lo verifiqué:** Codex ejecutó `./node_modules/.bin/tsc -p tsconfig.node.json --noEmit --composite false --incremental false` y `./node_modules/.bin/eslint vite.config.ts`; ambos terminaron con código 0. Un intento previo de TypeScript con `--incremental false` sin desactivar `composite` falló con TS6379 por incompatibilidad de las opciones del comando. No se ejecutó el build completo ni la suite de tests.
- **Resultado:** Hipótesis inicial descartada como explicación del error posteriormente informado; sugerencia de código no aplicada por Codex.

### Consulta 002 — Diagnóstico exacto de ESLint sobre los plugins

- **Fecha y hora:** 2026-10-13; registrada a las 19:56 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Aclarar el error concreto y obtener orientación para resolverlo.
- **Prompt completo o enlace/export verificable:**
  > Unsafe assignment of type `any[]` to a variable of type `PluginOption[]`.eslint@typescript-eslint/no-unsafe-assig
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** Codex explicó que ESLint estaba interpretando el arreglo de plugins como `any[]` donde se esperaba `PluginOption[]`. Revisó `eslint.config.js`, las versiones instaladas y las declaraciones de tipos de los plugins. Como las verificaciones desde terminal habían pasado, propuso como hipótesis información de tipos desactualizada en el editor y recomendó guardar el archivo, ejecutar `ESLint: Restart ESLint Server` y, si persistía, `TypeScript: Restart TS Server`. Reconoció que la hipótesis anterior sobre `test` no correspondía al mensaje. Consultó https://typescript-eslint.io/troubleshooting/typed-linting/.
- **Código copiado o adaptado:** Ninguno por parte de Codex. No agregó conversiones `as PluginOption[]` ni desactivó reglas.
- **Qué entendí:** Pendiente de completar por el participante; la IA no puede acreditar su comprensión.
- **Qué cambié respecto de la sugerencia y por qué:** No hay cambios de código ni acciones en el editor confirmados por el participante.
- **Cómo lo verifiqué:** Codex ejecutó `npm ls vite vitest @tanstack/router-plugin @vitejs/plugin-react typescript-eslint`, leyó la configuración de ESLint e inspeccionó declaraciones `.d.ts`. Se apoyó en las verificaciones de terminal de la consulta 001. No reprodujo el aviso del editor ni verificó que reiniciar sus servidores lo resolviera.
- **Resultado:** Orientación proporcionada; aplicación y resolución pendientes de confirmación. La causa propuesta sigue siendo una hipótesis.

### Consulta 003 — Documentar el uso de IA en la práctica

- **Fecha y hora:** 2026-10-13; registrada a las 19:56 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Leer las reglas del ejercicio y documentar la asistencia recibida para mantener transparente la evaluación del nivel del participante.
- **Prompt completo o enlace/export verificable:**
  > Esto es un proyecto donde estoy practicando mi nievel lee los .MD y documenta mi uso de IA lo que te pedi por que necesito que se documente
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** Codex leyó `README.md`, `EVALUATION_RUBRIC.md`, `AI_USAGE_LOG.md`, `DECISIONS.md` y `API_CONTRACT.md`. Registró las tres consultas visibles, incluyendo la hipótesis inicial descartada, las comprobaciones realmente ejecutadas y la falta de confirmación de una solución en el editor.
- **Código copiado o adaptado:** Ninguno; se agregó documentación redactada por IA en `AI_USAGE_LOG.md`.
- **Qué entendí:** Pendiente de completar por el participante. Las reglas del ejercicio requieren declarar cada consulta, comprender y verificar el código utilizado, sin inventar evidencia.
- **Qué cambié respecto de la sugerencia y por qué:** Se conservó la plantilla original. Se explicitó la autoría de IA de estas entradas y se dejaron pendientes la comprensión personal y los resultados no confirmados.
- **Cómo lo verifiqué:** Lectura de los cinco archivos Markdown del proyecto y revisión del diff de `AI_USAGE_LOG.md`. No corresponde ejecutar tests por esta modificación documental.
- **Resultado:** Usado: asistencia documentada en este archivo; reflexión personal pendiente del participante.
