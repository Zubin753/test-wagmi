import { Buffer } from 'buffer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { WagmiProvider} from 'wagmi'

import App from '../src/app/App.tsx'
import { config } from './wagmi.ts'

import './index.css'

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
          <App/>
      </QueryClientProvider>
    </WagmiProvider>
)
