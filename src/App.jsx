import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-4xl font-bold">Hello World</div>,
  },
]);

function Router() {
  return (
      <RouterProvider router={router} /> 
    )
    
}

export default Router; 
