import React from 'react'
import { createRoot } from 'react-dom/client'

export const print = () => {
  const origin = window.UTFIFAHeaderView.prototype._generate
  window.UTFIFAHeaderView.prototype._generate = function () {
    origin.apply(this, arguments)
    window.test = this
    const root = this.getRootElement()
    createRoot(root).render(<div>HMR</div>)
  }
}
