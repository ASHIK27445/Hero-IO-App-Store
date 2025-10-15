import { createBrowserRouter } from "react-router"
import Root from "../Root/Root";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import AppDetails from "../AppDetails/AppDetails";
import InstalledApps from "../InstalledApp/InstalledApp";
import ErrorRouting from "../Error/ErrorRouting";
import ErrorApp from "../Error/ErrorApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true, 
            loader: () => fetch('/app.json'),
            Component: Home
        },
        {
          path: "apps",
          loader: () => fetch('/app.json'), 
          Component: Apps
        },
        {
          path: 'appDetails/:appID',
          loader: () => (fetch(`/app.json`)),
          Component: AppDetails,
          errorElement: <ErrorApp></ErrorApp>
        },
        {
          path: 'installedApp',
          Component: InstalledApps
        },
          {
        path: "*",
      Component: ErrorRouting
      }
    ]
  }

]);


