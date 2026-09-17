import { Link } from "react-router";


export default function Footer() {
  return (
    <section className=" bg-black border-t border-white/10 py-6 mt-auto ">
 <div className="flex justify-between items-center w-[1200px] mx-auto">
           <div >
              <p className="text-2xl font-bold text-white"><span className="text-blue-500">Movie</span>Explorer</p>
                <p className="text-white">© 2026 MovieExplorer. All rights reserved.</p>
        </div>

        <div className="flex justify-center items-center text-white gap-2">
            <Link to="/">Github</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">twitter</Link>
             <Link to="/">Youtube</Link>
        </div>
 </div>
    </section>
  )
}
