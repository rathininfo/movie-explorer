import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
   <div>
    <Navbar></Navbar>
     <main className="flex-1">
        <Outlet />   
      </main>
      <Footer></Footer>
   </div>
  )
}
