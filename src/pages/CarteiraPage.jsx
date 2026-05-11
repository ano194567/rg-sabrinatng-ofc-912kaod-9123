import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Tabs from '../components/Tabs'
import DocumentFront from '../components/DocumentFront'
import DocumentBack from '../components/DocumentBack'
import QRCode from '../components/QRCode'

const DOCUMENT_TABS = [
  { id: 'frente', label: 'Frente' },
  { id: 'verso', label: 'Verso' },
  { id: 'qrcode', label: 'QR Code' },
]


export default function CarteiraPage() {
  const [activeTab, setActiveTab] = useState('frente')
  const [showMenu, setShowMenu] = useState(false)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'RG Digital',
        text: 'Minha Carteira de Identidade Digital',
      })
    }
  }

  const touchStartRef = useRef({ x: null, y: null })
  const touchEndRef = useRef({ x: null, y: null })

  const onTouchStart = (e) => {
    touchEndRef.current = { x: null, y: null }
    touchStartRef.current = { 
      x: e.targetTouches[0].clientX, 
      y: e.targetTouches[0].clientY 
    }
  }

  const onTouchMove = (e) => {
    touchEndRef.current = { 
      x: e.targetTouches[0].clientX, 
      y: e.targetTouches[0].clientY 
    }
  }

  const onTouchEnd = () => {
    if (!touchStartRef.current.x || !touchEndRef.current.x) return
    
    const distanceX = touchStartRef.current.x - touchEndRef.current.x
    const distanceY = touchStartRef.current.y - touchEndRef.current.y
    
    // Check if horizontal swipe is more dominant than vertical
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      const isLeftSwipe = distanceX > 50
      const isRightSwipe = distanceX < -50

      if (isLeftSwipe || isRightSwipe) {
        const currentIndex = DOCUMENT_TABS.findIndex(t => t.id === activeTab)
        if (isLeftSwipe && currentIndex < DOCUMENT_TABS.length - 1) {
          setActiveTab(DOCUMENT_TABS[currentIndex + 1].id)
        }
        if (isRightSwipe && currentIndex > 0) {
          setActiveTab(DOCUMENT_TABS[currentIndex - 1].id)
        }
      }
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'frente':
        return <DocumentFront />
      case 'verso':
        return <DocumentBack />
      case 'qrcode':
        return <QRCode />
      default:
        return <DocumentFront />
    }
  }

  return (
    <>
      <Header
        title="Carteira"
        onBack={() => {}}
        onShare={handleShare}
        onMenu={() => setShowMenu(!showMenu)}
      />

      <Tabs
        tabs={DOCUMENT_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div 
        className="main-content"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {renderContent()}

        <p className="update-info">
          Última atualização em: 07/03/26 – 13:51
        </p>
      </div>

      {/* Menu Dropdown */}
      {showMenu && (
        <>
          <div className="menu-overlay" onClick={() => setShowMenu(false)} />
          <div className="menu-dropdown">
            <button className="menu-dropdown__item" onClick={() => setShowMenu(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Enviar por e-mail
            </button>
            <button className="menu-dropdown__item" onClick={() => setShowMenu(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Salvar PDF
            </button>
            <button className="menu-dropdown__item" onClick={() => setShowMenu(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
              Configurações
            </button>
          </div>
        </>
      )}
    </>
  )
}
