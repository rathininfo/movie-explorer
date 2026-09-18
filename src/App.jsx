// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
      element: <Home />,
      },
      {
        path:"/movies",
        element: <Movies></Movies>
      },
       { path: 'about', 
        element: <About /> }
    ]

  }

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;