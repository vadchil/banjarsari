import { useEffect } from 'react';

const Modal = ({ photo, onClose }) => {
  useEffect(() => {
    if (!photo) return undefined;

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail foto ${photo.title}`}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-modalIn"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Tutup"
        >
          ×
        </button>
        <img src={photo.src} alt={photo.title} className="w-full h-[420px] object-cover" />
        <div className="p-8 text-center">
          <h3 className="font-display text-3xl text-slate-800 mb-2">{photo.title}</h3>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">{photo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
