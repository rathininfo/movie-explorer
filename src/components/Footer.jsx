import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <section className=" bg-black border-t border-white/10 py-6 mt-auto ">
 <div className="flex justify-between items-center w-[1200px] mx-auto">
           <div >
              <p className="text-2xl font-bold text-white"><span className="text-blue-500">Movie</span>Explorer</p>
                <p className="text-white">© 2026 MovieExplorer. All rights reserved.</p>
        </div>

        <div className="flex justify-center items-center text-white gap-2">
            <Link to="/"><FaGithub /></Link>
            <Link to="/"><FaFacebook /></Link>
            <Link to="/"><FaTwitter /></Link>
             <Link to="/"><FaYoutube /></Link>
        </div>
 </div>
    </section>
  )
}
