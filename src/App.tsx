import { StarterNotice } from "./components/StarterNotice";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <h1 className="text-xl font-bold tracking-tight">OpsBoard</h1>
          <p className="text-sm text-slate-400">
            Coordinación de incidentes urbanos
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <StarterNotice />
      </main>
    </div>
  );
}
