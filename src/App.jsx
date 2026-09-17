// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
      element: <Home />,
      }
    ]

  }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;