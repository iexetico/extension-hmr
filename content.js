import React from 'react'
import { createRoot } from 'react-dom/client'
__webpack_public_path__ = chrome.runtime.getURL('')

console.log(__webpack_public_path__)

const print = () => {
  console.log('as')
}

print()

if (module.hot) {
  module.hot.accept()
}

const App = () => {
  return <div>TE1fST</div>
}

const div = document.createElement('div')
document.body.append(div)
createRoot(div).render(<App />)
