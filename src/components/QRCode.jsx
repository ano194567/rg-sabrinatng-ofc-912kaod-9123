import React from 'react'

export default function QRCode() {
  return (
    <div className="qr-code-container">
      <div className="qr-code-box">
        <img
          src="/qr-code.png"
          alt="QR Code de validação"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            imageRendering: 'crisp-edges',
          }}
          draggable={false}
        />
      </div>
      <p className="qr-code-label">
        Escaneie o QR Code para validar<br />a autenticidade do documento
      </p>
    </div>
  )
}
