import React from 'react'
import { createRoot } from 'react-dom/client'
import {App}from './app'
__webpack_public_path__ = chrome.runtime.getURL('')

console.log(__webpack_public_path__)


const div = document.createElement('div')
document.body.append(div)
createRoot(div).render(<App />)
