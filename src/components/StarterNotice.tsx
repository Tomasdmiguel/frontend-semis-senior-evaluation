export function StarterNotice() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl" aria-labelledby="starter-title">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Starter listo</p>
      <h2 id="starter-title" className="mt-2 text-2xl font-bold text-white">La solución empieza acá</h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        Revisá el README, los contratos y el mock de API. Reemplazá este bloque por tu tablero sin perder los estados accesibles de la aplicación.
      </p>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-300">
        <li>Documentá decisiones a medida que avanzás.</li>
        <li>Registrá cada consulta de IA.</li>
        <li>Construí y probá un flujo vertical antes de ampliar alcance.</li>
      </ul>
    </section>
  )
}
