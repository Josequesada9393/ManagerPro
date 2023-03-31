import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles"
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/Dashboard/Dashboard.jsx'
import Layout from "scenes/Layout/Layout.jsx"
import React from 'react';


function App() {



  const mode = useSelector((state) => state.global.mode);
  //only change the theme when the mode state in the global state changes. Otherwise, memoize
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
       </ThemeProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
