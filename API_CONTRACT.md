# Contrato del mock REST

La implementación se consume como funciones asíncronas en `src/api/mockApi.ts`, pero representa estos endpoints:

| Método | Endpoint | Función | Resultado |
|---|---|---|---|
| GET | `/incidents` | `incidentApi.list(filters)` | `{ data, total }` |
| GET | `/incidents/:id` | `incidentApi.get(id)` | `Incident` |
| POST | `/incidents` | `incidentApi.create(input)` | `Incident` creado |
| PATCH | `/incidents/:id` | `incidentApi.update(id, input)` | `Incident` actualizado |
| GET | `/crews` | `incidentApi.crews()` | `Crew[]` |

## Comportamiento relevante

- Latencia inicial: 350 ms.
- `mockControls.failNext()` hace fallar exactamente la próxima respuesta con status 503.
- `mockControls.setLatency(ms)` permite probar skeletons y concurrencia.
- `mockControls.reset()` restaura datos, latencia y errores.
- Transiciones válidas: `open → assigned`; `assigned → open | in_progress`; `in_progress → assigned | resolved`; `resolved` es final.
- Un título de menos de cinco caracteres falla con 422 y `fieldErrors.title`.
- El estado está en memoria y se reinicia al recargar.

No cambies el contrato sólo para evitar manejar un caso difícil. Si detectás una ambigüedad o proponés una mejora, registrala en `DECISIONS.md`.
