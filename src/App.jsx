import React, { useState } from 'react'
import BottomNav from './components/BottomNav'
import CarteiraPage from './pages/CarteiraPage'
import ServicosPage from './pages/ServicosPage'
import OpcoesPage from './pages/OpcoesPage'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('carteira')

  const renderPage = () => {
    switch (activePage) {
      case 'carteira':
        return <CarteiraPage />
      case 'servicos':
        return <ServicosPage />
      case 'opcoes':
        return <OpcoesPage />
      default:
        return <CarteiraPage />
    }
  }

  return (
    <div className="app-container">
      {renderPage()}
      <BottomNav activeTab={activePage} onTabChange={setActivePage} />
    </div>
  )
}

export default App
