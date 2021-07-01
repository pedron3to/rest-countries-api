import type { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components/Layout'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.light}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
