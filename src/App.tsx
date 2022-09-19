import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextProvider from './hooks/contextHook';
import { AppRoutes, routes } from './routes';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  
  return (
    <TextProvider>
    <Suspense fallback={null}> 
            <GlobalStyles />
    <Router> 
      <Routes>
 
     {  routes.map((route: AppRoutes, index: number) => {
                const { component: Component, path, exact } = route;
                return (
                  <Route key={index} path={path} element={<Component />} />
                );
              })}
    </Routes>
    </Router>
    </Suspense>
    </TextProvider>
    
  );
};

export default App;
