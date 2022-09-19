import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoutes, routes } from './routes';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
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
  );
};

export default App;
