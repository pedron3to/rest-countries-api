import type { AppProps } from 'next/app'
import React, { useMemo, useState } from 'react'
import { Layout } from '../components/Layout'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [isTheme, setIsTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return theme[isTheme] || theme.dark;
  }, [isTheme]);

  function handleToogleTheme() {
    setIsTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Layout onToggleTheme={handleToogleTheme}>
        <Component {...pageProps} />
      </Layout >
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
