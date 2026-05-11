import React from 'react'

export default function BottomNav({ activeTab, onTabChange }) {
  const items = [
    {
      id: 'carteira',
      label: 'Carteira',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <circle cx="8" cy="10" r="2" />
          <path d="M14 7h4" />
          <path d="M14 11h4" />
          <path d="M6 17h12" />
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
          <rect x="2" y="3" width="20" height="18" rx="2" opacity="0.15" />
          <rect x="2" y="3" width="20" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="8" cy="10" r="2" fill="none" strokeWidth="2" />
          <path d="M14 7h4" fill="none" strokeWidth="2" />
          <path d="M14 11h4" fill="none" strokeWidth="2" />
          <path d="M6 17h12" fill="none" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'servicos',
      label: 'Serviços',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" opacity="0.15" />
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="7" y1="7" x2="7.01" y2="7" fill="none" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'opcoes',
      label: 'Opções',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      ),
      iconActive: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      ),
    },
  ]

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav__item ${activeTab === item.id ? 'bottom-nav__item--active' : ''}`}
          onClick={() => onTabChange(item.id)}
          aria-label={item.label}
        >
          <span className="bottom-nav__icon">
            {activeTab === item.id ? item.iconActive : item.icon}
          </span>
          <span className="bottom-nav__label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
