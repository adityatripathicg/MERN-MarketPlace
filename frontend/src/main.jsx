import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import App from './App.jsx'
import {BroweserRouter} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <BroweserRouter>
      <Provider>
      <App />
      </Provider>
      </BroweserRouter>
      </StrictMode>,
)
