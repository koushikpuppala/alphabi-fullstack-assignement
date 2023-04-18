import { DocumentProps } from 'next/document'

export interface CustomDocumentProps extends DocumentProps {
	emotionStyleTags: JSX.Element[]
}
