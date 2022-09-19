import React from "react";
export type AppRoutes = {
    path: string;
    exact: boolean;
    component: any;
  };
  


const Home = React.lazy(() => import("./pages/Home"));
const ViewPage = React.lazy(() => import("./pages/ViewPage"));
const Download = React.lazy(() => import("./pages/Download"));
export const routes: AppRoutes[] = [
    { path: "/", exact: true, component: Home },
    { path: "/preview", exact: true, component: ViewPage },
    { path: "/download", exact: true, component: Download },
]