import { EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'

export interface CustomAppProps extends AppProps {
	emotionCache?: EmotionCache
}
