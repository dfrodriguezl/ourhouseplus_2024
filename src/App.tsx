import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, CreateProject } from 'domains/core/containers';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import theme from 'app/theme';
import { Footer } from 'domains/core/components';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/createProject" element={<CreateProject />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
