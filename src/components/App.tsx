import React from 'react';
/* import Button from '@material-ui/core/Button'; */
import Layout from './layout'
import ThemeProvider from '../components/contexts/themeProvider';
import ErrorBoundary from './errorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </ErrorBoundary>
  )
}



/* function App() {
  return
}
 */