import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
