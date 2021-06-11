import React from 'react';
/* import Button from '@material-ui/core/Button'; */
import Layout from './layout'
import ThemeProvider from '../components/contexts/themeProvider';

export default function App() { 
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>)
}



/* function App() {
  return
}
 */