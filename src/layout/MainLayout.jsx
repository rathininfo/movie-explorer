import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


export default function MainLayout() {
  return (
   <div>
    <Navbar></Navbar>
     <main className="flex-1">
        <Outlet />   
      </main>
   </div>
  )
}
