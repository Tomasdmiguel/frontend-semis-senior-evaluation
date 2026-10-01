import type { Crew, Incident } from '../contracts/api'

export const seedCrews: Crew[] = [
  { id: 'crew-norte', name: 'Cuadrilla Norte', specialties: ['lighting', 'signage'], available: true },
  { id: 'crew-verde', name: 'Cuadrilla Verde', specialties: ['trees'], available: true },
  { id: 'crew-hidrica', name: 'Cuadrilla Hídrica', specialties: ['water'], available: false },
]

export const seedIncidents: Incident[] = [
  {
    id: 'inc-101', title: 'Semáforo intermitente', description: 'La señal cambia de forma irregular en hora pico.',
    category: 'signage', priority: 'critical', status: 'assigned', neighborhood: 'Centro', address: 'San Martín 450',
    slaHours: 4, assignedCrewId: 'crew-norte', createdAt: '2026-09-27T12:00:00.000Z', updatedAt: '2026-09-28T09:20:00.000Z',
    history: [{ id: 'evt-1', at: '2026-09-27T12:00:00.000Z', description: 'Incidente creado' }],
  },
  {
    id: 'inc-102', title: 'Rama sobre la vereda', description: 'Una rama grande bloquea el paso peatonal.',
    category: 'trees', priority: 'high', status: 'open', neighborhood: 'Parque', address: 'Los Tilos 88', contact: 'Vecina: 11 5555 0000',
    slaHours: 12, assignedCrewId: null, createdAt: '2026-09-28T08:30:00.000Z', updatedAt: '2026-09-28T08:30:00.000Z',
    history: [{ id: 'evt-2', at: '2026-09-28T08:30:00.000Z', description: 'Incidente creado' }],
  },
  {
    id: 'inc-103', title: 'Pérdida en calzada', description: 'Flujo constante de agua junto al cordón.',
    category: 'water', priority: 'medium', status: 'in_progress', neighborhood: 'Sur', address: 'Belgrano 1210',
    slaHours: 24, assignedCrewId: 'crew-hidrica', createdAt: '2026-09-26T14:10:00.000Z', updatedAt: '2026-09-28T07:00:00.000Z',
    history: [{ id: 'evt-3', at: '2026-09-26T14:10:00.000Z', description: 'Incidente creado' }],
  },
  {
    id: 'inc-104', title: 'Luminaria apagada', description: 'Poste sin iluminación frente a la plaza.',
    category: 'lighting', priority: 'low', status: 'resolved', neighborhood: 'Norte', address: 'Rivadavia 3020',
    slaHours: 48, assignedCrewId: 'crew-norte', createdAt: '2026-09-24T17:00:00.000Z', updatedAt: '2026-09-27T18:15:00.000Z',
    history: [{ id: 'evt-4', at: '2026-09-24T17:00:00.000Z', description: 'Incidente creado' }],
  },
]
