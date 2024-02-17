import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, CreateProject } from 'domains/core/containers';
import { ThemeProvider } from '@material-ui/core';
import theme from 'app/theme';
import { Footer} from 'domains/core/components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/createProject" element={<CreateProject />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
