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

### Consulta 004 — Leer las reglas antes de ayudar con un problema

- **Fecha y hora:** 2026-10-20; registrada a las 16:52 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Leer los archivos Markdown y respetar el registro obligatorio de cada pedido antes de abordar un problema todavía no descrito.
- **Prompt completo o enlace/export verificable:**
  > Tengo un problema ayudame pero antes lee los .md para que entiedas que todo lo que te pido tiene que ser registrado
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** Codex leyó los cinco archivos Markdown del proyecto: README.md, EVALUATION_RUBRIC.md, API_CONTRACT.md, DECISIONS.md y AI_USAGE_LOG.md. Registró esta consulta y confirmó que las próximas consultas se documentarán, incluidas las respuestas descartadas, y las decisiones técnicas significativas se registrarán en DECISIONS.md. El diagnóstico queda pendiente de que el participante describa el problema.
- **Código copiado o adaptado:** Ninguno; sólo se agregó esta entrada documental.
- **Qué entendí:** Pendiente de completar por el participante; la IA no puede acreditar su comprensión.
- **Qué cambié respecto de la sugerencia y por qué:** No se realizaron cambios de implementación ni se tomaron decisiones técnicas.
- **Cómo lo verifiqué:** Lectura de los cinco archivos Markdown y revisión del diff de AI_USAGE_LOG.md. No se ejecutaron tests por tratarse de documentación.
- **Resultado:** Usado: pedido registrado; descripción del problema pendiente.

### Consulta 005 — Comando para instalar React Query Devtools

- **Fecha y hora:** 2026-10-20; registrada a las 16:53 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Obtener el comando para instalar el paquete del import ReactQueryDevtools.
- **Prompt completo o enlace/export verificable:**
  ```text
  Dberia de instalar el 20 |  import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
    me pasas como instalarlo ?
  ```
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** El paquete no figura en package.json. Codex indicó ejecutar `npm install @tanstack/react-query-devtools@5` desde la raíz del proyecto, manteniendo la versión mayor 5 de React Query. El import proporcionado es correcto.
- **Código copiado o adaptado:** Ninguno; comando propuesto para que lo ejecute el participante.
- **Qué entendí:** Pendiente de completar por el participante.
- **Qué cambié respecto de la sugerencia y por qué:** No se instalaron dependencias; el pedido fue recibir el comando.
- **Cómo lo verifiqué:** Inspección de package.json y consulta de documentación oficial: https://github.com/TanStack/query/blob/main/docs/framework/react/devtools.md. Instalación y funcionamiento no verificados.
- **Resultado:** Orientación proporcionada; ejecución pendiente del participante.

### Consulta 006 — useQuery con datos del mock

- **Fecha y hora:** 2026-10-20; registrada a las 16:55 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Revisar la implementación de useQuery y aclarar si los datos mockeados causan errores.
- **Prompt completo o enlace/export verificable:**
  ```text
  Otra consulta mas, esta bien como lo implemnete import { createFileRoute } from "@tanstack/react-router";
  import Table from "../components/Table";
  import { useQuery } from "@tanstack/react-query";
  import { getIncidents } from "../services/incidents";
  export const Route = createFileRoute("/")({
    component: RouteComponent,
  });

  function RouteComponent() {
    const { data } = useQuery({
      queryKey: ["listIncident"],
      queryFn: () => getIncidents,
    });

    console.log(data);
    return (
      <div>
        <Table />
      </div>
    );
  }
   pero como es data mockeapeada me va a tirar error verdada?
  ```
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** El mock devuelve una promesa y funciona con React Query. El callback actual devuelve la función getIncidents sin ejecutarla. Se propuso `queryFn: () => getIncidents({})`, ya que el servicio exige filtros. La respuesta tiene forma `{ data, total }`; inicialmente data puede ser undefined mientras carga. Se explicó el manejo de carga/error, que Table todavía no recibe los resultados y que los filtros futuros deben incluirse en la queryKey. El mock permite simular fallos explícitamente.
- **Código copiado o adaptado:** Ejemplo sugerido en la respuesta; no aplicado a los archivos fuente.
- **Qué entendí:** Pendiente de completar por el participante.
- **Qué cambié respecto de la sugerencia y por qué:** Revisión explicativa sin modificar la implementación.
- **Cómo lo verifiqué:** Inspección de src/services/incidents.ts, src/routes/index.tsx y src/api/mockApi.ts; documentación oficial de query functions y QueryOptions de TanStack. No se ejecutaron tests ni se verificó en navegador.
- **Resultado:** Diagnóstico y corrección sugeridos; aplicación pendiente del participante.

### Consulta 007 — Tipar los datos que recibe Table

- **Fecha y hora:** 2026-10-20; registrada a las 17:01 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Recordar cómo tipar las props de una tabla y pasar los incidentes obtenidos con useQuery.
- **Prompt completo o enlace/export verificable:**
  ```text
  No recuerdo como import { createFileRoute } from "@tanstack/react-router";
  import Table from "../components/Table";
  import { useQuery } from "@tanstack/react-query";
  import { getIncidents } from "../services/incidents";
  export const Route = createFileRoute("/")({
    component: RouteComponent,
  });

  function RouteComponent() {
    const { data } = useQuery({
      queryKey: ["listIncident"],
      queryFn: () => getIncidents({}),
    });

    const columns = [
      {
        label: "Nombre",
      },
    ];

    return (
      <div>
        <Table columns={columns} data={data} />
      </div>
    );
  }
   Deberia de mostrar por ejemplo en data decirle a ts que es  Incident import { createFileRoute } from "@tanstack/react-router";
  import Table from "../components/Table";
  import { useQuery } from "@tanstack/react-query";
  import { getIncidents } from "../services/incidents";
  import { IncidentEvent } from "../contracts/api";
  export const Route = createFileRoute("/")({
    component: RouteComponent,
  });

  function RouteComponent() {
    const { data } = useQuery({
      queryKey: ["listIncident"],
      queryFn: () => getIncidents({}),
    });

    const columns = [
      {
        label: "Nombre",
      },
    ];

    return (
      <div>
        <Table columns={columns} data={data:IncidentEvent[]} />
      </div>
    );
  }
  ```
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** La sintaxis de anotación dentro de la prop JSX no es válida. useQuery infiere IncidentListResponse | undefined desde el servicio; el array se obtiene con data?.data ?? []. Se propuso tipar las props en Table.tsx con Incident[], diferenciando IncidentEvent (evento del historial). Se señaló que `{ columns: [], data: [] }` es desestructuración, no una declaración de tipos ni valores predeterminados. Se proporcionó un ejemplo mínimo de tabla semántica para una columna de título.
- **Código copiado o adaptado:** Ejemplos sugeridos en la respuesta para la prop y Table.tsx; no aplicados al proyecto.
- **Qué entendí:** Pendiente de completar por el participante.
- **Qué cambié respecto de la sugerencia y por qué:** No se modificó código; asistencia explicativa solicitada.
- **Cómo lo verifiqué:** Inspección de Table, src/services/incidents.ts y src/contracts/api.ts. No se ejecutaron compilación, tests ni navegador; ejemplos no verificados en ejecución.
- **Resultado:** Orientación proporcionada; aplicación pendiente del participante.

### Consulta 008 — Para qué sirve type en TypeScript

- **Fecha y hora:** 2026-10-20; registrada a las 17:04 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Comprender el uso de type en el ejemplo de las props de Table.
- **Prompt completo o enlace/export verificable:**
  > Para que sirve el Type?
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** type permite dar nombre a un tipo. En TableProps describe las props esperadas: columns es un array de objetos con label de tipo string y data es un array de Incident. La anotación en los parámetros permite detectar incompatibilidades y ofrecer autocompletado. No crea datos ni valida respuestas en ejecución; se elimina al generar JavaScript. También se aclaró que import type importa una declaración sólo para usarla como tipo.
- **Código copiado o adaptado:** Ejemplo explicativo de TableProps y su anotación; no aplicado al proyecto.
- **Qué entendí:** Pendiente de completar por el participante.
- **Qué cambié respecto de la sugerencia y por qué:** No hubo cambios de implementación.
- **Cómo lo verifiqué:** Explicación basada en los tipos y el componente inspeccionados en la consulta anterior. No se ejecutaron tests; cambio exclusivamente documental.
- **Resultado:** Explicación proporcionada; comprensión pendiente del participante.

### Consulta 009 — Relación entre th y td en una tabla

- **Fecha y hora:** 2026-10-20; registrada a las 17:15 (America/Argentina/Buenos_Aires, UTC−03:00).
- **Herramienta/modelo:** Codex (GPT-6).
- **Objetivo:** Recordar cómo se construyen encabezados y celdas sin un componente DataTable prearmado.
- **Prompt completo o enlace/export verificable:**
  > No recordaba muy bien armar una tabla por que venia usando datatable una vez que cree hace mucho y siempre reutilize el compoennten pero por cada un th se va a crear un td?
- **Respuesta resumida (redactada por IA; pendiente de reformulación por el participante):** Un th no genera automáticamente un td. tr define una fila, th una celda de encabezado y td una celda de datos. En una tabla simple con dos encabezados se escriben dos celdas por cada fila del cuerpo, en el mismo orden. En el ejemplo previo columns.map genera encabezados y data.map genera filas, pero sólo hay una celda de título por fila; sumar columnas requiere agregar sus celdas o programar un mapeo de columnas dentro de cada fila.
- **Código copiado o adaptado:** Ejemplo explicativo JSX de dos columnas, título y prioridad; no aplicado al proyecto.
- **Qué entendí:** Pendiente de completar por el participante.
- **Qué cambié respecto de la sugerencia y por qué:** No se modificó la implementación.
- **Cómo lo verifiqué:** Explicación de semántica HTML y del ejemplo de la consulta 007. No se ejecutaron tests ni se verificó en navegador.
- **Resultado:** Explicación proporcionada; aplicación y comprensión pendientes del participante.
