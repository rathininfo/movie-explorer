export default function About() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12">

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        About <span className="text-primary">MovieExplorer</span>
      </h1>

      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Discover, search, and explore movies & TV shows from around the world.
      </p>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Section 1 */}
        <section className="bg-card border border-white/500 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-3">🎬 What is MovieExplorer?</h2>
          <p className=" leading-relaxed">
            MovieExplorer is a simple web application built with React and
            Tailwind CSS. It lets you browse thousands of movies and TV shows
            and view detailed information like rating, release date, genre,
            and summary.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-card border border-white/500 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-3">✨ Features</h2>
          <ul className="space-y-2">
            <li> Browse all TV shows</li>
            <li> Search movies by title</li>
            <li> View detailed info in modal</li>
            <li> Fully responsive design</li>
            <li> Fast &amp; free (no signup needed)</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="bg-card border border-white/500 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-3">🛠️ Tech Stack</h2>
          <ul className="space-y-2">
            <li>React</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>TVMaze API</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-card border border-white/500 rounded-xl p-6">
          <h2 className="text-xl font-bold text-primary mb-3">📧 Contact</h2>
          <p className="">
            Found a bug or want to say hi? Reach out on{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}