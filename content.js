import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
__webpack_public_path__ = chrome.runtime.getURL('')

console.log(__webpack_public_path__)

const script = document.createElement('script')
script.type = 'text/javascript'
script.src = chrome.runtime.getURL('')
document.head.prepend(script)

const div = document.createElement('div')
document.body.append(div)
createRoot(div).render(<App />)
