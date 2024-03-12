import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, CreateProject } from 'domains/core/containers';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import theme from 'app/theme';
import { Footer } from 'domains/core/components';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import RoomsGeneral from 'domains/core/containers/RoomsGeneral';
import CreateRoom from 'domains/core/containers/CreateRoom';
import RoomsEdit from 'domains/core/containers/RoomsEdit';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}


function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/createProject" element={<CreateProject />} />
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomsGeneral />} />
            <Route path="/createRoom" element={<CreateRoom />} />
            <Route path="/editRoom" element={<RoomsEdit />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
