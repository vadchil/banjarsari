import { useMemo, useState } from 'react';
import Gallery from './components/Gallery.jsx';
import Modal from './components/Modal.jsx';
import photos from './data/photos.js';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const randomizedPhotos = useMemo(() => {
    const copy = [...photos];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);

  return (
    <div className="min-h-screen bg-cream text-slate-800">
      <div className="relative overflow-hidden">
        <div className="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-amber-100 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-24 -left-6 h-72 w-72 rounded-full bg-rose-100 blur-3xl opacity-50"></div>

        <header className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-12 gap-6 animate-fadeUp">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Kumpulan Momen Hangat</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
            Kenang-Kenangan KKN 2026 <br />Desa Banjarsari
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
            “Satu Cerita, Seribu Kenangan” — rangkaian foto dan catatan kecil yang merekam setiap detik perjalanan kami.
          </p>
        </header>
      </div>

      <main>
        <Gallery photos={randomizedPhotos} onSelect={setSelectedPhoto} />
      </main>

      <footer className="px-6 py-14 text-center text-sm text-slate-500">
        <p className="font-body text-base text-slate-600 mb-2">Terima kasih untuk semua kenangan indah.</p>
      </footer>

      <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
};

export default App;
