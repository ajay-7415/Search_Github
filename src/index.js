import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
