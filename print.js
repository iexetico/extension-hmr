import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

export const print = () => {
  const origin = window.UTFIFAHeaderView.prototype._generate
  window.UTFIFAHeaderView.prototype._generate = function () {
    origin.apply(this, arguments)
    window.test = this
    console.dir('aassaassd')
    const root = this.getRootElement()
    createRoot(root).render(<App />)
  }
}
