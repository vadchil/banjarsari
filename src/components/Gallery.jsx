import { useEffect, useRef, useState } from 'react';
import PhotoCard from './PhotoCard.jsx';

const AUTO_SCROLL_DELAY = 3500;

const Gallery = ({ photos, onSelect }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!photos.length) return undefined;

    const id = setInterval(() => {
      if (isPaused) return;
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, AUTO_SCROLL_DELAY);

    return () => clearInterval(id);
  }, [isPaused, photos.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const activeChild = container.children[activeIndex];
    if (activeChild) {
      container.scrollTo({
        left: activeChild.offsetLeft - container.offsetLeft - 32,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section className="relative py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 gallery-gradient"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 gallery-gradient"></div>

      <div
        ref={scrollRef}
        className="relative flex gap-4 overflow-x-auto px-4 sm:px-8 md:px-14 pb-6 scroll-smooth"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        onFocus={pause}
        onBlur={resume}
        aria-label="Galeri foto kenangan"
      >
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            index={index}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
