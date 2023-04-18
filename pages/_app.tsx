import '@/styles/globals.css'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache, theme } from '@import/theme'
import { CustomAppProps } from '@import/interface'

const App = ({ Component, emotionCache = createEmotionCache(), pageProps }: CustomAppProps) => {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default App
