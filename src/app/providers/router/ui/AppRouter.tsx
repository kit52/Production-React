import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export default function AppRouter() {
  return (
    <Suspense fallback="...">
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
}
