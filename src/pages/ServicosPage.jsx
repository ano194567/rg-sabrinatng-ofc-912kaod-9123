import React from 'react'

const SERVICES = [
  {
    id: 1,
    label: 'Atualizar Documento',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23,4 23,10 17,10" />
        <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
      </svg>
    ),
    color: '',
  },
  {
    id: 2,
    label: 'Histórico',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    color: '--green',
  },
  {
    id: 3,
    label: 'Segurança',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: '--orange',
  },
  {
    id: 4,
    label: 'Validar Documento',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
    color: '--purple',
  },
  {
    id: 5,
    label: 'Suporte',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    color: '--teal',
  },
  {
    id: 6,
    label: 'Ajuda',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    color: '--red',
  },
]

export default function ServicosPage() {
  return (
    <div className="services-page">
      <h2 className="services-page__title">Serviços</h2>
      <div className="services-grid">
        {SERVICES.map((service) => (
          <button key={service.id} className="service-card">
            <div className={`service-card__icon service-card__icon${service.color}`}>
              {service.icon}
            </div>
            <span className="service-card__label">{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
