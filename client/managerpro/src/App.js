import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles"
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/Dashboard/Dashboard.jsx'
import Layout from "scenes/Layout/Layout.jsx"
import Products from 'scenes/Products/Products.jsx'
import Customers from 'scenes/Customers/Customers';
import React from 'react';
import Transactions from 'scenes/Transactions/Transactions';
import Geography from 'scenes/Geography/Geography'
import Overview from 'scenes/Overview/Overview';
import Daily from 'scenes/Daily/Daily';
import Monthly from 'scenes/Monthly/Monthly';
import Breakdown from 'scenes/Breakdown/Breakdown';
import Admins from 'scenes/Admins/Admins'
import Performance from 'scenes/Performance/Performance'
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
              <Route path='/products' element={<Products/>}/>
              <Route path='/customers' element={<Customers/>}/>
              <Route path='/transactions' element={<Transactions/>}/>
              <Route path='/geography' element={<Geography/>}/>
              <Route path='/overview' element={<Overview/>}/>
              <Route path='/daily' element={<Daily/>}/>
              <Route path='/monthly' element={<Monthly/>}/>
              <Route path='/breakdown' element={<Breakdown/>}/>
              <Route path='/admin' element={<Admins/>}/>
              <Route path='/performance' element={<Performance/>}/>
            </Route>
          </Routes>
       </ThemeProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
