    import { Link } from "react-router";


    export default function HeroBanner() {
      return (
        <section
          className="h-screen flex flex-col items-center justify-center text-center px-6 py-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.75), rgba(15,15,15,0.95)), url("https://images.unsplash.com/photo-1573917308539-f1ba0c83ae4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
    
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-white">
            DISCOVER <span className="text-primary text-blue-500">MOVIES</span>
          </h1>


          <p className="text-white text-base sm:text-lg max-w-xl mb-8">
            Explore and discover your favorite movies <br /> from around the world.
          </p>

    
          <Link
            to="/movies"
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-shadow"
          >
            Explore Now →
          </Link>
        </section>
      )
    }
