
import React, { StrictMode } from 'react'
import IsVisible from './components/isVisible'
import { createRoot } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IsVisible isVisible={true}/>
  </StrictMode>,
)
