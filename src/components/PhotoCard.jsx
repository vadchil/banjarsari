const rotationClasses = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1'];

const PhotoCard = ({ photo, index, onSelect }) => {
  const rotationClass = rotationClasses[index % rotationClasses.length];

  return (
    <button
      type="button"
      onClick={() => onSelect(photo)}
      className={`group relative flex-shrink-0 w-60 sm:w-64 md:w-72 lg:w-80 mx-4 origin-top transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 ${rotationClass}`}
      aria-label={`Lihat foto ${photo.title}`}
    >
      <div className="bg-white rounded-lg shadow-[0_25px_45px_rgba(44,37,33,0.18)] pb-10 pt-4 px-4 text-left">
        <div className="overflow-hidden rounded-md shadow-inner mb-4">
          <img
            src={photo.src}
            alt={photo.title}
            className="h-64 w-full object-cover transition-all duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <h3 className="font-display text-lg text-slate-800">{photo.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{photo.description}</p>
      </div>
    </button>
  );
};

export default PhotoCard;
