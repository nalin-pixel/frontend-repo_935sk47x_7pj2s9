import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Trending from './components/Trending';
import Newsletter from './components/Newsletter';

function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Anime Verse • Made with ♥</p>
        <div className="flex items-center gap-5">
          <a href="#collections" className="hover:text-pink-600">Collections</a>
          <a href="#trending" className="hover:text-pink-600">Trending</a>
          <a href="#newsletter" className="hover:text-pink-600">Newsletter</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-pink-200 selection:text-pink-900">
      <Navbar />
      <Hero />
      <Collections />
      <Trending />
      <Newsletter />
      <Footer />
    </div>
  );
}
