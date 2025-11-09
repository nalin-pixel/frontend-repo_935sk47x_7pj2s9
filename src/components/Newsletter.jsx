import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const submit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <section id="newsletter" className="py-16 lg:py-24 bg-gradient-to-t from-pink-50/60 to-white dark:from-pink-950/10 dark:to-transparent">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Join the Newsletter</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Get weekly drops of elegant kawaii art, themes, and wallpapers.</p>

        <form onSubmit={submit} className="mt-6 flex gap-2 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@animeverse.com"
            className="flex-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-full bg-pink-500 text-white px-6 py-3 text-sm font-medium shadow hover:bg-pink-600 active:bg-pink-700 disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-green-600">Arigatou! You are in. Check your inbox.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600">Please enter a valid email.</p>
        )}
      </div>
    </section>
  );
}
